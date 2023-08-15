import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";


const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Mouth Trumpeter.", "Music Minister.", "Frontend Engineer"],
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
                <span className="text-designColor capitalize">Ayodele Lawal</span>
            </h1>
            <h2 className="text-4xl font-bold text-white">a <span>{text}</span>
            <Cursor 
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f" />
            </h2>
            <p className="text-base font-bodyFont xl:flex-row leading-6 gap-6 xl:gap-0 tracking-wide">
                I studied Computer Engineering Technology, and specify on the Software Engineering field. To contribute positively to the attainment of the best results in an innovative and technology-driven organization, while adding value to my employer and continuously developing my skills in frontend engineering. 
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
            </div>
        </div>
        </div>
    </div>
    )
}

export default LeftBanner;