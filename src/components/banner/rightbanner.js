import React from 'react'
import {bannerImg} from '../../assets/index'
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const RightBanner = () => {
    return (
        <div className="w-full h-[550px] lgl:w-1/2 flex justify-center items-center relative">
            {/* Floating Technology Icons */}
            <div className="absolute top-10 right-10 animate-bounce">
                <FaReact className="text-4xl text-designColor" />
            </div>
            <div className="absolute top-20 left-10 animate-pulse">
                <SiNextdotjs className="text-3xl text-designColor" />
            </div>
            <div className="absolute bottom-20 right-20 animate-bounce" style={{animationDelay: '1s'}}>
                <SiTailwindcss className="text-3xl text-designColor" />
            </div>
            <div className="absolute bottom-10 left-20 animate-pulse" style={{animationDelay: '2s'}}>
                <FaJs className="text-3xl text-designColor" />
            </div>
            <div className="absolute top-1/2 left-5 animate-bounce" style={{animationDelay: '0.5s'}}>
                <FaHtml5 className="text-2xl text-designColor" />
            </div>
            <div className="absolute top-1/3 right-5 animate-pulse" style={{animationDelay: '1.5s'}}>
                <FaCss3Alt className="text-2xl text-designColor" />
            </div>
                
            <div className="absolute bottom-0 w-[350px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">
               <img 
                className="w-[300px] h-[400px] lgl:w-[400px] lgl:h-[480px] z-10" 
                src={bannerImg}
                alt="bannerImg"
                />
               </div>
        </div> 
    )
}

export default RightBanner;