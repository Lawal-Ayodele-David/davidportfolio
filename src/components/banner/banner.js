import React from 'react'   
import LeftBanner from './leftbanner';
import RightBanner from './rightbanner';

const Banner = () => {

    return (
        <section id='home' className="w-full pt-10 pb-20 item-center flex border-b-[1px] font-titleFont border-b-black">
            <LeftBanner />
            <RightBanner />
           
            </section>
    )
}

export default Banner;