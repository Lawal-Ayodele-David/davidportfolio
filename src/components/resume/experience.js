import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './resumeCard';

const Experience = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex flex-col lgl:flex-row gap-10 gap-20' >
            {/* part one */}
            <div>
            <div className="py-6 lgl:py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2017 - 2019</p>
                <h2 className="text-3xl md:text-4xl font-bold">Job Experiece</h2>
            </div>
            <div className='mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard 
                title="Human Resource Assisting Personnel (Industrial Training)"
                subTitle="First Pension Custodian Nigeria, Ikoyi, Lagos. (2018 -2019)"
                result="(IT)"
                des="I worked with the company's Human Resource Manager(HRM) as an assisting personel."
                />
                <ResumeCard
                title="System Engineering(SIWES)"
                subTitle="Emzor Pharmaceutical Industries, Oshodi, Lagos (2017)"
                result="(SIWES)"
                des="It was a 4 months Student Industrial Work Experience Scheme, which i passed through."
                />
            </div>
            </div>
            {/* part Two */}
            <div>
            <div className="py-6 lgl:py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
                <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
            </div>
            <div className='mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard 
                title="ICT Teacher(NYSC)"
                subTitle="Ika Commercial Secondary School, Akwa Ibom (2022 - April 2023)"
                result="(NYSC)"
                des="I taught the pupils the basics of Information Technology and more advanced concept to the senior class. I also taught them how to solve real-life problems with technology."
            />
            <ResumeCard 
                title="Front End Web Developer"
                subTitle="Homefort Energy, Yaba, Lagos State. (2021)"
                result="(ReactJs)"
                des="I created React web app, and also made the existing website responsive."
            />
            </div>
            </div>
            </motion.div>
    )
    
}

export default Experience;