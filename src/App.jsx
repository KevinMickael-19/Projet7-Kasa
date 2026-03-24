import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import NotFound from  './pages/NotFound'
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element = { <Home /> }/>
        <Route path="/about" element = { <About /> }/>
        <Route path="/logement/:id" element = { <Logement /> }/>
        <Route path="*" element = { <NotFound /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App