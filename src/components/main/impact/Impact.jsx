import { useState } from "react";
import { ImpactCard } from "./ImpactCard";

export function ImpactSec(){

    const [cardData,setCardData] = useState([
                                        {
                                        experience:"01 / Experience",
                                        num:"05",
                                        year:"Years",
                                        about:"Production Scalability"
                                        },
                                        {
                                        experience:"02 / Architecture",
                                        num:"24",
                                        year:"+",
                                        about:"Enterprise Systems"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        },
                                        {
                                        experience:"03 / Quality",
                                        num:"99",
                                        year:"%",
                                        about:"Clean Code Metrics"
                                        }

                                    ]);

    return (
        <section className="py-32 px-6 md:px-20 relative  overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
                        <div className="max-w-xl">
                            <h2
                                className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none mb-6">
                                Technical <span className="text-primary italic font-serif">Impact</span>
                            </h2>
                            <p className="text-white/40 text-lg uppercase tracking-widest font-light">Metric-driven
                                engineering for global scale systems.</p>
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