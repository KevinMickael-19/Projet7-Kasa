import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Logement from "../pages/Logement/Logement";
import NotFound from "../pages/NotFound/NotFound";
import Header from "./Header/Header";
import Footer from "./Footer/Footer"

function Router() {
  return (
    <BrowserRouter>
      <main className="main">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default Router