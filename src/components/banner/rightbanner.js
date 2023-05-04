import React from 'react'
import {bannerImg} from '../../assets/index'

const RightBanner = () => {
    return (
        <div className="{w-full h-[550px] lgl:w-1/2 flex justify-center items-center relative">
                
                <div className="absolute bottom-0 w-[350px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">
               <img 
                className="w-[300px] h-[400px] lgl:w-[300px] lgl:h-[480px] z-10" 
                src={bannerImg}
                alt="bannerImg"
                />
               </div>
    </div> 
    )
}

export default RightBanner;