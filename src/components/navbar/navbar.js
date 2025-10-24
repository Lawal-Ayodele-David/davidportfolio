import React, { useState } from 'react'
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {Dlogo} from "../../assets/index";
import { navLinksdata } from '../../constants';

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu);
    }
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="w-full md:h-full h-24 sticky top-0 z-50 bg-bodyColor border-b-[1px] border-b-gray-600">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center font-titleFont h-full">
            <div>
                <img src={Dlogo} alt="logo" className="object-contain h-10 w-40 ..."/>
            </div>
            <div>
                <ul className="hidden mdl:inline-flex items-center gap:6 lg:gap-10">
                    {navLinksdata.map(({_id, title, link}) =>(
                            <li 
                            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                            key={_id}
                            >
                                {isHome ? (
                                  <ScrollLink
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                  >{title}</ScrollLink>
                                ) : (
                                  <RouterLink to={`/#${link}`}>{title}</RouterLink>
                                )}
                            </li>
                        ))
                    }
                    <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                        <RouterLink to="/blog">Blog</RouterLink>
                    </li>
                </ul>
                {/*}
                <div className="flex flex-col gap-4">
            <h2 className='text-base uppercase font-titlefont mb-4'>
            Find me in
            </h2>
            <div className='flex gap-4'>
            <span className='bannerIcon'><FaFacebookF /></span>
            <span className='bannerIcon'><FaTwitter /></span>
            <span className='bannerIcon'><FaLinkedinIn /></span>
            </div>    
                </div> */}
                <span onClick={() => setShowMenu(!showMenu)} className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'>
                    <FiMenu />
                </span>
                <div className='menu-icon' onClick={handleClick}>

                </div>
                {showMenu && (
                    <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
                       <div className='flex flex-col gap-8 py-2 relative'>
                        <div>
                        <img src={Dlogo} alt="logo" className="object-contain h-10 w-40 ..."/>
                            <p className='text-sm text-gray-400 mt-2'>
                            my aim is to contribute positively to the attainment of the best results in an innovative and technology-driven organization
                            </p>
                        </div>
                        <ul className='flex flex-col gap-4'>
                            {
                                navLinksdata.map((item)=>(
                                    <li key={item._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                                    {isHome ? (
                                      <ScrollLink 
                                        onClick={()=>setShowMenu(false)}
                                        activeClass="active"
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                      >{item.title}</ScrollLink>
                                    ) : (
                                      <RouterLink to={`/#${item.link}`} onClick={()=>setShowMenu(false)}>{item.title}</RouterLink>
                                    )}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col gap-4">
            <h2 className='text-base uppercase font-titlefont mb-4'>
            Find me in
            </h2>
            <div className='flex gap-4'>
            <span className='bannerIcon'><FaFacebookF /></span>
            <span className='bannerIcon'><FaTwitter /></span>
            <span className='bannerIcon'><FaLinkedinIn />
            </span>
            </div>    
            </div>
                <span onClick={()=>setShowMenu(false)} className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'>
                    <MdClose />
                    </span>
                    </div>
              </div>
        )} 
            </div>
          </div>
        </div>
    );
}

export default Navbar;