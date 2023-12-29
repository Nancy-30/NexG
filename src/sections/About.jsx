import React, { useRef } from 'react'
import AboutGif from "../assets/About.gif";
import { useScroll, useTransform, motion } from 'framer-motion';


export default function About() {
    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"]
    })

    const scale = useTransform(scrollYProgress, [0.1, 0.5], [3, 1.5])
    const x = useTransform(scrollYProgress, [0.1, 0.25, 0.5, 0.6], ["60%", "55%", "0%", "-20%"]);
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    return (
        <div
            className='relative justify-center flex top-[50rem] mb-8 '>
            <motion.section
                style={{ opacity }} className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full lg:h-[680px] p-3 lg:p-[100px] gap-7 bg-[#050520]  z-60" ref={targetRef}>
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">Let's Shape Technology</h1>
                    <div className="h-1 w-[120px] lg:w-[250px] bg-[#0AFFC5] rounded-lg"></div>
                    <p className="tracking-wider lg:text-lg font-semibold text-[#AEABB3] lg:w-[70%]">Nex-Gen is a software technology partner to 50+ organizations across the globe. With our roots in innovation, tech agility & time-proven processes, our team of 150+ technologists strive to shape the tech industry and help businesses elevate their value proposition through technology.</p>
                    <button className='bg-[#0AFFC5] w-[160px] p-3 text-[#131034] text-sm hover:shadow-sm hover:shadow-gray-300 rounded-sm z-40 mr-3 mt-6 font-medium' >GET IN TOUCH!</button>
                </div>
                <img src={AboutGif} alt="" className="rounded-lg lg:hidden" />

                <div className='h-[30vh] w-[80%] hidden lg:block'>
                    <div className='lg:sticky '>
                        <motion.div
                            style={{ x, scale }}>
                            <img src={AboutGif} alt="" className="rounded-lg" />
                        </motion.div>
                    </div>
                </div>

                {/* blur background */}
                <div className="absolute">
                    <div className="h-[350px] w-[350px] rounded-full bg-[#0AFFC5] opacity-20 blur-[80px] relative top-[90px]"></div>
                    <div className="h-[400px] w-[400px] rounded-full bg-[#0AFFC5] relative right-[-200%] top-[80px] opacity-10 blur-3xl"></div>
                </div>

            </motion.section>
        </div>
    )
}


