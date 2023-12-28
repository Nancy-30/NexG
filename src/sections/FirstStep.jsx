import React from 'react'

export default function FirstStep() {
  return (
    <div className='relative w-full h-[500px] bg-[#00E29E] mt-32 overflow-hidden flex justify-center'>
      <div className='absolute w-[100rem] h-[100rem] bg-[#00FFBB] rounded-full top-[-72rem] z-0'></div>
      <div className='z-60 absolute flex flex-col items-center w-[80%] lg:w-[50%] pt-14 gap-6'>
        <h1 className='text-4xl lg:text-6xl font-bold text-[#222222]'>Take the first step</h1>
        <div className="h-1 w-[120px] lg:w-[250px] bg-[#191934] rounded-lg"></div>
        <p className='text-[#2F5562] font-semibold text-center lg:text-2xl text-lg'>We assist companies in elevating their notion of whats possible when our limitless technology expertise is interfaced with an inquisitive understanding of their business goals. Lets talk about how we can create something awesome together.</p>
        <button type="button" class="rounded-sm bg-[#191934] py-2 px-4 md:py-2.5 md:px-4 text-sm md:text-sm uppercase tracking-widest text-[#b4b4c5] outline-none font-semibold">Get A Quote</button>
      </div>
    </div>
  )
}
