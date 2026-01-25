


export function Hero({stackRef,projectRef, homeRef}){

    

    return (
        <section ref={homeRef} className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
                <div className="flex flex-col items-center text-center">
                    <span
                        className="font-display text-[10px] md:text-xs tracking-[0.8em] uppercase text-primary mb-8 block text-glow">Engineering
                        Excellence</span>
                    <h1
                        className="font-display text-[12vw] md:text-[11vw] leading-[0.95] font-bold tracking-tighter uppercase mb-2">
                        THE <span className="italic  font-serif font-bold text-outline">S.K.</span>
                    </h1>
                    <h1
                        className="font-display text-[9vw] md:text-[8vw] leading-[0.95] font-bold tracking-wider  uppercase mb-12 title-gradient">
                        PARTHASARATHI
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl items-center mt-8">
                        <p
                            className="text-white/50 text-lg md:text-xl font-light leading-relaxed text-left border-l border-primary/30 pl-8">
                            Java Full Stack Developer hands-on <br /> <span
                                className="text-white font-medium italic serif">experience in SpringBoot and React,<br /> </span> focused on clean architecture and modern UI.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                            <button
                            onClick={()=>
                                projectRef.current.scrollIntoView({behavior: "smooth"})

                            }
                                className="bg-primary text-black font-display text-[10px] px-8 py-5 tracking-[0.3em] uppercase hover:invert transition-all duration-500">
                                View Works
                            </button>
                            <button
                                onClick={()=>
                                    stackRef.current.scrollIntoView({ behavior: "smooth" })
                                }
                                className="border border-white/20 glass-card px-8 py-5 font-display text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
                                The Stack
                            </button>
                        </div>
                    </div>
                </div>
            </section>
    )
}