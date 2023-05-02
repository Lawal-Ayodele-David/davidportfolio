import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/index";

const Footer = () => {
    return (
        <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid-cols-4 gap-8 flex">
            <div className="w-full h-full">
                <img className="w-20 pb-10 px-2" src={logo} alt="logo" />
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
            <div className="w-full h-full">
                <h3 className="text-x1 uppercase text-designColor tracking-wider">
                Quick Link
                </h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                <a href="#" target="_blank">
                <li>
                    <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">About<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span>
                </li>
                </a>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Portfolio<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Services<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Blog<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Contact<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
            </ul>
            </div>
            <div className="w-full h-full">
            <h3 className="text-x1 uppercase text-designColor tracking-wider">
                Resources
                </h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                <li>
                    <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Authentication<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span>
                </li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">System Status<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Terms of Service<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Pricing<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Over Right<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
            </ul>
            </div>
            <div className="w-full h-full">
            <h3 className="text-x1 uppercase text-designColor tracking-wider">
                Developers
                </h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                <li>
                    <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Documentation<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span>
                </li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Authentication<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">API Reference<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Support<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Open Source<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
            </ul>
            </div>
        </div>
    );
}

export default Footer;