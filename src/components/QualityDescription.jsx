import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from "framer-motion";

export default function QualityDescription() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 0.8]);
    const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 1,],
        [1, 1, 1]
    );

    const text1Y = useTransform(
        scrollYProgress,
        [0.3, 0.4, 0.5],
        ["30px", "0px", "-30px"]
    );

    const text2Opacity = useTransform(
        scrollYProgress,
        [0.3, 0.5, 1],
        [0, 1, 1]
    );


    const text3Opacity = useTransform(
        scrollYProgress,
        [0.6, 0.7, 1],
        [0, 1, 1]
    );

    const textScale = useTransform(
        scrollYProgress,
        [0, 1],
        [0.5, 1]
    );

    const yTextPos = useTransform(
        scrollYProgress,
        [0.3, 0.9, 1],
        ["30px", "0px", "-400px"]
    );

    const yAll = useTransform(
        scrollYProgress,
        [0.3, 0.9, 1],
        ["30px", "0px", "160px"]
    );

    return (
        <section
            ref={targetRef}
            className="flex h-[500vh] flex-col items-center justify-start"
        >
            <div className="sticky top-[15vh] h-[66.8vh] px-16 text-2xl leading-[1] text-white w-[80rem] [&_p]:max-w-[90%]">

                <motion.div style={{ x }} className="relative h-full ">
                    <motion.figure style={{ opacity: opacity , "y":yAll }} className="absolute inset-0 w-[50%] h-[400px] flex flex-col px-6 py-8 rounded-lg group hover:bg-[#0AFFC5] md:py-4 hover:shadow-gray-300 hover:transition-all hover:duration-700 hover:cursor-pointer hover:border-accent-500 bg-[#E1E1E1] text-black"  >
                        <div className='pt-8 '>
                            <h4 class="absolute text-5xl font-bold text-right group-hover:transition-all group-hover:duration-500 top-2 right-6 md:text-6xl group-hover:text-black-300 text-black-100/30 text-[#AEABB3] pt-8">01</h4>
                            <div class="flex flex-col">
                                <div class=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="h-[86px] w-[68px] text-black-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path></svg></div>
                                <h1 class="mb-2 text-2xl font-bold uppercase md:text-3xl md:mb-4 group-hover:text-black-500 text-black-100 group-hover:transition-all group-hover:duration-700 group-hover:cursor-pointer">FAST ONBOARDING</h1>
                                <p class="tracking-wider text-lg font-semibold ">We excel at streamlined communication. Enabling rapid application development to our global clientele with increased proficiency. We make time, culture and location differences imperceptible.</p>
                            </div>
                        </div>
                    </motion.figure>

                    <motion.figure style={{ opacity: text2Opacity, "y":yAll }} className="absolute inset-0 w-[50%] h-[400px] flex flex-col px-6 py-8 rounded-lg group hover:bg-[#0AFFC5] md:py-4 hover:shadow-gray-300 hover:transition-all hover:duration-700 hover:cursor-pointer hover:border-accent-500 bg-[#E1E1E1] text-black">
                        <div className='pt-8'>
                            <h4 className="absolute text-5xl font-bold text-right group-hover:transition-all group-hover:duration-500 top-2 right-6 md:text-6xl group-hover:text-black-300 text-black-100/30 text-[#AEABB3] pt-8">02</h4>
                            <div className="flex flex-col"><div className="">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683753031" viewBox="0 0 1024 1024" version="1.1" className="h-[86px] w-[68px] text-black-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z"></path><path d="M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v0.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-0.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 512H160V232h704v440z"></path></svg></div>
                                <h1 className="mb-2 text-xl font-bold uppercase md:text-3xl md:mb-4 group-hover:text-black-500 text-black-100 group-hover:transition-all group-hover:duration-700 group-hover:cursor-pointer">AGILE PROJECT MANAGEMENT</h1>
                                <p className="tracking-wider text-lg font-semibold ">We excel at streamlined communication. Enabling rapid application development to our global clientele with increased proficiency. We make time, culture and location differences imperceptible.</p></div></div>
                    </motion.figure>

                    <motion.figure style={{ opacity: text3Opacity ,  "y":yAll}} className="absolute inset-0 w-[50%] h-[400px] flex flex-col px-6 py-8 rounded-lg group hover:bg-[#0AFFC5] md:py-4 hover:shadow-gray-300 hover:transition-all hover:duration-700 hover:cursor-pointer hover:border-accent-500 bg-[#E1E1E1] text-black   ">
                        <div className='pt-8' >
                            <h4 className="absolute text-5xl font-bold text-right group-hover:transition-all group-hover:duration-500 top-2 right-6 md:text-6xl group-hover:text-black-300 text-black-100/30 text-[#AEABB3] pt-8">03</h4>
                            <div className="flex flex-col">
                                <div className=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-[86px] w-[68px] text-black-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                </div>
                                <h1 className="mb-2 text-2xl font-bold uppercase md:text-3xl md:mb-4 group-hover:text-black-500 text-black-100 group-hover:transition-all group-hover:duration-700 group-hover:cursor-pointer">CONSISTENT DELIVERY</h1>
                                <p className="tracking-wider text-lg font-semibold ">In-depth expertise, time-tested processes and tech excellence allow us to deliver optimum output. We implement various software development methodologies to deliver on-time.</p>
                            </div>
                        </div>
                    </motion.figure>
                </motion.div>


                <motion.p
                    style={{
                        scale: textScale,
                        // "--y": text1Y,
                        "y": yTextPos
                    }}
                    className="tracking-wider text-xl text-[#AEABB3] text-center translate-x-14 "
                >
                    We excel at streamlined communication. Enabling rapid application development to our global clientele with increased proficiency. We make time, culture and location differences imperceptible.
                </motion.p>
            </div>
        </section>
    )
}
