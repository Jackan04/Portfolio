import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Projects from "./pages/Projects"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Home></Home>
      </main>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </>
  )
}

export default App
