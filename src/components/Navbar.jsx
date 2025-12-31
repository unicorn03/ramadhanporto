const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900 z-50 shadow-xl">
            <div className="container mx-auto px-8 py-4 flex justify-between items-center">
                <h1 className="font-sans text-2xl bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">RAMADHAN CAHAYA POETRA</h1>
                <ul className="flex space-x-6">
                    <a href="#about">
                        <li className="text-lg text-slate-200 hover:cursor-pointer hover:text-violet-500 transition-colors">
                            About
                        </li>
                    </a>
                    <a href="#portfolio">
                        <li className="text-lg text-slate-200 hover:cursor-poin ter hover:text-violet-500 transition-colors">
                            Portfolio
                        </li>
                    </a>
                    <a href="#skills">
                        <li className="text-lg text-slate-200 hover:cursor-pointer hover:text-violet-500 transition-colors">
                            Skills
                        </li>
                    </a>
                    <a href="#contact">
                        <li className="text-lg text-slate-200 hover:cursor-pointer hover:text-violet-500 transition-colors">
                            Contact Me
                        </li>
                    </a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar