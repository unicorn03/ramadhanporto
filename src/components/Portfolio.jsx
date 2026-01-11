import React, {useState}  from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import fotoShinedu from "../assets/shinedu.webp";
import fotoBukoo from "../assets/bukoo.webp";
import fotoWeb from "../assets/webporto.webp";

const Portfolio = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const projects = [
        {
            id : 1,
            title : "Shinedu",
            description : "Shinedu is a web-based application designed to make it easier for the next generation to access learning materials anytime and anywhere. It offers up-to-date content aligned with current interests and trends, along with a progress-tracking system that validates users through rewards granted each time they complete a quiz or learning material.",
            tech : ["Laravel", "JavaScript", "Tailwind CSS", "MySQL"],
            image : fotoShinedu,
            link : "https://github.com/unicorn03/shinedu",
        },
        {
            id : 2,
            title : "Personal Portfolio",
            description : "A personal portfolio website to showcase my skills, projects, and experiences as a web developer. It features a clean and modern design, responsive layout, and interactive elements to engage visitors.",
            tech : ["React", "Tailwind CSS", "Vite"],
            image : fotoWeb,
            link : "https://github.com/unicorn03/ramadhanporto",
        },
        {
            id : 3,
            title : "Bukoo",
            description : "Bukoo is a web-based digital library application designed to simplify library management and book borrowing processes. It allows users to explore, borrow, and return books efficiently, while administrators can manage book collections and monitor transactions through a role-based system. Built using Laravel and Livewire, Bukoo provides an interactive and organized experience that helps streamline daily library operations.",
            tech : ["Laravel", "Bootstrap", "MySQL", "Livewire"],
            image : fotoBukoo,
            link : "https://github.com/Valorenz/Bukoo",
        },
        {
            id : 4,
            title : "IMoney",
            description : "iMoney is a mobile application designed to help users manage their personal finances in a simple and organized way. It features a Home section, an Income section for recording incoming funds, an Expense section for tracking daily expenditures, and a Target feature that helps users set and monitor financial goals they want to achieve. Through these features, iMoney supports better financial awareness and helps users manage their money more effectively.",
            tech : ["Java", "Firebase", "Supabase"],
            image : "https://via.placeholder.com/400x300/1e293b/ffffff?text=iMoney",
            link : "https://github.com/FathurAhmad/ProjectPAM"
        }
    ];

    const prevProject = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projects.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const nextProject = () => {
        const isLastSlide = currentIndex === projects.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }

    return (
        <section id="portfolio" className="md:py-20 bg-slate-900 h-screen flex justify-center items-center">
            <div className="container w-full md:w-[80%] pt-32 px-3 md:px-0 mx-auto group relative">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">My <span className="bg-gradient-to-r from-blue-300 to-purple-700 bg-clip-text text-transparent">Portfolio</span></h2>
                <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px] border border-slate-700">
                    <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                        <img loading="lazy" src={projects[currentIndex].image} alt={projects[currentIndex].title} className="rounded-r-lg brightness-90 w-full h-full object-cover transition-transform duration-500 hover:cursor-zoom-in" />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-14 flex flex-col">
                        <div className="md-h-[20%] items-center text-center">
                            <h3 className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent text-4xl font-semibold">
                                {projects[currentIndex].title}
                            </h3>
                        </div>
                        <div className="md:h-[50%] flex flex-grow md:mt-14">
                            <p className="text-white font-sans">
                                {projects[currentIndex].description}
                            </p>
                        </div>
                        <div className="md:mt-auto mt-4 md:mb-4 mb-2 flex flex-wrap gap-2">
                            {projects[currentIndex].tech.map((item, index) => (
                                <span key={index} className="bg-slate-600 px-3 py-1 text-slate-300 text-sm rounded-full">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-auto pt-4">
                            <a href={projects[currentIndex].link} target="_blank"> 
                                <button className="flex flex-row bg-slate-900 items-center px-4 py-2 rounded-full hover:bg-purple-500 text-white hover:pointer hover:scale-110 animate-spin-slow transition-all">
                                    <Github size={20} />
                                    <span className="ml-2 text-base">View Code</span>
                                </button> 
                            </a>
                        </div>
                    </div>
                </div>
                <button onClick={prevProject} className="absolute top-1/2 translate-y-1/2 md:-translate-x-1/2 translate-x-0.5 left-0 bg-slate-300 md:hover:bg-slate-600 transition-all z-10 md:block rounded-full p-3">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextProject} className="absolute top-1/2 translate-y-1/2 md:translate-x-1/2 translate-x-0.5 right-0 bg-slate-300 md:hover:bg-slate-600 transition-all z-10 md:block rounded-full p-3">
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    )
}

export default Portfolio