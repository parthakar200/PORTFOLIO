import React from "react";
import ConnectSocial from "./ConnectSocial";
import FormSec from "./Form";


const Contact = ({contactRef}) => {
  return (
    <main 
      ref={contactRef}
      className="relative min-h-screen pt-20 pb-32 px-8 lg:px-24">
      {/* <div className="fixed inset-0 noise-bg pointer-events-none"></div> */}
      <div className="absolute top-1/2 left-[-1.5em] md:rotate-0 md:top-1/3 md:left-[-0.2em] md:text-[35vh] lg:text-[60vh] lg:left-[-2.5em] lg:top-1/3 watermark-text font-black z-0 -rotate-90 text-center">
        CONTACT
      </div>
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="mb-10">
          <p className="text-primary text-[10px] font-black tracking-[0.6em] uppercase mb-4">
            Start a conversation
          </p>
          <h1 className="text-[12vw] lg:text-[10vw] font-black tracking-tighter leading-[0.85] uppercase mb-8">
            GET <span className="text-outline font-accent italic px-2">IN</span>
            <br />
            TOUCH
          </h1>
        </div>
        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
          <ConnectSocial/>
        <FormSec/>
        </div>
        
    </main>
  );
};

export default Contact;
