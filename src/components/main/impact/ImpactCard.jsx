
export function ImpactCard(props){

    
    console.log(props.width);
    

    return (
            <div
            className="glass-card md:w-[420px] p-12 hover:bg-white/[0.05] transition-all duration-700 group relative overflow-hidden">
            <div
                className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500">
            </div>
            <span
                className="text-[10px] font-display tracking-[0.4em] text-white/30 uppercase mb-12 block">{props.exp}</span>
            <div className="flex items-baseline gap-2 mb-4">
                <span
                    className="text-7xl md:text-8xl font-display font-bold text-white leading-none">{props.num}</span>
                <span className="text-primary font-serif italic text-2xl font-bold">{props.yr}</span>
            </div>
            <h3 className="text-white/60 text-xs tracking-widest uppercase font-medium">{props.abt}</h3>
        </div>             
    )
}