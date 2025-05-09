import React from 'react';
import { FaFacebook, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Footer = ({ home, about, service, reg }) => {
  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full pt-24 px-24 max-sm:p-4 bg-[#f5f6f7]">
      <div className="flex gap-x-30 border-b-1 border-gray-500 pb-20 max-sm:pb-10 flex-wrap">
        {/* Intro section */}
        <div>
          <div className="w-30 mb-5 cursor-pointer text-2xl font-bold text-[#164343]">
            UK MasterClass
          </div>
          <p className="w-80 mb-5 text-gray-700 font-normal max-sm:w-full">
            We help students secure UK Master’s admission, visa support, and relocation guidance with ease, clarity, and confidence.
          </p>
          <div className="flex gap-3">
            <a href="https://twitter.com"><div className="p-3 text-[#16a571] bg-white w-12 text-2xl rounded-md hover:bg-[#16a571] hover:text-white text-center"><FaSquareXTwitter /></div></a>
            <a href="https://linkedin.com"><div className="p-3 text-[#16a571] bg-white w-12 text-2xl rounded-md hover:bg-[#16a571] hover:text-white text-center"><FaLinkedin /></div></a>
            <a href="https://instagram.com"><div className="p-3 text-[#16a571] bg-white w-12 text-2xl rounded-md hover:bg-[#16a571] hover:text-white text-center"><FaInstagramSquare /></div></a>
            <a href="https://facebook.com"><div className="p-3 text-[#16a571] bg-white w-12 text-2xl rounded-md hover:bg-[#16a571] hover:text-white text-center"><FaFacebook /></div></a>
          </div>
        </div>

        {/* Quick Links with scroll handlers */}
        <div className="space-y-2 text-gray-700 font-normal">
          <p className="text-xl font-semibold text-[#164343] max-sm:mt-5 my-5 max-sm:my-3">Quick Links</p>
          <p className="cursor-pointer" onClick={() => scrollTo(home)}>Home</p>
          <p className="cursor-pointer" onClick={() => scrollTo(about)}>About</p>
          <p className="cursor-pointer" onClick={() => scrollTo(service)}>Services</p>
          <p className="cursor-pointer" onClick={() => scrollTo(reg)}>Register</p>
        </div>

        {/* Services */}
        <div className="space-y-2 text-gray-700 font-normal">
          <p className="text-xl font-semibold text-[#164343] max-sm:mt-5 my-5 max-sm:my-3">Our Services</p>
          <p className="cursor-pointer">Visa Guidance</p>
          <p className="cursor-pointer">University Admission</p>
          <p className="cursor-pointer">Financial Planning</p>
          <p className="cursor-pointer">Relocation Assistance</p>
          <p className="cursor-pointer">Job Placement Support</p>
        </div>

        {/* Information */}
        <div className="space-y-2 text-gray-700 font-normal">
          <p className="text-xl font-semibold text-[#164343] max-sm:mt-5 my-5 max-sm:my-3">Information</p>
          <p className="cursor-pointer">How It Works</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms & Conditions</p>
          <p className="cursor-pointer">FAQs</p>
        </div>
      </div>

      <div className="py-5 max-sm:py-2 text-center max-sm:text-[12px] text-gray-700 font-normal">
        <p>© 2025 UK MasterClass. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
