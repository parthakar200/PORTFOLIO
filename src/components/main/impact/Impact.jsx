import { useState } from "react";
import { ImpactCard } from "./ImpactCard";

export function ImpactSec(){

    const [cardData,setCardData] = useState([
                                        {
                                        experience:"01 / Projects",
                                        num:"05",
                                        year:"Hands-on",
                                        about:"Academic & personal projects"
                                        },
                                        {
                                        experience:"02 / Skills",
                                        num:"08",
                                        year:"Core-Tech.",
                                        about:"Java • Spring • React • SQL"
                                        },
                                        {
                                        experience:"03 / Tools",
                                        num:"05",
                                        year:"+",
                                        about:"Eclipse • VS Code • GitHub"
                                        },
                                        {
                                        experience:"04 / Learning",
                                        num:"01",
                                        year:"Focus",
                                        about:"Java Full Stack"
                                        }
                                    ]);

    return (
        <section className="py-32 px-6 md:px-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
                        <div className="max-w-xl">
                            <h2
                                className="font-display text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-6">
                                Technical <span className=" text-outline italic font-serif">Impact</span>
                            </h2>
                            <div className="w-24 h-1 bg-primary mt-6"></div>
                            <p className="text-white/40 text-lg uppercase tracking-widest font-light mt-5">Focused on clean code and Building practical, scalable web applications.</p>
                        </div>
                        <div className="hidden md:block w-32 h-[1px] bg-white/20 mb-4"></div>
                    </div>

                    {/* Impact Cards */}
                    <div className="md:flex md:h-full max-h-[800px] w-full overflow-auto scrollbar-hide bg-white/10 border-2 border-white/10 ">
                        {
                            cardData.map((ele,idx) => {
                                return (
                                    <div key={idx} className="">
                                         <ImpactCard key={idx} exp={ele.experience} num={ele.num} yr={ele.year} abt={ele.about}/>
                                    </div>
                                )
                                
                            })
                        }
                    </div>
                </div>
            </section>
    )
}