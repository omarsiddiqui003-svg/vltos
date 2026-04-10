"use client";

import { useMotionValueEvent, MotionValue } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

const FRAME_COUNT = 192; // 000 to 191

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.041s.png`;
};

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    // Create an array of promises to track loading
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        // Render first frame as soon as it's loaded to prevent empty screen
        if (loadedCount === 1 && isMounted) {
          renderFrame(img);
        }
        if (loadedCount === FRAME_COUNT && isMounted) {
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    
    setImages(loadedImages);

    return () => { isMounted = false; };
  }, []);

  const renderFrame = useCallback((image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use device pixel ratio for sharper renders on retina displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    // Provide the original virtual dimensions for CSS
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    // object-fit: cover logic
    const hRatio = window.innerWidth / image.width;
    const vRatio = window.innerHeight / image.height;
    const ratio = Math.max(hRatio, vRatio);
    
    const centerShift_x = (window.innerWidth - image.width * ratio) / 2;
    const centerShift_y = (window.innerHeight - image.height * ratio) / 2;
    
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(
      image,
      0, 0, image.width, image.height,
      centerShift_x, centerShift_y, image.width * ratio, image.height * ratio
    );
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    const frameIndex = Math.min(
      FRAME_COUNT - 1, 
      Math.floor(latest * FRAME_COUNT)
    );
    const image = images[frameIndex];
    
    if (image && image.complete) {
      renderFrame(image);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        let frameIndex = Math.floor(scrollYProgress.get() * FRAME_COUNT);
        if (frameIndex >= FRAME_COUNT) frameIndex = FRAME_COUNT - 1;
        
        const image = images[frameIndex];
        if (image && image.complete) {
          renderFrame(image);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress, renderFrame]);

  return (
    <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
      <canvas
        ref={canvasRef}
        className="block"
      />
      
      {/* Loading indicator, fades out when fully loaded but we showed 1st frame immediately */}
      {!imagesLoaded && (
        <div className="absolute top-4 right-4 z-50 text-white/50 text-sm font-mono tracking-widest uppercase animate-pulse">
          Loading Data...
        </div>
      )}
    </div>
  );
}
