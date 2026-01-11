import akufoto from '../assets/akuhero.webp'
import { Download } from "lucide-react";

const Hero = () => {
    return (
        <section className="min-h-screen py-24 flex items-center bg-slate-900">
            <div className="container mx-auto px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 flex flex-col items-center md:items-start md:pl-10 text-center md:text-left">
                        <h2 className="md:text-4xl text-2xl text-white">
                            Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ramadhan Cahaya Poetra.</span>
                        </h2>
                        <p className="text-slate-300 pt-6 leading-normal md:text-xl">
                            I am an active student at Universitas Brawijaya with a strong interest in programming and web application development.
                        </p>
                        
                        <a href="/akucv.pdf" download="CV_Ramadhan Cahaya">
                            <button className="flex flex-row gap-2 items-center justify-center bg-blue-500 rounded-lg px-6 py-2 text-slate-900 mt-6 leading-normal hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/50">
                                <Download size={18}/>
                                Download My CV
                            </button>
                        </a>
                    </div>
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 md:justify-end md:mr-24">
                        <img src={akufoto} alt="Foto Ramadhan Cahaya" loading="lazy" className="w-64 h-64 md:w-80 md:h-80 rounded-3xl md:rounded-full object-cover md:border-1border-4 border-slate-700 shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero