import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft} from "react-icons/hi";
import Title from '../layouts/title';
import { ope, milton, quote} from '../../assets';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-40 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}> <HiArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
        className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-40 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10'
        onClick={onClick}
        ><HiArrowLeft /></div>
    );
}

const Testimonial = () => {
    const [dotActive, setDocActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow />,
        prevArrow:<SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setDocActive(next);
        },
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ 
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                marginTop: "20px"
                 }}> {" "} {dots} {" "} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
          i === dotActive?{
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer"
          }:{
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer"
          }
              }
            >
            </div>
          )
    
    }
    return (
        <section  id='testimonial' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
            <Title 
                title="WHAT CLIENTS SAY"
                des="Testimonial"
            />
            </div>
            <div className="max-w-6xl mx-auto">
               <Slider {...settings}>
                {/* ================ Slider One =============== */}
                <div className='w-full'>
                    <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                        <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                            <img className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover' src={ope} alt="testimonialOne" />
                            <div className='w-full flex flex-col justify-end'>
                                <p className='text-xs uppercase text-designColor tracking-wide mb-2'>
                                HOMEFORT ENERGY
                                </p>
                                <h3 className='text-2xl font-bold'>Opeyemi Owosho</h3>
                                <p className='text-base tracking-wide text-gray-500'>
                                CEO/Cofounder
                                </p>
                            </div>
                        </div>
                        <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
                            <img className='w-20 lgl:w-32' src={quote} alt="quote" />
                            <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8'>
                            <div className='flex flex-col lgl:justify-between lgl:items-center py-6 border-b-2 border-b-gray-900'>
                                <div>
                                    <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                                        Web App Design.
                                    </h3>
                                    <p className='text-base text-gray-400 mt-3'>
                                         sep., - dec., 2021 
                                    </p>
                                </div>
                                <div className='text-yellow-500 flex gap-1'>
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                </div>
                            </div>
                            <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                            Working with Ayodele was a delight. His exceptional communication skills and ability to collaborate seamlessly with our design resulted in smooth development cycles and outstanding outcomes.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ================ Slide Two ================ */}
                <div className='w-full'>
                    <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                        <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                            <img className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover' src={milton} alt="testimonialTwo" />
                            <div className='w-full flex flex-col justify-end'>
                                <p className='text-xs uppercase text-designColor tracking-wide mb-2'>
                                    HOMEFORT ENERGY
                                </p>
                                <h3 className='text-2xl font-bold'>Milton Jesumbo</h3>
                                <p className='text-base tracking-wide text-gray-500'>
                                    Mobile Lead/Software engineer
                                </p>
                            </div>
                        </div>
                        <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
                            <img className='w-20 lgl:w-32' src={quote} alt="quote" />
                            <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8'>
                            <div className='flex flex-col lgl:justify-between lgl:items-center py-6 border-b-2 border-b-gray-900'>
                                <div>
                                    <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                                        Web App Design.
                                    </h3>
                                    <p className='text-base text-gray-400 mt-3'>
                                         mar - Aug 2023
                                    </p>
                                </div>
                                <div className='text-yellow-500 flex gap-1'>
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                </div>
                            </div>
                            <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                            Ayodele's ability to quickly grasp new technologies and industry trends has been a tremendous asset to our projects. His willingness to embrace new challenges and learn on the fly has consistently led to impressive outcomes.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =============== Slide Three =============== */}
                {/* <div className='w-full'>
                    <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                        <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                            <img className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover' src={testimonialTwo} alt="testimonialTwo" />
                            <div className='w-full flex flex-col justify-end'>
                                <p className='text-xs uppercase text-designColor tracking-wide mb-2'>
                                    Mayokun
                                </p>
                                <h3 className='text-2xl font-bold'>Milton Jesunbo</h3>
                                <p className='text-base tracking-wide text-gray-500'>
                                    Senior Software Engineer
                                </p>
                            </div>
                        </div>
                        <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
                            <img className='w-20 lgl:w-32' src={quote} alt="quote" />
                            <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8'>
                            <div className='flex flex-col lgl:justify-between lgl:items-center py-6 border-b-2 border-b-gray-900'>
                                <div>
                                    <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                                        Travel Mobile App Design.
                                    </h3>
                                    <p className='text-base text-gray-400 mt-3'>
                                        via Upwork - mar 4, 2015 - Aug 30, 2021 test
                                    </p>
                                </div>
                                <div className='text-yellow-500 flex gap-1'>
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                    <RiStarFill />
                                </div>
                            </div>
                            <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum, eos natus ipsum numquam veniam officia necessitatibus ratione quos debitis.
                            </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                </Slider>    
        </div>
         </section>   
    )
}

export default Testimonial;