import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Engineer.", "React Specialist.", "Creative Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:gap-20 px-4 sm:px-6">
      {/* ===== Header Section ===== */}
      <div className="flex flex-col gap-5 text-center lg:text-left">
        <h4 className="text-sm sm:text-base font-normal text-gray-300 tracking-wide uppercase">
          Welcome to my portfolio
        </h4>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">David Lawal</span>
        </h1>

        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 gap-2 mt-4 text-sm sm:text-base">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-designColor font-semibold">3+ years</span>
            <span className="text-gray-400">
              building responsive web applications
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-designColor font-semibold">10+ projects</span>
            <span className="text-gray-400">delivered successfully</span>
          </div>
        </div>

        <p className="text-sm sm:text-base font-bodyFont leading-6 tracking-wide text-gray-300 mt-4">
          I studied Computer Engineering Technology and specialize in Software
          Engineering, with a strong focus on frontend development. I’m
          passionate about using modern tools and clean code to create
          beautiful, responsive web experiences. I aim to contribute meaningfully
          to forward-thinking organizations while continuously growing as a
          frontend engineer.
        </p>
      </div>

      {/* ===== Footer Section ===== */}
      <div className="flex flex-col sm:flex-row justify-center lg:justify-between gap-8 lg:gap-0 mt-6 sm:mt-10 text-center lg:text-left">
        {/* Social Links */}
        <div>
          <h2 className="text-sm uppercase font-titleFont mb-3 text-gray-400 tracking-wide">
            Find me on
          </h2>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-sm uppercase font-titleFont mb-3 text-gray-400 tracking-wide">
            Proficient with
          </h2>
          <div className="flex justify-center lg:justify-start gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
