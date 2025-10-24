import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, technologies = []}) => {
    return (
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
            <div className='w-full h-[80%] overflow-hidden rounded-lg'>
                <img className="w-full h-60 object-cover:scale-110" src={src} alt="src" />
            </div>
            <div>
            <div className="w-full mt-5 flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
                <div className="flex gap-2">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray hover:text-designColor duration-cursor-pointer">
                    <a
              href="https://github.com/Lawal-Ayodele-David"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <BsGithub />
            </a>
                    </span>
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray hover:text-designColor duration-300 cursor-pointer">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                        >
                          <FaGlobe />
                        </a>
                    </span>
                </div>
            </div>
                <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                {des}
                </p>
                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-2 py-1 text-xs bg-designColor bg-opacity-20 text-designColor rounded-md border border-designColor"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}

export default ProjectsCard;