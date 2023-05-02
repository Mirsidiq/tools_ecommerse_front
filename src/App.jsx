import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Contact from "./pages/contacts/contact"
import Hero from "./pages/hero/hero"
import { Route,Router,Routes } from "react-router-dom"
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route element={<Hero/>} path="/"/>
      <Route element={<Contact/>} path="/contact"/>
    </Routes>
    <Footer/>
    {/* <Contact/> */}
    </>
  )
}

export default App
