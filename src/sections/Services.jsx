import React, { useRef } from 'react';
import ServiceCarousel from './ServiceCarousel';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Services() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const slideX = useTransform(scrollYProgress, [0, 0.2, 0.7], ["-100%", "-10%", "10%"])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.5, 1, 1.3])

  return (
    <div
      ref={targetRef}
      className='relative h-[900px] top-[55rem] w-full z-[101] flex flex-col items-center justify-center gap-14'>
      <motion.div
        style={{ opacity, "x": slideX, scale }}
        className='flex flex-col gap-8 items-center translate-y-12'>
        <div className="fixed h-[400px] w-[400px] rounded-full bg-[#0AFFC5] right-[100%] top-[-100px] opacity-10 blur-3xl"></div>
        <div className="fixed h-[400px] w-[400px] rounded-full bg-[#0AFFC5] right-[-70%] top-[300px] opacity-10 blur-3xl"></div>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white'>Our Primary Services</h1>
        <div className="h-1 w-[120px] lg:w-[230px] bg-[#0AFFC5] rounded-lg"></div>
      </motion.div>
      <ServiceCarousel />
    </div>
  )
}
