import React from 'react';
import {bannerImg} from './../../assets/index';
import {thegrid} from './../../assets/index';
import {davidlawal} from './../../assets/index';
import {FaPlay} from './'
import { contleft } from './../../assets/index';

const LandingPage = () => {

    return (
        <div>
        <div className="w-full h-auto bg-indigo-800 text-lightText px-4">
            <div id="nav" className="container font-bold flex py-2 px-20">
                <div className="flex justify-between px-300 w-1/2">
                <div classname='px-2'>LOGO</div>
                <div>
                <ul className="flex space-x-3">
                    <li>ABOUT</li>
                    <li>PLATFORM</li>
                    <li>CONTACT</li>
                </ul>
                </div>
                </div>
                <div div className="flex justify-end w-1/2">
                    <a href="#">icon1</a>
                    <a href="#">icon2</a>
                </div>
            </div>
            <hr className='text-white' />
            {/* the banner session */}
            <div id="banner" className="w-full py-20 pb-30 flex">
                <div className="w-1/2 px-20">
                    <h1 className="text-5xl">Can <span className="text-yellow-500">climate change</span> effect be stopped?</h1>
                    <p className='py-10'>All our methodology opens up a cleaner part forward for every everyday customuers</p>
                    <div className="flex">
                        <button  className="bg-white hover:bg-blue-400 text-blue-800 font-bold py-2 px-4 rounded-full">Get Started</button>
                        <div className='flex px-4 py-2'>
                        <div className='px-4 flex'><FaPlay /></div> 
                        <p>Lets see how you did it</p>
                        </div>
                    </div>
                </div>
                {/* === banner 2 === */}
                <div className='w-1/2 px-20'>
                    <div className='grid grid-cols-2'>
                        <div className="grid grid-row-3 space-y-20">
                            <div className="pl-20 pt-10">
                            <img className='w-40 h-30 absolute z-0 ' src={thegrid} />
                            <div className='absolute z-10 pl-8 text-center font-bold text-indigo-950'>
                                <h1 className='text-3xl'>20%</h1>
                                <p className='text-sm'>INCREASE<br/> CLEAN ENERGY</p>
                            </div>
                            </div>
                            <div className='h-30'>
                            <button className="absolute bg-yellow-500 hover:bg-blue-400 text-blue-950 font-bold py-2 px-4 rounded-full">40% less energy</button>
                            </div>
                            <div>
                            <div className=' top-20 h-[200%] bg-white text-indigo-950 p-10 font-bold'>
                                <h1></h1>New Energy with proven zero solution</div>
                        </div>
                        </div>
                        <div className='relative'>
                        <img className='absolute z-10 w-[450px] h-[380px] right-5' src={davidlawal} />
                            <div className='absolute z-0 bg-indigo-950 w-[200px] h-[300px] top-20'></div>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                    {/* the contact session */}
                    <div id="contact" className='flex h-60'>
                <div className='w-1/2 bg-indigo-950'>
                <div className=' flex pl-20 justify-between' >
                    <div className='relative p-10'>
                <span><img className='left-0 absolute border rounded-full h-10 '  src={bannerImg} /></span>
                <span><img className='left-6 absolute border rounded-full h-10'  src={bannerImg} /></span>
                <span><img className='left-11 absolute border rounded-full h-10 '  src={bannerImg} /></span>
                <span className='left-16 absolute border rounded-full h-10 bg-white text-indigo-950 text-center py-2'>100+</span> 
                    </div>
                    <div className='p-10 font-bold'>Contact our Experts</div>
                </div>
                <div className='grid grid-flow-col grid-col-3 space-x-4 px-10 text-center font-bold -pt-5'>         
        <div>
                    <h1 className="text-3xl">20%</h1>
                    <p>Increase clean energy in total</p>
                    </div>
                <div>
                    <h1 className="text-3xl">40%</h1>
                    <p>Less energy usage annualy</p></div>
                <div>
                    <h1 className="text-3xl">il<sup>:</sup></h1>
                    <p>Top international Innovation awards</p>
                </div>
                </div>
                </div>
                {/*other contact side */}
                <div className='w-1/2'>
                <img className='w-full h-60' src={contleft} />
                </div>
            </div>
        </div>  
    );
};

export default LandingPage;