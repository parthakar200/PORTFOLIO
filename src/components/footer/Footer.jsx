
export function Footer(){

    return (
        <footer className="bg-background-dark py-20 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
                <div className="flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 bg-white flex items-center justify-center rounded-full overflow-hidden border border-white/10">
                            <div className="w-full h-full bg-cover bg-center"
                                style={{backgroundImage:'url("../../../public/image/myPhoto.jpeg")'}}>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-display text-sm font-bold tracking-widest uppercase text-white">S.K.
                                PARTHASARATHI KAR</h4>
                            <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] mt-1">JAVA FULL-STACK
                                DEVELOPER</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-6">
                    <nav className="flex gap-12">
                        <a className="font-display text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-primary transition-colors"
                            href="#">Resume</a>
                        <a className="font-display text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-primary transition-colors"
                            href="#">Manifesto</a>
                        <a className="font-display text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-primary transition-colors"
                            href="#">Contact</a>
                    </nav>
                    <p className="text-white/20 text-[9px] uppercase tracking-[0.5em]">© 2026 Design. Code. Impact.</p>
                </div>
            </div>
            <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.02] select-none text-[20vw]  font-display font-bold leading-none translate-y-1/2 overflow-hidden whitespace-nowrap">
                ENGINEERING
            </div>
        </footer>
    )
}