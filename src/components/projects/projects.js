import React from 'react'
import Title from '../layouts/title'
import {projectOne, projectTwo, projectThree } from "../../assets/index"
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                title="HONEYWELL CLONE"
                des="A fully responsive clone of the Honeywell website featuring modern design, smooth animations, and mobile-first approach. Built with React.js and Tailwind CSS."
                src={projectThree}
                technologies={["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"]}
                />
                <ProjectsCard 
                title="E-commerce Website"
                des="Complete e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Features include product filtering, search functionality, and admin dashboard."
                src={projectOne}
                technologies={["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"]}
                />
                <ProjectsCard 
                title="Portfolio Website"
                des="Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, contact form integration, and mobile-first design approach."
                src={projectTwo}
                technologies={["React.js", "Tailwind CSS", "JavaScript", "Formspree", "Responsive Design"]}
                />
            </div>
        </section>
    )
}

export default Projects;