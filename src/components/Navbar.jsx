import React from 'react'
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact Me', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900 z-50 shadow-xl">
            <div className="container mx-auto py-3 px-3 md:px-8 md:py-4 flex justify-between items-center">
                <h1 className="font-sans text-sm md:text-2xl bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                    RAMADHAN CAHAYA POETRA
                </h1>
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="text-lg text-slate-200 hover:text-violet-500 transition-colors font-medium">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-200 hover:text-white focus:outline-none transition-colors">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl">
                    <ul className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} onClick={() => setIsOpen(false)} className="text-lg text-slate-200 hover:text-violet-500 transition-colors font-medium block">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar