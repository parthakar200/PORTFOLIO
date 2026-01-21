
export function BackImage(){

    return (
       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6tKPd95Wr6UsuqYByYYRoGbEK68RPW0zfZGAiFyiG2XaBhSBCp4DSrih8jAPgyjoPLW1cRVI8ML1c4ATP2Fdd4ff2-17yBz7paFnJ3oYN3pJB1oX4HX5cNvL5_Mg18ovSMy2lh7FBH0Z4y9JcpZjHiv_UkUFnHIFG1AOxYruoxMw9gnlE5k5zPlrXP3UwWeHjk_9FuXGN-M8yUUVI1u7OpGBMonueKNruHdCn9jL1ocgCErJbk_6aKgO0HNGElj_TJpVRhVSFFvFW")`}}>
        </div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full fluid-blur"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full fluid-blur"></div>
       <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#121212] rounded-full fluid-blur">
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark"></div>
    </div> 
    )
}