
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../component/buttom";
import Padding from "../layout/Padding";
import { useState } from "react";

const Header = ({homeScroll, aboutScroll,serviceScroll,contactScroll, enroll }) => {

  const [state, setState] = useState(false) 
  return (
    <div className=" bg-white sticky top-0 shadow-lg w-full text-sm  py-4 max-sm:p-2 z-50 ">
      <Padding>
        {/* logo */}
        <div className="flex justify-between items-center ">
          <div className="cursor-pointer w-25 flex items-center max-sm:w-16">
            <img className=" " src="" alt="" />
          </div>

          {/* nav */}
          <nav className="flex  items-center w-74 gap-10 max-sm:bg-red-200 max-sm:absolute max-sm:top-13 max-sm:w-50  max-sm:right-0 max-sm:p-3  max-sm:h-screen">
            <ul className="flex gap-2  justify-between w-full font-semibold cursor-pointer  flex-col">
              <li onClick={homeScroll}>Home</li>
              <li onClick={aboutScroll}>About</li>
              <li onClick={contactScroll}>
                Contact
              </li>
              <li onClick={serviceScroll} >
                Service
              </li>
            </ul>
          </nav>

          {/* button */}
          <div className="flex items-center">
            <Button
              text="Get Started"
              bg="bg-[#16a571]"
              color="text-white"
              className={`max-sm:hidden w-40 hover:bg-[#346159]`}
              onclick={enroll}
            />
            
            <div className="text-lg cursor-pointer bg-[#16a571] text-white p-2 font-semibold rounded-sm hidden max-sm:flex">
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

export default Header;
