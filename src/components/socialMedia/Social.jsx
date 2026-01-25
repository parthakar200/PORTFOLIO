
export function SocialMedia(){

    return (
        <div className="hidden md:flex fixed right-12 md:right-2 bottom-0 flex-col items-center gap-2 pb-12 z-49">
                <div className="flex items-center flex-col gap-16">
                    <a className="text-white/30 hover:text-primary transition-all duration-300 -rotate-90 origin-center translate-y-[-20px] font-display text-[10px] tracking-[0.3em] uppercase"
                        href="https://www.linkedin.com/in/sk-parthasarathi-kar/">LinkedIn</a>
                    <a className="text-white/30 hover:text-primary transition-all duration-300 -rotate-90 origin-center translate-y-[-20px] font-display text-[10px] tracking-[0.3em] uppercase"
                        href="https://github.com/parthakar200">Github</a>
                </div>
                <div className="w-[1px] h-32 bg-gradient-to-t from-primary to-transparent"></div>
            </div>
    )
}