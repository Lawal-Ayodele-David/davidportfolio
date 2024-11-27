import React from 'react'
import Title from '../layouts/title'
import {projectOne, projectThree } from "../../assets/index"
import ProjectsCard from './projectsCard';


const Projects = () => {
    return (
        <section id='projects' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
            <Title 
                title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
                des="My Projects"
            />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap:6 xl:gap-14"> {/*md:grid-cols-3 xl:grid-cols-3 */}
                <ProjectsCard
                title="HONEYWELL CLONE"
                des="It's a Honey-well website clone. You can check it out on my github page by clicking the github icon"
                src={projectThree}
                />
                <ProjectsCard 
                title="E-commerce Website"
                des="Built an E-commerce website which you can find on my github page by clicking the github icon"
                src={projectOne}/>
                {/* <ProjectsCard 
                title="Chatting App"
                des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatcus harum quidem!"
                src={projectTwo}
                />
                <ProjectsCard 
                title="SOCIAL MEDIA CLONE"
                des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatcus harum quidem!"
                src={projectThree}
                />
                <ProjectsCard 
                title="SOCIAL MEDIA CLONE"
                des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatcus harum quidem!"
                src={projectOne}
                />
                <ProjectsCard 
                title="SOCIAL MEDIA CLONE"
                des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatcus harum quidem!"
                src={projectTwo}
                /> */}
            </div>
        </section>
    )
}

export default Projects;