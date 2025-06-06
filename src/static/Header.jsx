import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../component/buttom";
import Padding from "../layout/Padding";
import { useState } from "react";

const Header = ({homeScroll, aboutScroll,serviceScroll,contactScroll, enroll }) => {

  const [state, setState] = useState(false) 

  const handleState = ()=>{
    setState(!state)
  }
  const handleStateClose = ()=>{
    setState(false)
  }
  return (
    <div className=" bg-white sticky top-0 shadow-lg w-full text-sm  py-4 max-sm:p-2 z-50 ">
      <Padding>
        {/* logo */}
        <div className="flex justify-between items-center ">
          <div className="cursor-pointer  flex items-center max-sm:w-16">
            <img className=" " src="" alt="" />
            <h1 className="text-2xl font-bold text-[#164343] max-sm:text-lg">
              <span className="text-[#16a571]">WAS-</span>afrik
              <span className="text-[#16a571]">UK</span>
            </h1>
          </div>
          {/* nav for desktop */}
          <nav className=" items-center w-74 gap-10  max-md:hidden  ">
            <ul className="flex gap-2  justify-between w-full font-semibold cursor-pointer  ">
              <li className=" hover:text-[#16a571]" onClick={homeScroll}>Home</li>
              <li className="hover:text-[#16a571]" onClick={aboutScroll}>About</li>
              <li className="hover:text-[#16a571]" onClick={contactScroll}>
                Contact
              </li>
              <li className="max-sm:w-full max-sm:p-2  max-sm:hover:bg-[#16a571]" onClick={serviceScroll} >
                Service
              </li>
            </ul>
          </nav>

          {/* nav */}
        {state && (
          <div onClick={handleStateClose} className={`max-sm:w-full  max-sm:h-screen max-sm:bg-[#27272765] max-sm:absolute max-sm:top-12  max-sm:right-0  `}>
              <nav className="md:hidden max-sm:flex max-sm:float-right items-center w-74 gap-10  max-sm:text-center max-sm:top-20 max-sm:w-55   max-sm:h-[220px] max-sm:rounded-b-md max-sm:bg-white max-sm:shadow-lg">
            <ul className="flex gap-2  justify-between w-full font-semibold cursor-pointer  max-sm:flex-col">
              <li className="max-sm:w-full max-sm:p-2 max-sm:border-b max-sm:border-gray-200  max-sm:hover:bg-[#16a571]" onClick={homeScroll}>Home</li>
              <li className="max-sm:w-full max-sm:p-2 max-sm:border-b max-sm:border-gray-200 max-sm:hover:bg-[#16a571]" onClick={aboutScroll}>About</li>
              <li className="max-sm:w-full max-sm:p-2 max-sm:border-b max-sm:border-gray-200 max-sm:hover:bg-[#16a571]" onClick={contactScroll}>
                Contact
              </li>
              <li className="max-sm:w-full max-sm:p-2  max-sm:hover:bg-[#16a571]" onClick={serviceScroll} >
                Service
              </li>
            </ul>
          </nav>
          </div>
        )}

          {/* button */}
          <div className="flex items-center">
            <Button
              text="Get Started"
              bg="bg-[#16a571]"
              color="text-white"
              className={`max-sm:hidden w-40 hover:bg-[#346159]`}
              onclick={enroll}
            />
            
            <div className="text-lg cursor-pointer bg-[#16a571] text-white p-2 font-semibold rounded-sm hidden max-sm:flex" onClick={handleState}>
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Header;
