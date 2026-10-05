import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProjectContext } from "./contexts/ProjectContext"
import AppLayout from "./components/AppLayout"
import { Navigate } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Skills from "./pages/Skills"


function App() {

  return (
    <BrowserRouter>
      <ProjectContext>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route element={<Home />} path="/home" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Projects />} path="/projects" />
            <Route element={<Resume />} path="/resume" />
            <Route element={<Skills />} path="/skills" />
          </Route>
        </Routes>
      </ProjectContext>
    </BrowserRouter>
  )
}

export default App
