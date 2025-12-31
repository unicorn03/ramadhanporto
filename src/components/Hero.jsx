import akufoto from '../assets/akuhero.webp'

const Hero = () => {
    return (
        <section className="min-h-screen py-24 flex items-center bg-slate-900">
            <div className="container mx-auto px-20">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left md:pl-10">
                        <h2 className="md:pl-10 text-4xl text-white">
                            Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Ramadhan Cahaya Poetra.</span> <br />
                        </h2>
                        <p className="md:pl-10 text-white pt-6 leading-normal text-xl">
                            I am an active student at Universitas Brawijaya with a strong interest in programming and web application development.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-evenly md:mr-4">
                        <img src={akufoto} alt="Foto Ramadhan Cahaya" loading="lazy" className="w-80 h-80 rounded-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero