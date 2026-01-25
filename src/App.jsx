import { useRef, useState } from 'react'

import './App.css'
import { NavBar } from './components/nav/Nav'
import { Hero } from './components/hero/HeroSection'
import { ImpactSec } from './components/main/impact/Impact'
import { Stack } from './components/main/techStack/Stack'
import { SocialMedia } from './components/socialMedia/Social'
import { Footer } from './components/footer/Footer'
import { OffCanvas } from './components/offCanvas/OffCanvas'
import ProjectSection from './components/project/projectSec/ProjectSection'
import Contact from './components/contact/Contact'

function App() {

  const homeRef = useRef(null);
  const stackRef = useRef(null);
  const projectRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='relative z-10 flex flex-col min-h-screen'>
        <NavBar homeRef={homeRef}
                stackRef={stackRef}
                projectRef={projectRef}
                resumeRef={resumeRef}
                contactRef={contactRef}
        />
          <Hero stackRef={stackRef} projectRef={projectRef} homeRef={homeRef}/>
          <ImpactSec/>
          <Stack stackRef={stackRef}/>
          <ProjectSection projectRef={projectRef}/>
          <SocialMedia/>
          <Contact contactRef={contactRef}/>
          <Footer/>
      </div>
  )
}

export default App
