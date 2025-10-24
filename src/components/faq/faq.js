import React, { useState } from 'react';
import Title from '../layouts/title';
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "What technologies do you specialize in?",
            answer: "I specialize in modern frontend technologies including React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, and responsive web design. I also have experience with Node.js, MongoDB, and various APIs for full-stack development."
        },
        {
            question: "How long does it typically take to complete a project?",
            answer: "Project timelines vary depending on complexity. A simple landing page might take 1-2 weeks, while a full e-commerce platform could take 4-8 weeks. I always provide detailed timelines during the initial consultation and keep clients updated throughout the process."
        },
        {
            question: "Do you provide ongoing maintenance and support?",
            answer: "Yes, I offer ongoing maintenance packages that include regular updates, bug fixes, security patches, and performance optimizations. I believe in building long-term relationships with clients and ensuring their websites remain current and functional."
        },
        {
            question: "Can you work with existing designs or do you create from scratch?",
            answer: "I can work with both! If you have existing designs, I can implement them faithfully. If you need a complete design and development solution, I can create custom designs that align with your brand and business goals."
        },
        {
            question: "What is your development process?",
            answer: "My process includes: 1) Initial consultation and requirements gathering, 2) Design mockups and approval, 3) Development with regular check-ins, 4) Testing and quality assurance, 5) Deployment and launch, 6) Post-launch support and training."
        },
        {
            question: "Do you provide responsive design for mobile devices?",
            answer: "Absolutely! All my projects are built with a mobile-first approach, ensuring they look and function perfectly on all devices - from smartphones to tablets to desktop computers. This is crucial for modern web development and SEO."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title 
                    title="FREQUENTLY ASKED QUESTIONS"
                    des="Common Questions"
                />
            </div>
            <div className="max-w-4xl mx-auto px-4">
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-gradient-to-r from-bodyColor to-[#202327] rounded-lg shadow-shadowOne overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-opacity-50 transition-colors duration-300"
                            >
                                <h3 className="text-lg font-semibold text-gray-300">
                                    {faq.question}
                                </h3>
                                <span className="text-designColor">
                                    {openIndex === index ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ; 