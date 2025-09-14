import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import ProjectCard from './components/ProjectCard/ProjectCard'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        
      </main>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </>
  )
}

export default App
