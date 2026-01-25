import React from "react";

const LeftCard = (props) => {
  return (
    <article class="project-card group relative grid grid-cols-1 lg:grid-cols-12 items-center gap-1 overflow-hidden lg:mb-5 mb-16">
      <div class="lg:col-span-8 relative aspect-[16/9] overflow-hidden bg-slate-800 rounded-sm">
        <img
          alt="Cybersecurity Dashboard project"
          class="project-image w-full h-full object-cover opacity-60 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
          src={props.img}
        />
        <div class="absolute inset-0 cinematic-gradient"></div>
        <div class="absolute bottom-8 left-8">
          <span class="text-primary font-display text-4xl opacity-20">{props.num}</span>
        </div>
      </div>
      <div class="lg:col-span-4 lg:-ml-24 z-10 space-y-6">
        <div>
          <h3 class="font-display text-4xl md:text-6xl text-white group-hover:text-primary tracking-tighter font-bold transition-colors duration-300">
            {props.fname} <span class="text-outline">{props.lname}</span>
          </h3>
          <p class="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mt-2">
            {props.tech}
          </p>
        </div>
        <p class="text-slate-400 text-sm leading-relaxed">
          {props.abt}
        </p>
        <div class="flex flex-wrap gap-3">
          {
            props.stack.map((ele,idx)=>{
              return (
                <span key={idx} class="px-3 py-1 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                  {ele}
                </span>
              )
            })
          }
          
        </div>
        <a
          class="inline-flex items-center gap-4 bg-primary text-black px-8 py-4 font-display text-lg hover:bg-white transition-all transform hover:-translate-y-1"
          href={props.link}
        >
          VIEW PROJECT
          <span class="material-icons-outlined text-sm">{props.icon}</span>
        </a>
      </div>
    </article>
  );
};

export default LeftCard;
