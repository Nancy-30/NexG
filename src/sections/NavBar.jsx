import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='font-poppins text-white flex justify-end tracking-wider w-full fixed z-[101] bg-[#0C0C1A] shadow-sm shadow-[#111125]'>
            <div className='absolute flex w-full text-2xl pt-5 p-3 justify-between '>
                <h1 className='z-10 ml-5'>NexG</h1>
                <IoMenu className='black lg:hidden text-4xl' onClick={() => setIsOpen(!isOpen)} />
            </div>

            <div className='justify-between items-center z-40 p-3 w-[63%] hidden lg:flex mx-7 '>
                <ul className='flex gap-8 z-40 text-[#AEABB3]'>
                    <li className='relative group hover:text-[#0AFFC5] cursor-pointer'>
                        ABOUT
                        <div className='absolute w-[50px] h-[2px] bg-[#0AFFC5] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-md'></div>
                    </li>
                    <li className='relative group hover:text-[#0AFFC5] cursor-pointer'>
                        SERVICES
                        <div className='absolute w-[70px] h-[2px] bg-[#0AFFC5] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-md'></div>
                    </li>
                    <li className='relative group hover:text-[#0AFFC5] cursor-pointer'>
                        TEAM
                        <div className='absolute w-[41px] h-[2px] bg-[#0AFFC5] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-md'></div>
                    </li>
                    <li className='relative group hover:text-[#0AFFC5] cursor-pointer'>
                        CONTACT
                        <div className='absolute w-[75px] h-[2px] bg-[#0AFFC5] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-md'></div>
                    </li>
                </ul>
                <button className='bg-[#0AFFC5] w-[160px] p-3 text-[#0e0c28] text-sm hover:shadow-sm hover:shadow-gray-300 rounded-sm z-40 mr-3'>GET IN TOUCH!</button>
            </div>

            {
                isOpen && <div className='flex lg:hidden absolute w-full z-0 '>
                    <IoMenu className='absolute right-4 text-4xl m-3 lg:hidden block' onClick={() => setIsOpen(!isOpen)} />
                    <div className='h-[43.3rem] bg-[#050520] w-full text-lg '>
                        <div className='translate-y-[50px] flex flex-col gap-20 ml-8 mt-20 text-[#AEABB3]'>
                            <ul className='flex gap-6 flex-col'>
                                <li className='relative group hover:text-[#0AFFC5] cursor-pointer'>
                                    ABOUT
                                    <div className='absolute w-[50px] h-[2px] bg-[#0AFFC5] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-md'></div>
                                </li>
                                <li className='relative group hover:text-[#0AFFC5] cursor-pointer'>
                                    SERVICES
                                    <div className='absolute w-[70px] h-[2px] bg-[#0AFFC5] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-md'></div>
                                </li>
                                <li className='relative group hover:text-[#0AFFC5] cursor-pointer'>
                                    TEAM
                                    <div className='absolute w-[41px] h-[2px] bg-[#0AFFC5] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-md'></div>
                                </li>
                                <li className='relative group hover:text-[#0AFFC5] cursor-pointer'>
                                    CONTACT
                                    <div className='absolute w-[75px] h-[2px] bg-[#0AFFC5] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-md'></div>
                                </li>
                            </ul>
                            <button className='bg-[#0AFFC5] p-2 text-black text-sm hover:shadow-sm hover:shadow-gray-300 w-[150px] rounded-sm'>GET IN TOUCH!</button>
                        </div>
                    </div>
                </div>
            }


            <button classname="flex flex-col justify-center rounded group absolute items-center transition-all duration-500 ease-in origin-center cursor-pointer z-[101] md:hidden right-[24px] text-white">
                <div classname="h-[3px] w-8 my-[3px] rounded-full bg-white-500 transition ease transform duration-300 hover:bg-accent-500 rotate-45 translate-y-3 group-hover:bg-accent-500"></div>
                <div classname="h-[3px] w-8 my-[3px] rounded-full bg-white-500 transition ease transform duration-300 hover:bg-accent-500 opacity-0"></div>
                <div classname="h-[3px] w-8 my-[3px] rounded-full bg-white-500 transition ease transform duration-300 hover:bg-accent-500 -rotate-45 -translate-y-3 group-hover:bg-accent-500"></div>
            </button>
        </div>
    )
}

