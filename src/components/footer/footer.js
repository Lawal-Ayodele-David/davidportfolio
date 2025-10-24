import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {Dlogo} from "../../assets/index";

const Footer = () => {
    return (
        <div className="w-full py-20 h-auto border-b-[1px] border-b-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
            <div className="w-full h-full flex flex-col gap-4">
                <img className="w-20 pb-4 px-2" src={Dlogo} alt="logo" />
                <p className="text-gray-400 text-sm">Frontend Engineer passionate about building modern, responsive web applications. Let's connect and create something amazing!</p>
                <div className="flex gap-4 mt-2">
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
                Quick Links
                </h3>
            <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                <li>
                    <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">About<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span>
                </li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Portfolio<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Contact<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></span></li>
                <li><a href="/blog" className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Blog<span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-0 -translate-x-[100%] left-0 group-hover:translate-x-0 transition-transform duration-300"></span></a></li>
            </ul>
            </div>
            <div className="w-full h-full">
                <h3 className="text-x1 uppercase text-designColor tracking-wider">
                Contact
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                  <li>
                    <span className="w-full text-lg text-gray-400">Email: <a href="mailto:lawalayodeledavid@gmail.com" className="hover:text-designColor duration-300">lawalayodeledavid@gmail.com</a></span>
                  </li>
                </ul>
            </div>
          </div>
          <div className="w-full text-center mt-10 border-t border-t-gray-800 pt-6">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ayodele Lawal. All rights reserved.</p>
          </div>
        </div>
    );
}

export default Footer;