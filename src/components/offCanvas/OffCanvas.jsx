import { useState } from "react"

export function OffCanvas(){

    const [list, setList] = useState(['Home','Resume','Stack','Project','Contact']);

    return (
        <div className="fixed max-h-screen w-[200px] rounded-xl top-10 right-12 px-5 mr-10 flex flex-col justify-center items-center gap-3 z-50 bg-white/[0.01] backdrop-blur-2xl border border-white/10  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8)">
            
            {
                list.map((ele,idx)=>{
                    return (
                        <div className="relative group w-full flex flex-col-reverse cursor-pointer">
                            <div key={idx} className=" text-center p-2 text-white/40 text-sm font-light tracking-widest border-b-2 border-white/10">{ele}</div>
                            <div
                                className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500">
                            </div>  
                        </div>
                    )
                })
            }
        </div>
    )
}