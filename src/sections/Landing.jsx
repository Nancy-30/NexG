import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';



export default function Landing() {

    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end center"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 ? "relative" : "fixed";
    })


    return (
        <motion.section
            style={{ opacity }}
            ref={targetRef} className='flex fixed bg-[#0C0C1A] w-full'>
            <div className='h-[695px] w-full overflow-hidden'>
                <div className='absolute w-[850px] h-[600px] right-[10%] top-[30%] rounded-full bg-[#54b09b] blur-[50px] opacity-5 '></div>
            </div>
            <motion.div
                style={{ scale, opacity }}
                className='p-10 lg:p-0 lg:w-[45%] fixed top-[28%] left-[5%] gap-8 flex flex-col items-center lg:items-start'>

                <div className='flex flex-col gap-7'>
                    <p className='text-[#0AFFC5] text-2xl lg:text-3xl tracking-wider'>DESIGN, DEVELOP, DEPLOY, DELIVER</p>
                    <h1 className='text-5xl lg:text-6xl font-bold text-[#d1cfd5]'>We Are Nex-Gen</h1>
                </div>

                <p className='tracking-wider text-lg font-semibold text-[#AEABB3] text-center lg:text-left'>With State-Of-The-Art Digital Engineering & Enterprise Modernisation Services. Your One Stop Solution For Software Engineering & Innovation</p>

                <button className='bg-[#0AFFC5] w-[160px] p-3 text-[#131034] text-sm hover:shadow-sm hover:shadow-gray-300 rounded-sm z-40 mr-3 mt-6 font-medium' >GET IN TOUCH!</button>
            </motion.div>
        </motion.section>
    )
}
