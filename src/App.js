import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio Section/Portfolio";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackToTopBtn";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      {/* <Contact /> */}
      <Footer />
      <BackTopBtn />
    </>
  );
}

export default App;
