import { useState } from "react";
import { OffCanvas } from "../offCanvas/OffCanvas";

export function NavBar({homeRef,stackRef,projectRef,resumeRef,contactRef}) {
  
  const [open, setOpen] = useState(false);


  return (
    // mix-blend-difference
    <header className="flex items-center justify-between px-6 md:px-12 py-5 fixed w-full z-50">
      <div className="flex items-center gap-3 ">
        <div className="w-10 h-[1px] bg-primary "></div>
        <h2 
           onClick={()=>
            homeRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="font-display text-sm font-bold tracking-[0.4em] uppercase cursor-pointer">
          PORTFOLIO
        </h2>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
      </div>

      <OffCanvas open={open} 
                setOpen={setOpen}
                sections={{
                          Home: homeRef,
                          Resume: resumeRef,
                          Stack: stackRef,
                          Project: projectRef,
                          Contact: contactRef,
                        }}
      />
      <button
      onClick={(e) => {
          e.stopPropagation();
          setOpen(prev => !prev);
          } 
        }
        className="group w-fit h-fit p-3 flex flex-col gap-2 items-end relative"
      >
        {/* Top bar */}
        <span
          className={`block h-[2px] bg-white  transition-all duration-700 ease-in-out ${open ? "w-8 rotate-45 translate-y-3 md:bg-primary " : "w-8 group-hover:w-12"}`}/>

        {/* Middle bar */}
        <span
          className={`block h-[2px] bg-primary transition-all duration-700 ease-in-out ${open ? "opacity-0" : "w-12 opacity-100"}`}/>

        {/* Bottom bar */}
        <span
          className={`block h-[2px] bg-white transition-all duration-700 ease-in-out ${open ? "w-8 -rotate-45 -translate-y-2 md:bg-primary" : "w-6 group-hover:w-12"}`}/>
      </button>
    </header>
  );
}
