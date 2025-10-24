import React from 'react'
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
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className="text-lg font-normal text-gray-300">WELCOME TO MY PORTFOLIO</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm{" "}
                    <span className="text-designColor capitalize">David Lawal</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor 
                        cursorBlinking={false}
                        cursorStyle="|"
                        cursorColor="#ff014f" 
                    />
                </h2>
                <div className="flex items-center gap-4 mt-4">
                    <span className="text-designColor font-semibold">3+ years</span>
                    <span className="text-gray-400">building responsive web applications</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-designColor font-semibold">10+ projects</span>
                    <span className="text-gray-400">delivered successfully</span>
                </div>
                <p className="text-base font-bodyFont leading-6 tracking-wide text-gray-300">
                    I studied Computer Engineering Technology and specialize in Software Engineering,
                    with a strong focus on frontend development. I’m passionate about using modern tools
                    and clean code to create beautiful, responsive web experiences. I aim to contribute 
                    meaningfully to forward-thinking organizations while continuously growing as a frontend engineer.
                </p>
            </div>

            <div className='flex flex-col lgl:flex-row justify-between gap-6 lgl:gap-0'>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4 text-gray-400">
                        Find me on
                    </h2>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4 text-gray-400">
                        Proficient with
                    </h2>
                    <div className="flex gap-4">
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
