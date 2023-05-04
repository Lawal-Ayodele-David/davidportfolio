import React from 'react'
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/title';
import Card from './card';

const Features = () => {
    return (
        <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
            <Title title="features" des="What I do"/>
           <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
            <Card 
            title='Business Strategy'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
            icon={<FaBars />}
            />
            <Card title='App Development'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
            icon={<AiFillAppstore />} />
            <Card title='SEO Optimization'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
            icon={<SiProgress />} />
            <Card title='Mobile Development'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
            icon={<FaMobile />} />
            <Card title='UX design'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
            icon={<SiAntdesign />} />
            <Card title='Hosting Websites'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
            icon={<FaGlobe />} />
           </div>
            </section>
    )
};

export default Features;