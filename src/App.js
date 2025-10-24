import React from "react";
import Banner from "./components/banner/banner";
import Contact from './components/contact/contact';
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Testimonial from "./components/testimonial/testimonial";
import FAQ from "./components/faq/faq";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogHome from './components/blog/BlogHome';
import BlogPost from './components/blog/BlogPost';
//import LandingPage from "./components/landingpage/landpage";

function App() {
  return (
    <Router>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4 md:px-8 lg:px-12">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <Features />
                <Projects />
                <Resume />
                <Testimonial />
                <FAQ />
                <Contact />
              </>
            } />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
