import React from 'react';
import { FaInstagram, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
    const contacts = [
        {
            id: 1,
            platform: "Email",
            title: "bimarama2014", 
            action: "Email me",
            icon: <SiGmail size={32} />, 
            link: "mailto:bimarama2014@gmail.com",
            color: "group-hover:text-red-500"
        },
        {
            id: 2,
            platform: "Instagram",
            title: "@ramadhancahayap", 
            action: "DM me",
            icon: <FaInstagram size={32} />,
            link: "https://instagram.com/ramadhancahayap",
            color: "group-hover:text-pink-500"
        },
        {
            id: 3,
            platform: "LinkedIn",
            title: "Ramadhan Cahaya", 
            action: "Connect",
            icon: <FaLinkedin size={32} />,
            link: "https://www.linkedin.com/in/ramadhan-cahaya-910762249/",
            color: "group-hover:text-blue-500"
        }
    ];

    return (
        <section id="contact" className="md:py-20 pb-20 bg-slate-900 min-h-[50vh] flex flex-col justify-center items-center">
            <div className="text-center mb-12 px-4">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Contact <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">Me</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    Want to get in touch? I'd love to hear from you. Here's how you can reach me.
                </p>
            </div>

            <div className="w-full lg:w-[60%] px-4 lg:px-0 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contacts.map((contact) => (
                        <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer" className="group block"
                        >
                            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex items-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
                                <div className={`text-slate-300 transition-colors duration-300 ${contact.color}`}>
                                    {contact.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-semibold text-sm md:text-base tracking-wide">
                                        {contact.title}
                                    </span>
                                    <span className="text-slate-500 text-sm group-hover:text-purple-600 flex items-center gap-1 transition-colors duration-300 mt-1">
                                        {contact.action} 
                                        <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;