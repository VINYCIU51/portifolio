import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.css"
import Hero from './pages/sections/Hero'
import About from './pages/sections/About'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero/>
    <About/>
  </StrictMode>,
)
