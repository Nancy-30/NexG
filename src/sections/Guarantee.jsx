import React from 'react'

export default function Guarantee() {
  return (
    <div className='relative w-full h-[500px] bg-[#00E29E] mt-32 overflow-hidden flex justify-center'>
      <div className='z-60 absolute flex flex-col items-center w-[80%] lg:w-[75%] pt-14 gap-8'>
        <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-[#222222]'>What We Guarantee?</h1>
        <div className="h-[4.5px] w-[120px] lg:w-[250px] bg-[#222222] rounded-lg"></div>
        <p className='text-[#222222] text-center lg:text-2xl text-md md:text-lg'>We know that if the client’s project launches smoothly, they will come back for more. We are willing to over-invest in guaranteeing results, rather than under-invest to make our financial reports look pretty in the short-run. We offer a risk-free trial period of upto two weeks. You will only have to pay if you are happy with the job and wish to continue. If you are unsatisfied, we will refund payment or fix the issues on our dime.</p>
        <button type="button" class="rounded-sm bg-[#191934] py-2 px-4 md:py-2.5 md:px-4 text-sm md:text-sm uppercase tracking-widest text-[#b4b4c5] outline-none font-semibold">REQUEST A FREE TRIAL</button>
      </div>
    </div>
  )
}
