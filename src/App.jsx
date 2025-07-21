import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/fEATURED.JSX'
import Cards from './Components/Card'

function App() {
  return (
    <div className="w-full min-h-screen    bg-zinc-900 text-white">
      
      <Navbar />
      <LandingPage />
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
    </div>
  )
}

export default App
