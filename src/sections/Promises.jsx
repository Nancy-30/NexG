import React, { useRef } from 'react';

import { useScroll, useTransform, motion } from 'framer-motion';

export default function Promises() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [0.5, 0.8, 1.2, 1])

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 0, 1, 0]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.7, 1], [1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.4, 0.7, 1], [1, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.6, 0.65, 1], [1, 1, 0]);
    const opacity5 = useTransform(scrollYProgress, [0.7, 0.75, 0.95, 1], [0, 1, 1, 0]);
    const opacity6 = useTransform(scrollYProgress, [0.8, 0.85, 0.95, 1], [0, 1, 1, 0]);

    const slide1Y = useTransform(scrollYProgress, [0, 0.2], ["0", "80px"])
    const slide2Y = useTransform(scrollYProgress, [0.2, 0.3], ['860px', "80px"])
    const slide3Y = useTransform(scrollYProgress, [0.4, 0.5], ['860px', "80px"])
    const slide4Y = useTransform(scrollYProgress, [0.6, 0.7], ['860px', "80px"])
    const slide5Y = useTransform(scrollYProgress, [0.7, 0.8], ['860px', "80px"])
    const slide6Y = useTransform(scrollYProgress, [0.8, 0.9], ['900px', "80px"])

    return (
        <div ref={targetRef}
            className='relative top-[-10rem] h-[320vh] w-full z-[101] flex flex-col items-center gap-14'>
            <div className='sticky'
            >
                <motion.div
                    style={{ opacity, scale }}
                    className='fixed flex flex-col gap-8 items-center top-[200px] lg:right-[100px] '>
                    <div className="fixed h-[400px] w-[400px] rounded-full bg-[#0AFFC5] right-[70px] top-[300px] opacity-10 blur-3xl"></div>
                    <h1 className='text-5xl lg:text-6xl font-bold text-white'>What We Promise?</h1>
                    <div className="h-1 w-[120px] lg:w-[230px] bg-[#0AFFC5] rounded-lg"></div>
                </motion.div>
            </div>

            <div className='sticky top-[15vh] px-16 text-2xl leading-[1] text-white w-[80rem] bg-black'>
                <motion.div className="relative h-full ">
                    <motion.div
                        style={{ opacity: opacity1, "y": slide1Y, }}
                        className="z-10 absolute left-[280px] lg:left-[-100px] shadow-[inset_0px_1px_10px_2px_#a0aec0] inset-0 w-[50%] h-[400px] flex flex-col px-6 py-8 rounded-lg group hover:bg-[#0AFFC5] md:py-4 hover:shadow-gray-300 hover:transition-all hover:duration-700 hover:cursor-pointer hover:border-accent-500 bg-[#E1E1E1] text-black"  >
                        <div className='pt-8 '>
                            <div class="flex flex-col">
                                <div class=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="h-[86px] w-[68px] text-black-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path></svg></div>
                                <h1 class="mb-2 text-2xl font-bold uppercase md:text-3xl md:mb-4 group-hover:text-black-500 text-black-100 group-hover:transition-all group-hover:duration-700 group-hover:cursor-pointer">
                                    Top Code Quality</h1>
                                <p class="tracking-wider text-lg font-semibold ">Most sophisticated, readable, scalable and reusable coding techniques are the guidelines we abide for the seamless software development process.</p>
                            </div>
                        </div>
                    </motion.div>



                    <motion.div
                        style={{ opacity: opacity2, "y": slide2Y }}
                        className="z-20 absolute left-[280px] lg:left-[-100px] shadow-[inset_0px_1px_10px_2px_#a0aec0] inset-0 w-[50%] h-[400px] flex flex-col px-6 py-8 rounded-lg group hover:bg-[#0AFFC5] md:py-4 hover:shadow-gray-300 hover:transition-all hover:duration-700 hover:cursor-pointer hover:border-accent-500 bg-[#E1E1E1] text-black"  >
                        <div className='pt-8 '>

                            <div class="flex flex-col">
                                <div class=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="h-[86px] w-[68px] text-black-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path></svg></div>
                                <h1 class="mb-2 text-2xl font-bold uppercase md:text-3xl md:mb-4 group-hover:text-black-500 text-black-100 group-hover:transition-all group-hover:duration-700 group-hover:cursor-pointer">Friendly and Responsive</h1>
                                <p class="tracking-wider text-lg font-semibold ">We offer a convivial and cordial environment for customers to interact with our resources. Our experts are available 24*7 to provide immediate and responsive feedback to customer’s queries.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        style={{ opacity: opacity3, "y": slide3Y }}
                        className="z-30 absolute left-[280px] lg:left-[-100px] shadow-[inset_0px_1px_10px_2px_#a0aec0] inset-0 w-[50%] h-[400px] flex flex-col px-6 py-8 rounded-lg group hover:bg-[#0AFFC5] md:py-4 hover:shadow-gray-300 hover:transition-all hover:duration-700 hover:cursor-pointer hover:border-accent-500 bg-[#E1E1E1] text-black"  >
                        <div className='pt-8 '>

                            <div class="flex flex-col">
                                <div class=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="h-[86px] w-[68px] text-black-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path></svg></div>
                                <h1 class="mb-2 text-2xl font-bold uppercase md:text-3xl md:mb-4 group-hover:text-black-500 text-black-100 group-hover:transition-all group-hover:duration-700 group-hover:cursor-pointer">Rockstar Team</h1>
                                <p class="tracking-wider text-lg font-semibold ">Our team of 150+ developers, designers and quality assurance analysts are adept in their respective domains to provide an enriching experience to our valuable customers.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ opacity: opacity4, "y": slide4Y, }}
                        className="z-40 absolute left-[280px] lg:left-[-100px] shadow-[inset_0px_1px_10px_2px_#a0aec0] inset-0 w-[50%] h-[400px] flex flex-col px-6 py-8 rounded-lg group hover:bg-[#0AFFC5] md:py-4 hover:shadow-gray-300 hover:transition-all hover:duration-700 hover:cursor-pointer hover:border-accent-500 bg-[#E1E1E1] text-black"  >
                        <div className='pt-8 '>

                            <div class="flex flex-col">
                                <div class=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="h-[86px] w-[68px] text-black-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path></svg></div>
                                <h1 class="mb-2 text-2xl font-bold uppercase md:text-3xl md:mb-4 group-hover:text-black-500 text-black-100 group-hover:transition-all group-hover:duration-700 group-hover:cursor-pointer">Quick Turn-Arounds</h1>
                                <p class="tracking-wider text-lg font-semibold ">We expedite the development and QA processes to deliver the product and services within or before the suggested time period.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        style={{ opacity: opacity5, "y": slide5Y, }}
                        className="z-50 absolute left-[280px] lg:left-[-100px] shadow-[inset_0px_1px_10px_2px_#a0aec0] inset-0 w-[50%] h-[400px] flex flex-col px-6 py-8 rounded-lg group hover:bg-[#0AFFC5] md:py-4 hover:shadow-gray-300 hover:transition-all hover:duration-700 hover:cursor-pointer hover:border-accent-500 bg-[#E1E1E1] text-black"  >
                        <div className='pt-8 '>
                            <div class="flex flex-col">
                                <div class=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="h-[86px] w-[68px] text-black-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path></svg></div>
                                <h1 class="mb-2 text-2xl font-bold uppercase md:text-3xl md:mb-4 group-hover:text-black-500 text-black-100 group-hover:transition-all group-hover:duration-700 group-hover:cursor-pointer">Life-Time Support</h1>
                                <p class="tracking-wider text-lg font-semibold ">Our services come with lifetime support facilities. We maintain and constantly upgrade our products according to the latest technologies and versions.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        style={{ opacity: opacity6, "y": slide6Y, }}
                        className="z-50 absolute left-[280px] lg:left-[-100px] shadow-[inset_0px_1px_10px_2px_#a0aec0] inset-0 w-[50%] h-[400px] flex flex-col px-6 py-8 rounded-lg group hover:bg-[#0AFFC5] md:py-4 hover:shadow-gray-300 hover:transition-all hover:duration-700 hover:cursor-pointer hover:border-accent-500 bg-[#E1E1E1] text-black"  >
                        <div className='pt-8 '>

                            <div class="flex flex-col">
                                <div class=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="h-[86px] w-[68px] text-black-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path></svg></div>
                                <h1 class="mb-2 text-2xl font-bold uppercase md:text-3xl md:mb-4 group-hover:text-black-500 text-black-100 group-hover:transition-all group-hover:duration-700 group-hover:cursor-pointer">Non-Disclosure Agreement</h1>
                                <p class="tracking-wider text-lg font-semibold ">Privacy and confidentiality of our clients are regarded with utmost priority by signing the NDA. We provide safe and secure exchange of knowledge and data to protect client information.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

        </div>
    )
}
