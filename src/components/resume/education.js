import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './resumeCard';

const Education = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex flex-col lgl:flex-row gap-10 gap-20' >
            {/* part one */}
            <div>
            <div className="py-6 lgl:py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
                <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
            </div>
            <div className='mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard 
                title="HND - Computer Engineering Technology"
                subTitle="Rufus Giwa Polytechnic (April 2019 - April 2020)"
                result="3.20/4"
                des="Achieved Upper Credit honors in Computer Engineering Technology, showcasing academic excellence.
                "
            />
            <ResumeCard 
                title="ND - Computer Engineering Technology"
                subTitle="Rufus Giwa Polytechnic, Owo, Ondo State. (2019 - 2020)"
                /*result="" */
                des="Acquired foundational knowledge in computer Engineering Technology establishing a strong technical background.
                "
            />
            </div>
            </div>
            {/* part Two */}
            <div>
            <div className="py-6 lgl:py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
                <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
            </div>
            <div className='mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard 
                title="Secondary School Education"
                subTitle="Saint Patrick's Secondary School, Iwaro-Oka Akoko, Ondo State. (2008 - 2017)"
                result="(SSCE)"
                des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                />
                <ResumeCard
                title="Primary School Education"
                subTitle="Saint Micheal's Primary School, Iwaro-Oka Akoko, Ondo State. (2001 - 2007)"
                result="(FSLC)"
                des="Primary education or covers two phases on the International Standard Classification of Education scale."
                />
            
           { /*
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
                /> */}
            </div>
            </div>
            </motion.div>
    )
}

export default Education;