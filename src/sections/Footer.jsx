import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";




export default function Footer() {
    return (
        <div className='h-[750px] lg:h-[550px] w-full flex flex-col pt-5 gap-5 items-center bg-[#050520] relative'>
            <h1 className='text-lg text-[#267b67] opacity-25 tracking-widest hover:text-[#0AFFC5] hover:opacity-90 cursor-pointer'>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <form action="" className='flex bg-[#191934] p-3 w-[92%] rounded-md border-2 border-[#8484a3] justify-evenly flex-wrap'>
                <input type='text' placeholder='First Name' className='w-[24%] p-2 bg-transparent border border-[#267b67] font-semibold outline-none hover:border-[2px] hover:rounded-md' />
                <input type='text' placeholder='Last Name' className='w-[24%] p-2 bg-transparent border border-[#267b67] font-semibold outline-none hover:border-[2px] hover:rounded-md' />
                <input type='email' placeholder='Email Address' className='w-[24%] p-2 bg-transparent border border-[#267b67] font-semibold outline-none hover:border-[2px] hover:rounded-md' />
                <button type='submit' className='w-[24%] p-2 bg-transparent border-2 rounded-md border-[#41bea1] text-[#41bea1] font-semibold hover:bg-[#46c0a3] hover:text-[#050520] hover:font-medium'>SUBSCRIBE!!</button>
            </form>

            <div className='flex-wrap text-[#8484a3] pt-8 w-[85%] flex gap-6 lg:gap-0 lg:justify-between -translate-x-10 translate-y-4'>
                <ul className='flex flex-col font-semibold text-white gap-2 lg:w-[18%] w-[30%]'>
                    <li className='text-xl text-white font-bold mb-5'>NexG</li>
                    <li>Nex Gen Tech, New Delhi, India - 122001</li>
                    <li>+91 (700) 135-6515</li>
                    <li>+91 (880) 296-7072</li>
                    <li>connect@nexg.tech</li>
                    <li className='flex text-[#0AFFC5] gap-3'>
                        <FaLinkedinIn />
                        <FaTwitter />
                        <FaFacebook />
                        <FaYoutube />
                    </li>
                </ul>

                <ul className='flex flex-col text-[#8484a3] gap-2 lg:w-[18%] w-[30%]'>
                    <li className='text-white font-semibold mb-2'>COMPANY</li>
                    <li>About</li>
                    <li>Meet the Team</li>
                    <li>History</li>
                    <li>Careers</li>
                </ul>

                <ul className='flex flex-col text-[#8484a3] gap-2 lg:w-[18%] w-[30%]'>
                    <li className='text-white font-semibold mb-2'>SERVICES</li>
                    <li>1-on-1 Coaching</li>
                    <li>HR Consulting</li>
                    <li>SEO Optimisation</li>
                    <li>Project Enquiry</li>
                </ul>

                <ul className='flex flex-col text-[#8484a3] gap-2 lg:w-[18%] w-[30%]'>
                    <li className='text-white font-semibold mb-2'>HELPUL LINKS</li>
                    <li>Contact</li>
                    <li>Live Chat</li>
                    <li>Connect with Expert</li>
                    <li>Client Ratings</li>
                </ul>

                <ul className='flex flex-col text-[#8484a3] gap-2 lg:w-[18%] w-[30%]'>
                    <li className='text-white font-semibold mb-2'>LEGAL</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Accessibility</li>
                    <li>Proposal</li>
                </ul>
            </div>


            <div className='w-full bg-[#191934] flex justify-between p-4 text-white absolute bottom-0'>
                <div className='flex items-center'>
                    <FaRegCopyright />Copyright@2023
                </div>
                <div>Proudly developed by <span className='text-[#8484a3]'>Nex-Gen || Team</span></div>
            </div>
        </div>
    )
}
