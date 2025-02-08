import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// import theLogo from "../assets/logo lims png.png"


const Footer = () => {
  return (
    <div className='w-full pt-24 px-24 max-sm:p-4 bg-[#f5f6f7]  '>
      <div className='flex gap-x-30 border-b-1 border-gray-500 pb-20 max-sm:pb-10 flex-wrap' >
      <div className=''>
            <div className='w-30 mb-5 cursor-pointer'></div>
            <p className='w-80 mb-5  text-gray-700 font-normal max-sm:w-full'> Each demo built with Teba will look different. you can customize almost anything it the appearance of you website with only a few</p>
            <div className='flex gap-3'>
                <div className='p-3 text-[#16a571] bg-white w-12 text-2xl rounded-md  hover:bg-[#16a571]  hover:text-white text-center'>
                <FaSquareXTwitter />
                </div>
                <div className='p-3 text-[#16a571] bg-white w-12 text-2xl rounded-md hover:bg-[#16a571] hover:text-white text-center'>
                <FaLinkedin />
                </div>
                <div className='p-3 text-[#16a571] bg-white w-12 text-2xl rounded-md hover:bg-[#16a571] hover:text-white text-center'>
                <FaInstagramSquare />
                </div>
                <div className='p-3  text-[#16a571] bg-white w-12 text-2xl rounded-md hover:bg-[#16a571]  hover:text-white text-center'>
                <FaFacebook/>
                </div>
            </div>
        </div>

        <div className='space-y-2  text-gray-700 font-normal'>
            <p className='text-xl font-semibold text-[#164343]  max-sm:mt-5 my-5 max-sm:my-3'>Quick Link</p>
            <p className='cursor-pointer'>About Us</p>
            <p className='cursor-pointer'>Contact</p>
            <p className='cursor-pointer'>Service</p>
            
        </div>
        <div className='space-y-2  text-gray-700 font-normal'>
            <p className='text-xl font-semibold text-[#164343]  max-sm:mt-5 my-5 max-sm:my-3 space-y-2.5'>Services</p>
            <p className='cursor-pointer'>UI/UX Design</p>
            <p className='cursor-pointer'>App Development</p>
            <p className='cursor-pointer'>Web Development</p>
            <p className='cursor-pointer'>Digital Marketing</p>
            <p className='cursor-pointer'>Cyber security</p>
        </div>
        <div className='space-y-2 text-gray-700 font-normal'>
            <p className='text-xl font-semibold text-[#164343]  max-sm:mt-5 my-5 max-sm:my-3 space-y-2.5'>Information</p>
            <p className='cursor-pointer'>Working Process</p>
            <p className='cursor-pointer'>Privacy Policy</p>
            <p className='cursor-pointer'>Terms & Conditions</p>
            <p className='cursor-pointer'>Faqs</p>
        </div>

      </div>

      <div className='py-5 max-sm:py-2 text-center max-sm:text-[12px]  text-gray-700 font-normal'>
        <p>Copyright  2025 MirroTheme. All rignt reserved</p>
      </div>
    </div>
  )
}

export default Footer