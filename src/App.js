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
//import LandingPage from "./components/landingpage/landpage";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
       <Navbar />
      <div className="max-w-screen-x1 mx-auto">
      <Banner />
      <Features />
      <Projects />
      <Resume />
      <Testimonial />
      <Contact />
      <Footer />
      <FooterBottom />
      <div className="w-full h-auto bg-white px-4">
     {/* <LandingPage /> */}
      </div>
      </div>
    </div>
  );
}

export default App;
