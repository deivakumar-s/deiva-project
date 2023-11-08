import { useEffect} from "react";
import Aos from'aos';
import "./App.css";
import Header from "./components/Header/Header.js";
import Hero from "./components/UI/Hero.js";
import Exercises from "./components/UI/Exercises.js";
import Start from "./components/UI/Start.js";
import Pricing from "./components/UI/Pricing.js";
import Testimonials  from "./components/UI/Testimonials.js";
import Footer from "./components/UI/Footer.js";

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return <>
  <Header/>
  <Hero/>
  <Exercises/>
  <Start/>
  <Pricing/>
  <Testimonials/>
  <Footer/>
  </>
}

export default App;
