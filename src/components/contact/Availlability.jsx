import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Availlability = () => {
  return (
    <div>
      <h3 class="text-[10px] font-black tracking-[0.3em] uppercase text-gray-500 mb-6">
        Contact No
      </h3>
      <div class="flex items-center gap-3">
        <FontAwesomeIcon icon={faPhone} className="text-primary text-xl md:text-2xl"/>
        <p class="text-l lg:text-2xl font-light uppercase tracking-widest text-gray-300">
          +91-7853014918
        </p>
      </div>
    </div>
  );
};

export default Availlability;
