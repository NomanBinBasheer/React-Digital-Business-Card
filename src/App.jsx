import React from 'react'
import { useState } from 'react'
import Info from './components/Info.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'

import './App.css'

export default function App() {
  return(
  <section className='container'>
     <Info />
     <About />
     <Interests />
  </section>
  )
}

