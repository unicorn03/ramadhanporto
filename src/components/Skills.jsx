import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaLaravel } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMysql, SiFirebase, SiSupabase, SiVite, SiGit } from "react-icons/si";

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 size={50} className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-400" /> },
        { name: "React", icon: <FaReact size={50} className="text-cyan-400 animate-spin-slow" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-cyan-500" /> },
        { name: "Laravel", icon: <FaLaravel size={50} className="text-red-600" /> },
        { name: "Java", icon: <FaJava size={50} className="text-red-500" /> },
        { name: "MySQL", icon: <SiMysql size={50} className="text-blue-600" /> },
        { name: "Firebase", icon: <SiFirebase size={50} className="text-yellow-500" /> },
        { name: "Supabase", icon: <SiSupabase size={50} className="text-emerald-500" /> },
        { name: "Vite", icon: <SiVite size={50} className="text-purple-500" /> },
        { name: "Git", icon: <SiGit size={50} className="text-orange-600" /> },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-900 min-h-screen flex justify-center items-center">
            {/* Container Utama (sama seperti Portfolio) */}
            <div className="container w-full md:w-[80%] px-4 md:px-0 mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">My <span className="bg-gradient-to-r from-blue-300 to-purple-700 bg-clip-text text-transparent">Skills</span></h2>
                
                {/* CARD UTAMA
                    Style dibuat mirip dengan portfolio: bg-slate-800, rounded-2xl, border, shadow.
                    Kita tambahkan padding (p-8 md:p-12) agar isinya tidak mepet.
                */}
                <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-8 md:p-12 relative overflow-hidden">
                    
                    {/* Optional: Background hiasan samar */}
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.1] mask-image-gradient-to-b"></div>

                    {/* GRID LAYOUT untuk Ikon
                        - grid-cols-2: di HP 2 kolom
                        - md:grid-cols-4: di tablet 4 kolom
                        - lg:grid-cols-6: di laptop 6 kolom
                        - gap-8: jarak antar item
                    */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 relative z-10">
                        {skills.map((skill, index) => (
                            // ITEM SKILL INDIVIDU
                            <div 
                                key={index}
                                className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-purple-500/50 hover:bg-slate-700 transition-all duration-300 group hover:-translate-y-2"
                            >
                                {/* Render Ikon */}
                                <div className="mb-4 transition-transform group-hover:scale-110 duration-300">
                                    {skill.icon}
                                </div>
                                {/* Nama Skill */}
                                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;