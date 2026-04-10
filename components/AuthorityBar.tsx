export default function AuthorityBar() {
  return (
    <div className="w-full bg-[#0a0a0a] border-y border-white/5 py-12 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white/40 font-medium tracking-widest uppercase text-sm md:w-1/4">
          Trusted Expertise
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-end gap-10 md:gap-16 flex-1 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          
          {/* Placeholder 1 */}
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white text-opacity-80 group-hover:text-white transition-colors" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
            </div>
            <span className="text-sm text-zinc-400 group-hover:text-white transition-colors max-w-[150px] leading-tight font-medium">
              Google Digital Marketing Certification
            </span>
          </div>

          {/* Placeholder 2 */}
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white text-opacity-80 group-hover:text-[#FF7A59] transition-colors" fill="currentColor"><path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"/></svg>
            </div>
            <span className="text-sm text-zinc-400 group-hover:text-white transition-colors max-w-[150px] leading-tight font-medium">
              HubSpot Social Media Strategy
            </span>
          </div>

          {/* Placeholder 3 */}
          <div className="flex items-center gap-4 group cursor-default">
             <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white text-opacity-80 group-hover:text-[#0668E1] transition-colors" fill="currentColor"><path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/></svg>
            </div>
            <span className="text-sm text-zinc-400 group-hover:text-white transition-colors max-w-[150px] leading-tight font-medium">
              Meta Blueprint Instagram Specialist
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
