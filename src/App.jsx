import Router from "./components/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Router />
      </main>
        <Footer />
    </>
  );
}

export default App;
