import React from "react";
import Availlability from "./Availlability";

const ConnectSocial = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 mb-6">
        Connect
      </h3>
      <div className="flex flex-col gap-4">
        <a
          className="group flex items-center gap-4 text-xl lg:text-3xl font-light"
          href="mailto:parthasarathikar2002@gmail.com"
        >
          <span className="text-primary group-hover:translate-x-1 transition-transform">
            →
          </span>
          <span className="group-hover:text-primary transition-colors">
            Email Me
          </span>
        </a>
        <a
          className="group flex items-center gap-4 text-xl lg:text-3xl font-light"
          href="https://www.linkedin.com/in/sk-parthasarathi-kar/"
        >
          <span className="text-primary group-hover:translate-x-1 transition-transform">
            →
          </span>
          <span className="group-hover:text-primary transition-colors">
            LinkedIn
          </span>
        </a>
        <a
          className="group flex items-center gap-4 text-xl lg:text-3xl font-light"
          href="https://github.com/parthakar200"
        >
          <span className="text-primary group-hover:translate-x-1 transition-transform">
            →
          </span>
          <span className="group-hover:text-primary transition-colors">GitHub</span>
        </a>
      </div>
      </div>
      <Availlability/>
    </div>
  );
};

export default ConnectSocial;
