import { useRef, useState } from 'react'

import './App.css'
import { NavBar } from './components/nav/Nav'
import { Hero } from './components/hero/HeroSection'
import { ImpactSec } from './components/main/impact/Impact'
import { Stack } from './components/main/techStack/Stack'
import { SocialMedia } from './components/socialMedia/Social'
import { Footer } from './components/footer/Footer'
import { OffCanvas } from './components/offCanvas/OffCanvas'

function App() {

  const stackRef = useRef(null);

  return (
    <div className='relative z-10 flex flex-col min-h-screen'>
        <NavBar/>
        <OffCanvas/>
          <Hero stackRef={stackRef}/>
          <ImpactSec/>
          <Stack stackRef={stackRef}/>
          <SocialMedia/>
          <Footer/>
      </div>
  )
}

export default App
