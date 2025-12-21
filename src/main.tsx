import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './componens/sections/Hero/index.tsx'
import About from './componens/sections/About/index.tsx'
import "./styles/global.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero/>
    <About/>
  </StrictMode>,
)
