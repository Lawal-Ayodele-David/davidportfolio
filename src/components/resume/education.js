import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './resumeCard';

const Education = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex flex-col lgl:flex-row gap-10 gap-20' >
            {/* part one */}
            <div>
            <div className="py-6 lgl:py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2019 - 2020</p>
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
                <p className="text-sm text-designColor tracking-[4px]">2001 - 2017</p>
                <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
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
            </div>
            </div>
            </motion.div>
    )
}

export default Education;