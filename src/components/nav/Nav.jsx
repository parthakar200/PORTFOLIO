export function NavBar() {
  return (

    <header class="flex items-center justify-between px-6 md:px-12 py-10 fixed w-full z-50 mix-blend-difference">
            <div class="flex items-center gap-3">
                <div class="w-10 h-[1px] bg-primary"></div>
                <h2 class="font-display text-sm font-bold tracking-[0.4em] uppercase">PORTFOLIO</h2>
            </div>
            <button class="group flex flex-col gap-1.5 items-end">
                <div class="w-8 h-[2px] bg-white group-hover:w-12 transition-all duration-500"></div>
                <div class="w-12 h-[2px] bg-primary"></div>
                <div class="w-6 h-[2px] bg-white group-hover:w-12 transition-all duration-500"></div>
            </button>
        </header>
   
  );
}
