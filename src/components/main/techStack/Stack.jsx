import { useState } from "react";
import { StackCard } from "./StackCard";
import { SocialMedia } from "../../socialMedia/Social";
import { faReact,faJava, faHtml5, faCss, faJs, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faBiohazard, faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons";


export function Stack({stackRef}) {
const [stackDetail] = useState([
                                                {
                                                    tech:"SPRING BOOT",
                                                    subtech:"Backend REST APIs",
                                                    logo:faLeaf
                                                },
                                                {
                                                    tech:"CORE JAVA",
                                                    subtech:"OOP Fundamentals",
                                                    logo:faJava
                                                },
                                                {
                                                    tech:"SQL/PLSQL",
                                                    subtech:"Relational Databases",
                                                    logo:faDatabase
                                                },
                                                {
                                                    tech:"REACT",
                                                    subtech:"Modern UI Development",
                                                    logo:faReact
                                                },
                                                {
                                                    tech:"HTML5",
                                                    subtech:"Semantic Markup",
                                                    logo:faHtml5
                                                },
                                                {
                                                    tech:"CSS3",
                                                    subtech:"Responsive Styling",
                                                    logo:faCss
                                                },
                                                {
                                                    tech:"JAVASCRIPT(ES6)",
                                                    subtech:"Client Side Logic",
                                                    logo:faJs
                                                },
                                                {
                                                    tech:"TAILWIND CSS",
                                                    subtech:"Utility First Styling",
                                                    logo:faBiohazard
                                                },
                                                {
                                                    tech:"BOOTSTRAP",
                                                    subtech:"Responsive Components",
                                                    logo:faBootstrap
                                                }
                                            ]);

  return (
    <section ref={stackRef} className="py-32 px-6 md:px-20 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-start md:text-left max-w-xl ">
          <h2 className="font-display text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase  mb-4">
            Modern <span className="text-outline text-primary italic font-serif">Stack</span>
          </h2>
          <div className="h-1 w-20 bg-primary  md:mx-0"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                stackDetail.map((ele,idx)=>{
                    return (
                        <div key={idx}>
                            <StackCard name={ele.tech} subName={ele.subtech} icon={ele.logo}/>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
}
