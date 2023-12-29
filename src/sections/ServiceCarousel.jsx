import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import Devp from "../assets/devops.png"
import Ui from "../assets/webD.png";
import WebD from "../assets/webdev.png";
import Appd from "../assets/appD.png";
import Web3 from "../assets/web3.png";
import Game from "../assets/game.png";

export default function ServiceCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"]
  })
  const X = useTransform(scrollYProgress, [0.2, 0.5], ["150%", "-350%"]);
  const rightX = useTransform(scrollYProgress, [0.2, 0.6], ["150%", "-320%"]);
  const leftX = useTransform(scrollYProgress, [0.3, 0.9], ["-290%", "250%"]);


  const opacity = useTransform(scrollYProgress, [0.2, 1], [1, 0]);

  const details = {
    Ui_Ux: {
      img1: Ui,
      name: "UI/UX",
    },

    WebDev: {
      img1: WebD,
      name: "WEB DEV",
    },

    AppDev: {
      img1: Appd,
      name: "APP DEV"
    },

    DevOps: {
      img1: Devp,
      name: "DEV OPS"
    },

    Web3: {
      img1: Web3,
      name: "WEB3"
    },

    GameDev: {
      img1: Game,
      name: "GAME DEV"
    }
  }

  return (
    <motion.section
      ref={targetRef}
      className=' h-[900px] w-full z-[101] flex flex-col items-center justify-center gap-14'>
      <motion.div className='sticky top-[50%] left-[50%] before:absolute before:inset-0 before:scale-[var(--scale)]'>
        <div className='flex flex-col gap-8 items-center opacity-0'>
          <h1 className='text-5xl lg:text-6xl font-bold text-white'>Our Primary Services</h1>
          <div className="h-1 w-[120px] lg:w-[230px] bg-[#0AFFC5] rounded-lg"></div>
        </div>

        <motion.div
          style={{ x: X, y: "-130%", opacity, transition: { duration: 1.5 } }}
          className='w-[95%] md:flex gap-4 absolute left-[calc(-50vw+25rem)] text-[3rem] hidden '>

          {Object.keys(details).map((key) => {
            const item = details[key];
            return (
              <div key={key} className='relative min-w-[300px] md:min-w-[500px] h-[150px] md:h-[300px] bg-white border border-black rounded-xl flex justify-center items-center cursor-pointer'>

                <div className='absolute w-full h-full z-40 flex justify-center items-center transition-all duration-300 rounded-xl overflow-hidden'>
                  <img src={item.img1} alt={item.name} className='absolute w-full h-full z-0 filter transition-all duration-300 text-sm ' />
                </div>

                <p className='z-40 hover:text-[#0AFFC5] w-full h-full bg-gray-700 opacity-50 hover:opacity-100 hover:bg-transparent text-center hover:shadow-[0_5px_10px_rgba(8,_112,_184,_0.7)] rounded-xl transition-all duration-300 pt-24 text-white font-bold'>{item.name}
                  <button type="button" class="absolute bottom-1 right-1 rounded-sm bg-[#0e0e31] py-2 px-4 md:py-2.5 md:px-4 text-sm md:text-sm tracking-widest text-[#b4b4c5] outline-none font-semibold z-40 ">LEARN MORE</button>
                </p>
              </div>
            );
          })}
        </motion.div>



        {/* for responsiveness */}
        <motion.div
          style={{ x: rightX, y: "-250%", opacity, transition: { duration: 1.5 } }}
          className='w-[95%] flex gap-4 absolute left-[calc(-50vw+25rem)] text-[3rem] md:hidden '>

          {Object.keys(details).slice(0, 3).map((key) => {
            const item = details[key];
            return (
              <div key={key} className='relative min-w-[300px] md:min-w-[500px] h-[150px] md:h-[300px] bg-white border border-black rounded-xl flex justify-center items-center cursor-pointer'>

                <div className='absolute w-full h-full z-40 flex justify-center items-center transition-all duration-300 rounded-xl overflow-hidden'>
                  <img src={item.img1} alt={item.name} className='absolute w-full h-full z-0 filter transition-all duration-300 text-sm ' />
                </div>

                <p className='z-40 hover:text-[#0AFFC5] w-full h-full bg-gray-700 opacity-50 hover:opacity-100 hover:bg-transparent text-center hover:shadow-[0_5px_10px_rgba(8,_112,_184,_0.7)] rounded-xl transition-all duration-300 pt-11 md:pt-24 text-white font-bold'>{item.name}
                  <button type="button" class="absolute bottom-1 right-1 rounded-sm bg-[#0e0e31] py-2 px-4 md:py-2.5 md:px-4 text-sm md:text-sm tracking-widest text-[#b4b4c5] outline-none font-semibold z-40 ">LEARN MORE</button>
                </p>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          style={{ x: leftX, y: "-130%", opacity, transition: { duration: 1.5 } }}
          className='w-[95%] flex gap-4 absolute left-[calc(-50vw+25rem)] text-[3rem] md:hidden '>

          {Object.keys(details).slice(-3).map((key) => {
            const item = details[key];
            return (
              <div key={key} className='relative min-w-[300px] md:min-w-[500px] h-[150px] md:h-[300px] bg-white border border-black rounded-xl flex justify-center items-center cursor-pointer'>

                <div className='absolute w-full h-full z-40 flex justify-center items-center transition-all duration-300 rounded-xl overflow-hidden'>
                  <img src={item.img1} alt={item.name} className='absolute w-full h-full z-0 filter transition-all duration-300 text-sm ' />
                </div>

                <p className='z-40 hover:text-[#0AFFC5] w-full h-full bg-gray-700 opacity-50 hover:opacity-100 hover:bg-transparent text-center hover:shadow-[0_5px_10px_rgba(8,_112,_184,_0.7)] rounded-xl transition-all duration-300 pt-11 md:pt-24 text-white font-bold'>{item.name}
                  <button type="button" class="absolute bottom-1 right-1 rounded-sm bg-[#0e0e31] py-2 px-4 md:py-2.5 md:px-4 text-sm md:text-sm tracking-widest text-[#b4b4c5] outline-none font-semibold z-40 ">LEARN MORE</button>
                </p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
