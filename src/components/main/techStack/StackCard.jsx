
export function StackCard(props){

    return (
        <div className="glass-card glow-card p-8 group transition-all duration-500 rounded-lg">
            <div className="mb-8 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
              {props.icon}
            </div>
            <h4 className="font-display text-white text-lg font-bold tracking-wider mb-2">{props.name}</h4>
            <p className="text-white/40 text-sm font-light uppercase tracking-widest">{props.subName}</p>
          </div>
    )
}