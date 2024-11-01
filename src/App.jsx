import { Route, Routes } from "react-router-dom";
import Header from './components/Core/Header'
import Footer from './components/Core/Footer'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import SingleProject from "./components/SingleProject/SingleProject";

function App() {


  return (
    <>
<Header/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/education" element={<Education />} />
<Route path="/skills" element={<Skills />} />
<Route path="/profiles" element={<Profile />} />
<Route path="/projects" element={<Projects />} />
<Route path="/projects/:name" element={<SingleProject />} />
<Route path="/contact" element={<Contact />} />
</Routes>
<Footer/>
    </>
  )
}

export default App
