import NavBar from "./components/NavBar"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <NavBar />
      <div id="page-1"><Home /></div>
      <div id="page-2"><AboutMe /></div>
      <div id="page-3"><Projects /></div>
      <div id="page-4"><Contact /></div>
    </>

  )
}

export default App
