import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import BehindScenes from "./components/BehindScenes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import LoadingScreen from "./components/LoadingScreen";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  
  return (
    <div className="app">
      <LoadingScreen />



      <Navbar />
      <Hero />
      <Works />
      <Services />
      <Process />
      <Testimonials />
      <BehindScenes />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;