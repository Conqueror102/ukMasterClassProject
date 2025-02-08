import Button from "../component/buttom";
import Padding from "../layout/Padding";
import girl from "../assets/girl in hero.png";
import agent from "../assets/about_img_02.png";
import icon1 from "../assets/about-icon-01.png";
import { IoIosCall } from "react-icons/io";
import icon2 from "../assets/about-icon-02.png";
import Services from "../component/Services";
import { FaPassport } from "react-icons/fa6";
import Contact from "../component/contact";
import Learn from "../component/learn";
import { SiFuturelearn } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";
import graduate from "../assets/girlGraduate.png";
import { FaWhatsapp } from "react-icons/fa";
// import React, { useRef } from "react";
import Form from "../component/Form";

const Landing = ({ home, about, service, contact, reg  }) => {
  const phoneNumber = "+447440608000"


const registerSect = () => {
  reg.current?.scrollIntoView({ behavior: "smooth" });
};  
return (
    <>
      {/* hero section */}
      <div
        ref={home} 
        className="w-full  flex h-screen  max-sm:flex-wrap max-sm:h-[600px] max-sm:pt-6 bg-[#164343]"
      >
        {/* text side  */}
        <Padding>
          <div className="w-full flex h-full   items-center max-sm:flex-col max-sm:text-center ">
            <div className="w-1/2  text-white max-sm:w-full max-sm:h-1/2  ">
              <p className="pb-4 max-sm:pb-2 max-sm:text-[12px]">
                We provide Educational Oppotunity
              </p>
              <h1 className="text-6xl font-semibold pb-4 max-sm:text-3xl ">
              <span className="text-[#16a571] ">UK master’s</span> degree is a smart investment for academic
              </h1>
              <p className="pb-4  max-sm:pb-3 max-sm:text-[12px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora numquam soluta, amet consectetur adipisicing elit.
                Tempora numquam soluta,
              </p>
              <div className="w-full space-x-6 ">
              
                <Button
                    onclick={registerSect}
                  text="Register Now "
                  bg="bg-[#16a571] "
                  color="text-white"
                  className={`max-sm:p-2 hover:bg-[#64b899]`}
                />
               
              </div>
            </div>

            {/* image side  */}
            <div className="w-1/2 h-full max-sm:h-1/2 max-sm:w-full ">
              <div className="  flex items-center justify-center  h-full max-sm:h-full  max-sm:w-full max-sm:float-none ">
                <img
                  src={girl}
                  className=" h-full  max-sm:h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Padding>
      </div>

      {/* section 1 */}

      <Padding>
        <div ref={service} className="w-full flex py-20 justify-between max-sm:flex-col-reverse max-sm:py-9">
          <div className="w-1/2 max-sm:w-full ">
            <div className="w-[500px] max-sm:w-full ">
              <img src={agent} alt="" />
            </div>
          </div>

          <div className="w-[550px] max-sm:w-full">
            <div className="flex items-center  gap-4 mb-5">
              <div className="rounded-full h-10 w-10 flex items-center justify-center text-lg  text-white bg-[#33B083]">
                <FaPassport />
              </div>
              <div>
                <p className="text-[#33B083] text-center  font-semibold ">
                  Welcome To ///
                </p>
              </div>
            </div>
            <p className="text-5xl font-bold mb-10 max-sm:text-2xl  max-sm:mb-5">
              Services from experienced agents.
            </p>
            <p className="text-[#777777] mb-10 max-sm:mb-5 max-sm:text-[14px]">
              Country's visa process may have unique requirements, so it is
              important to check the specific guidelines.
            </p>
            <div className="space-y-14 mb-14 max-sm:mb-8 max-sm:space-y-8">
              <Services
                icon={icon1}
                boldText="Accurate Guidance"
                text="Always ready to provide reliable services to our clients"
              />
              <Services
                icon={icon2}
                boldText="Best Price No Hidden Fees"
                text="All our duppliers our prices are always televant"
              />
            </div>

            <div className="flex w-full gap-10">

              <Contact icon={<IoIosCall />}  text="Need Help?"/>
            </div>
          </div>
        </div>
      </Padding>

      {/* section 2 */}
      <div ref={reg} className="w-full bg-[#E3F9F5] py-15 max-sm:py-9" >
        <p  className="text-4xl mb-15 max-sm:mb-10 text-center font-semibold max-sm:text-2xl">
          Enroll for Registration Now!
        </p>
        <Padding >
         <Form/>
        </Padding>
      </div>

    

     

      {/* section 3*/}
      <div ref={about} className="py-15 flex relative max-sm:py-8">
        <Padding>
          <div className="flex justify-between max-sm:flex-col max-sm:pb-5">
            <div className="space-y-6 max-sm:space-y-3 w-[570px] max-sm:w-full">
              <p className="text-[#16a571] font-semibold text-lg">
                why choose Us
              </p>
              <div className="w-full space-y-6 max-sm:space-y-4 max-sm:pb-5">
                <p className="text-4xl font-bold leading-15 max-sm:text-2xl max-sm:leading-7  ">
                  Is a 1-Year Master’s Degree in the UK a Smart Choice?
                </p>
                <div className="space-y-4 max-sm:text-[14px] text-[#777777] ">
                  <p>
                    As a student considering what place is appealing to study
                    for your master's is ideal. Some countries may not be the
                    right place for you to study.
                  </p>
                  The big question for today is if pursuing a 1 year master's
                  degree in the UK is a smart choice. If you have asked yourself
                  this question you may find this post helpful.
                  <p>
                    Yes, studying in the UK is a smart choice for many reasons.
                    For one, the UK is an appealing destination for immigrants
                    seeking for high quality education.
                  </p>
                  This is evident when you check the top ranking universities in
                  the world. Without a doubt, completing a master's degree in
                  only a year is achievable in the UK.
                  <p>
                    Taking into consideration the convenience and the cost
                    effectiveness why then won't it be an attractive option for
                    many?
                  </p>
                  <p>
                    This article, however, seeks to discuss why pursuing a 1
                    year master's degree in the UK could be one of the best
                    decisions you have made for yourself.
                  </p>
                </div>
              </div>
            </div>

            <div  className="w-[500px] max-sm:w-full ">
              <Learn
                icon={<SiFuturelearn />}
                bold="Fast learning experience"
                text="Intensive programs condense two years of study into one, ideal for career-driven students."
              />
              <Learn
                icon={<GiReceiveMoney />}
                bold="Save time and money "
                text="Shorter tuition and living expenses help reduce financial burden.
 for career-driven students."
              />
              <Learn
                icon={<GiWorld />}
                bold="Access world class universities "
                text="Universities like Oxford and Cambridge enhance career prospects globally.
"
              />
              <Learn
                icon={<FaBusinessTime />}
                bold="Job placement after study "
                text=" Strong career services and a diverse job market improve post-graduation employment chances.
With shorter study periods and global recognition.n"
              />
            </div>
          </div>
        </Padding>
      </div>
      {/* section contact */}

        <div ref={contact} className="bg-[#164343] p-20 max-sm:p-3 h-screen flex items-center justify-center max-sm:flex-col">
       
       
          <div className="bg-[#E3F9F5] w-full rounded-t-full max-sm:flex-col  flex pt-10 ">
            
            <div className=" ">
            <img src={graduate} className="-mt-20 max-sm:m-0" alt="" />
            </div>

            <div className=" w-1/2 max-sm:w-full flex flex-col justify-center max-sm:items-center">
            <p className="text-4xl  font-semibold  max-sm:my-2 max-sm:px-3 mb-10 max-sm:text-[25px]">let talk on whatapp</p>

            <div className=" max-sm:px-4">
              <a href={`http://wa.me/${phoneNumber}`}>
              <Contact
                icon={<FaWhatsapp />}
                className={`  text-2xl items-center max-sm:text-lg`}
                text="Contact us"
              />
              </a>
            </div>
          </div>
          </div>

        </div>
      
    </>
  );
};

export default Landing;
