import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
