import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';



export default function QualitiesHeading() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"]
    })

    const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-120%"]);

    const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

    const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

    const opacityBorder = useTransform(
        scrollYProgress,
        [0.7, 0.71, 0.72],
        [1, 0.6, 0]
    );

    const finalTextOpacity = useTransform(
        scrollYProgress,
        [0.7, 0.71, 0.72, 0.8, 0.9],
        [0, 0.6, 1, 1, 0]
    );

    const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

    return (
        <motion.section
            ref={targetRef}
            style={{
                "opacity": opacitySection,
                "--opacity-border": opacityBorder,
                "--scale": scale,
            }}
            className='flex h-[500vh] items-start justify-start mt-[60vh]'>

            <motion.div
                className='sticky top-[50%] left-[50%] min-h-[25rem] min-w-[25rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#0AFFC5] before:opacity-[var(--opacity-border)]'>

                <motion.p
                    style={{ x: textX, y: "-50%" }}
                    aria-hidden
                    className='whitespace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[10rem] text-wihte opacity-65'>
                    Why Choose US?
                </motion.p>

                <motion.p
                    aria-hidden
                    style={{ x: textX, y: "-50%" }}
                    className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[11] text-[9rem] text-transparent text-white">
                    Why Choose US?
                </motion.p>

                <motion.div style={{
                    opacity: finalTextOpacity,
                    scale: finalTextScale,
                    y: "-50%",
                    x: "-50%",
                }}
                    className="absolute left-[70%] lg:left-1/2 top-1/2 text-[4rem] lg:text-[6rem] leading-tight text-white flex flex-col items-center gap-3">
                    WHY CHOOSE US?
                    <div className='h-1 w-[350px] bg-[#0AFFC5] rounded-md'></div>
                    <div className="fixed">
                        <div className="h-[300px] w-[300px] rounded-full bg-[#0AFFC5] opacity-15 blur-[60px] absolute top-[180px] -translate-x-[300%] hidden lg:block"></div>
                        <div className="h-[400px] w-[400px] rounded-full bg-[#0AFFC5] absolute top-[-130px] lg:top-[-160px] lg:left-[180px] opacity-10 blur-3xl"></div>
                    </div>
                </motion.div>

                <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
                <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[#0AFFC5] opacity-[var(--opacity-border)]" />
            </motion.div>


        </motion.section>
    )
}
