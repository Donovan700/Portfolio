// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import ScrollToTopButton from './Components/ScrollToTopButton'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
      <Skills/>
      <Contact/>
      <ScrollToTopButton/>
    </>
  )
}

export default App
