import React, { useState } from "react";
import LeftCard from "../projectCard/LeftCard";
import RightCard from "../projectCard/RightCard";

const ProjectSection = ({projectRef}) => {

    const [cardDetail] = useState([
                                                    {
                                                        image:"https://indiatravel.com/wp-content/uploads/2024/03/Places-to-visit-in-Odisha.jpg",
                                                        projectnum:"01",
                                                        firstname:"EXPLORE",
                                                        lastname:"ODISHA",
                                                        link:"https://history-of-odisha.vercel.app/",
                                                        tech:"DIGITAL TOURISM EXPERIENCE",
                                                        about:"A modern web experience to explore Odisha’s districts, culture, and tourist attractions through an interactive map and responsive design.",
                                                        stack:['HTML','CSS','Java-Script'],
                                                        icon:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
                                                        )
                                                    },
                                                    {
                                                        image:"https://mir-s3-cdn-cf.behance.net/projects/404/c6017c230687699.Y3JvcCwxNzI1LDEzNTAsMzgsMA.jpg",
                                                        projectnum:"02",
                                                        firstname:"DHOOM",
                                                        lastname:"MUSIC",
                                                        link:"https://shoftishy.vercel.app/",
                                                        tech:"IMMERSIVE MUSIC EXPERIENCE",
                                                        about:"An interactive music web experience that combines clean visuals and smooth interactions to make discovering and enjoying music simple and engaging.",
                                                        stack:['HTML','CSS','Java-Script'],
                                                        icon:(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                        )
                                                    },
                                                    {
                                                        image:"https://tdwi.org/articles/2020/12/08/-/media/TDWI/TDWI/BITW/AI17.jpg",
                                                        projectnum:"03",
                                                        firstname:"JAVA DATABASE",
                                                        lastname:"EXPLORER",
                                                        link:"https://github.com/parthakar200/JAVA-SQL",
                                                        tech:"DATA EXPLORATION TOOL",
                                                        about:"This project is a Java-based application integrated with SQL to manage and process structured data efficiently. It focuses on core backend logic, database interaction, and reliable data handling through a clean and maintainable design.",
                                                        stack:['JAVA','JDBC','SQL/PLSQL'],
                                                        icon:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" /></svg>
                                                        )
                                                    }
                                                ]);

  return (
    <div ref={projectRef} className=" px-6 md:px-20 w-full" >
    <header className="mb-20 max-w-xl">
      <h1 className=" font-display text-6xl md:text-8xl leading-none uppercase flex flex-col md:flex-col md:items-baseline gap-4">
        <span className="text-6xl md:text-8xl font-bold text-white tracking-tighter uppercase">SELECTED</span>
        <span className="text-outline italic font-serif">
          Projects
        </span>
      </h1>
      <div className="w-24 h-1 bg-primary mt-6"></div>
      <p className="mt-5 text-slate-500 dark:text-slate-400 max-w-xl text-sm leading-relaxed uppercase tracking-widest">
        Projects demonstrating full stack development skills, including modern frontend frameworks, Java-based backend development, and database integration.
      </p>
    </header>
    
    {
        cardDetail.map((ele,idx)=>{
            return ele.projectnum%2 == 0 ? <RightCard key={idx} img={ele.image} num={ele.projectnum} fname={ele.firstname} 
                                          lname={ele.lastname} link={ele.link} tech={ele.tech} abt={ele.about} stack={ele.stack} icon={ele.icon}/>
                                         : <LeftCard key={idx} img={ele.image} num={ele.projectnum} fname={ele.firstname} lname={ele.lastname} link={ele.link} tech={ele.tech} abt={ele.about} stack={ele.stack} icon={ele.icon}/> 
        })
    }
    
    </div>
  );
};

export default ProjectSection;
