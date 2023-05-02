import React from "react";
import Banner from "./components/banner/banner";
import Contact from './components/contact/contact';
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Testimonial from "./components/testimonial/testimonial";
import FooterBottom from "./components/footer/footerBottom";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
       <Navbar />
      <div className="max-w-screen-2x1 mx-auto px-16">
      <Banner />
      <Features />
      <Projects />
      <Resume />
      <Testimonial />
      <Contact />
      <Footer />
      <FooterBottom />
      </div>
    </div>
  );
}

export default App;
