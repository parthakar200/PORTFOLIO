import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function OffCanvas({ open, setOpen, sections }) {
  const panelRef = useRef(null);

  const [list, setList] = useState([
    "Home",
    "Resume",
    "Stack",
    "Project",
    "Contact",
  ]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, setOpen]);

  const handleMenuClick = (item) => {
    if (item === "Resume") {
      const link = document.createElement("a");
      link.href = "/ParthaResume.pdf";
      link.download = "Resume.pdf";
      link.click();
    } else {
      sections[item]?.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  return (
    <div
      ref={panelRef}
      className={`${open ? "visible w-[300px] " : "opacity-0 w-0 duration-500"} transition-all duration-400 ease-in-out h-screen fixed  rounded-l  top-0 right-[-40px] px-5 pt-10 md:pt-16 mr-10 flex flex-col justify-start items-center gap-10 z-1 glass-card   border border-white/10  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8)`}
    >
      <div className="flex flex-col justify-center gap-5 w-full border-white/10  py-2">
        {list.map((ele) => {
          return (
            <div
              className={` relative group cursor-pointer transition-all ease-out`}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation(); // prevent outside click
                  handleMenuClick(ele);
                }}
                key={ele}
                className={`transition-all ease-in-out duration-500 text-center p-2 md:w-full text-white/80 text-sm font-light  border-b-2 border-white/10 uppercase tracking-[0.5em]`}
              >
                {ele}
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3">
        <a href="mailto:parthasarathikar2002@gmail.com" target="_blank">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="text-primary  hover:text-red-500 hover:drop-shadow-[2px_3px_4px_rgba(211,255,95,0.9)]  cursor-pointer transition-all duration-300 ease-in"
          />
        </a>
        <a href="https://github.com/parthakar200" target="blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="text-primary  hover:text-red-500 hover:drop-shadow-[2px_3px_4px_rgba(211,255,95,0.9)]  cursor-pointer transition-all duration-300 ease-in"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sk-parthasarathi-kar/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="text-primary  hover:text-red-500 hover:drop-shadow-[2px_3px_4px_rgba(211,255,95,0.9)]  cursor-pointer transition-all duration-300 ease-in"
          />
        </a>
      </div>
    </div>
  );
}
