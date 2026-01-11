import akualmet from '../assets/akualmet.webp'

const About = () => {
    return (
        <section id="about" className="md:py-20 py-7 bg-slate-800">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-white mb-7 text-center">About <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">Me</span></h2>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 flex justify-end">
                        <img src={akualmet} alt="Foto Ramadhan Cahaya" loading="lazy" className="md:w-1/2 md:h-1/2 h-72 rounded-lg object-cover shadow-lg md:mr-28"/>
                    </div>
                    <div className="md:w-1/2 flex justify-normal bg-gradient-to-r from-slate-900 to-blue-950 p-8 text-gray-200 shadow-lg md:mr-20 rounded-lg">
                        <p className="leading-relaxed text-justify">
                            Hello! I'm Ramadhan Cahaya Poetra, a student at Universitas Brawijaya who enjoys exploring programming and creating web applications. I have a strong interest in building clean, functional, and user-friendly digital solutions.
                            I'm always eager to learn new technologies and continuously improve my skills through hands-on projects. My goal is to contribute to meaningful projects while becoming a better problem solver and developer over time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About