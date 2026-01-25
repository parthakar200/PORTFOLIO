import React from "react";

const FormSec = () => {
  return (
    <form action="#" className="space-y-16 pt-8 col-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
        <div className="relative group">
          <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-focus-within:text-primary transition-colors">
            Your Name
          </label>
          <input
            className="w-full py-4 cinematic-input text-2xl lg:text-3xl font-light text-white"
            placeholder="Type here..."
            type="text"
          />
        </div>
        <div className="relative group">
          <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-focus-within:text-primary transition-colors">
            Email Address
          </label>
          <input
            className="w-full py-4 cinematic-input text-2xl lg:text-3xl font-light text-white"
            placeholder="example@domain.com"
            type="email"
          />
        </div>
      </div>
      <div className="relative group">
        <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-focus-within:text-primary transition-colors">
          Inquiry Type
        </label>
        <select className="w-full py-4 cinematic-input text-2xl lg:text-3xl font-light text-white appearance-none cursor-pointer">
          <option className="bg-surface-dark">Full-Stack Development</option>
          <option className="bg-surface-dark">Backend Architecture</option>
          <option className="bg-surface-dark">Just a greeting</option>
        </select>
        <span className="material-symbols-outlined absolute right-0 bottom-4 text-primary pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <div className="relative group">
        <label className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-focus-within:text-primary transition-colors">
          Project Brief
        </label>
        <textarea
          className="w-full py-4 cinematic-input text-2xl lg:text-3xl font-light text-white resize-none"
          placeholder="Describe your vision..."
          rows="2"
        ></textarea>
      </div>
      <div className="flex justify-start lg:justify-end pt-8">
        <button
          className="relative group overflow-hidden bg-primary px-16 py-8 transition-all duration-300 hover:scale-[1.02]"
          type="submit"
        >
          <div className="relative z-10 flex items-center gap-6 text-black">
            <span className="text-sm font-black uppercase tracking-[0.4em]">
              Initialize Transmission
            </span>
            <span className="material-symbols-outlined font-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </div>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </form>
  );
};

export default FormSec;
