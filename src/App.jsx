import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });
  return (
    <div className="container mx-auto px-12 h-screen flex flex-col">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
