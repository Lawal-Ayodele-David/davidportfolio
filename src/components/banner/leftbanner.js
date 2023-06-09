import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";


const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Front End web-Developer.", "UI Designer.", "Mouth Trumpeter.", "Music Minister."],
        Loop: true,
        typeSpeed: 20, 
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
            <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
            <h1 className="text-6xl font-bold text-white">
                Hi, I'm {" "}
                <span className="text-designColor capitalize">David Lawal</span>
            </h1>
            <h2 className="text-4xl font-bold text-white">a <span>{text}</span>
            <Cursor 
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f" />
            </h2>
            <p className="text-base font-bodyFont xl:flex-row leading-6 gap-6 xl:gap-0 tracking-wide">
                I studied Computer Engineering Technology, and specify on the Software Engineering field. I aim to contribute positively to the attainment of the best result in an organization that is innovative and responsible to the dynamic world of Information, Engineering and Technology, thereby adding value to my employer and deriving job satisfaction.
            </p>
        </div>
        <div className='flex flex-col lgl:flex-row justify-between'>
        <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
            </h2>
            <div className="flex gap-4">
                <span className="bannerIcon">
                    <FaFacebookF />
                </span>
                <span className="bannerIcon">
                    <FaTwitter />
                </span>
                <span className="bannerIcon">
                    <FaLinkedinIn />
                </span>
            </div>
        </div>
        <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
            Basic Skills On
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
                <span className="bannerIcon">
                    <SiFigma />
                </span>
            </div>
        </div>
        </div>
    </div>
    )
}

export default LeftBanner;