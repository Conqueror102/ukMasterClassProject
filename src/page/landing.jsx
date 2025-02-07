// import React, { useRef } from "react";
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
import student from "../assets/guyStudent.png";
import Learn from "../component/learn";
import { SiFuturelearn } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";
import graduate from "../assets/girlGraduate.png";
import { FaWhatsapp } from "react-icons/fa";

const Landing = ({ home, about, service, contact, reg }) => {
  return (
    <>
      {/* hero section */}
      <div
        ref={home}
        className="w-full  flex h-screen  flex-wrap  max-sm:py-6 bg-[#164343]"
      >
        {/* text side  */}
        <Padding>
          <div className="w-full flex h-full  items-center max-sm:flex-col">
            <div className="w-1/2  text-white max-sm:w-full max-sm:text-center ">
              <p className="pb-4 max-sm:pb-2 max-sm:text-sm">
                We provide Educational Oppotunity
              </p>
              <h1 className="text-6xl font-semibold pb-4 max-lg:text-4xl ">
              <span className="text-[#16a571]">UK master’s</span> degree is a smart investment for academic
              </h1>
              <p className="pb-4  max-sm:pb-3 max-sm:text-[12px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora numquam soluta, amet consectetur adipisicing elit.
                Tempora numquam soluta,
              </p>
              <div className="w-full space-x-6 ">
                <Button
                  text="Register Now "
                  bg="bg-[#16a571] "
                  color="text-white"
                  className={`max-sm:p-2 hover:bg-[#64b899]`}
                />
                <Button
                  text="View service"
                  bg="bg-white"
                  color="text-black"
                  className={`max-sm:p-2 hover:bg-[#f1f1f1]`}
                />
              </div>
            </div>

            {/* image side  */}
            <div className="w-1/2 h-full  max-sm:hidden bg-red-00">
              <div className="  flex items-center justify-center w-[500px] h-full  rounded-2xl float-right max-lg:w-[250px]">
                <img
                  src={girl}
                  className="w-full h-full  object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Padding>
      </div>

      {/* section 1 */}

      <Padding>
        <div ref={service} className="w-full flex py-20 justify-between">
          <div className="w-1/2 ">
            <div className="w-[500px]">
              <img src={agent} alt="" />
            </div>
          </div>

          <div className="w-[550px] ">
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
            <p className="text-5xl font-bold mb-10 ">
              Services from experienced agents.
            </p>
            <p className="text-[#777777] mb-10">
              Country's visa process may have unique requirements, so it is
              important to check the specific guidelines.
            </p>
            <div className="space-y-14 mb-14">
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
      <div ref={reg} className="w-full bg-[#E3F9F5] py-15 " >
        <p className="text-4xl mb-15 text-center font-semibold ">
          Enroll for Registration Now!
        </p>
        <Padding>
          <div className="flex w-full justify-between">
            <div className="rounded-tr-xl rounded-tl-xl rounded-bl-xl   rounded-br-[300px] w-[390px]  overflow-hidden">
              <img src={student} className=" " alt="" />
            </div>
            <div className="w-1/2 bg-white p-10 flex-col h-[500px] flex justify-center border-gray-300 shadow-xl border rounded-xl ">
              <div>
                {" "}
                <p className="text-2xl mb-8 font-semibold text-black">
                  Fill in Details
                </p>
              </div>

              <form action="" className="">
                <div className=" grid grid-cols-2 gap-x-5 gap-y-8 w-full mb-8">
                  <input
                    type="text"
                    placeholder="firstName"
                    className="p-3 border rounded-sm border-[#16a571]"
                  />
                  <input
                    type="text"
                    placeholder="lastName"
                    className="p-3  border rounded-sm border-[#16a571]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3  border rounded-sm border-[#16a571]"
                  />
                  <input
                    type="text"
                    placeholder="Number"
                    className="p-3 border rounded-sm border-[#16a571]"
                  />

                  <select
                    name="country"
                    id=""
                    className="p-3 border rounded-sm border-[#16a571]"
                  >
                    <option value="">country</option>
                    <option value="">Nigeria</option>
                    <option value="">Nigeria</option>
                    <option value="">Nigeria</option>
                    <option value="">Nigeria</option>
                  </select>
                  <select
                    name="country"
                    id=""
                    className="p-3 border rounded-sm border-[#16a571]"
                  >
                    <option value="">travling to</option>
                    <option value="">Nigeria</option>
                    <option value="">Nigeria</option>
                    <option value="">Nigeria</option>
                    <option value="">Nigeria</option>
                  </select>
                </div>
                <div className="w-full ">
                  <Button
                    text="submit"
                    bg="bg-[#16a571]"
                    className={`text-white w-full`}
                  />
                </div>
              </form>
            </div>
          </div>
        </Padding>
      </div>

      {/* sectoin 3 */}

      <div className="py-15">
        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mt-10 ">
          <div className="bg-white p-8 rounded-xl border-l-8 border-[#164343] shadow-md">
            <h2 className="text-3xl font-bold text-gray-900">
              Upload Required Documents
            </h2>
            <p className="text-gray-700 mt-3">
              Ensure you upload all the necessary documents for your
              application.
            </p>

            <div className="mt-6 space-y-6 ">
              {[
                "Bsc Certificate",
                "Transcript",
                "Wassce Certificate (Grade for English Language must be C6 or better)",
                "Curriculum Vitae",

                "Personal Statement (one page)",
                "Biodata page of passport (must have at least 6 months validity)",
              ].map((label, index) => (
                <label key={index} className="block">
                  <span className="text-gray-800 font-medium">{label}</span>
                  <input
                    type="file"
                    className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#16a571] file:text-white hover:file:bg-[#16a582] cursor-pointer"
                  />
                </label>
              ))}

              <label className="block">
                <span className="text-gray-800 font-medium">
                  2 Reference Letters (one must be academic)
                </span>
                <input
                  type="file"
                  multiple
                  className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#16a571] file:text-white hover:file:bg-[#16a582] cursor-pointer"
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="bg-[#16a571] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#16a582] transition">
                Submit Documents
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* section 4*/}
      <div ref={about} className="bg-[#E3F9F5] py-15 flex relative">
        <Padding>
          <div className="flex justify-between">
            <div className="space-y-6  w-[570px] ">
              <p className="text-[#16a571] font-semibold text-lg">
                why choose Us
              </p>
              <div className="w-full space-y-6">
                <p className="text-4xl font-bold leading-15">
                  Is a 1-Year Master’s Degree in the UK a Smart Choice?
                </p>
                <div className="space-y-4">
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

            <div className="w-[500px] ">
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
 
        <div ref={contact} className="bg-[#164343] py-20 h-screen flex items-center relative">
          <div className=" ">
            <p className="text-5xl font-semibold text-white px-25  mb-10">let talk on whatapp</p>

            <div className="px-25">
              <Contact
                icon={<FaWhatsapp />}
                className={`text-white  text-2xl items-center`}
                text="Contact us"
              />
            </div>
          </div>
          <div className="bg-[#E3F9F5] rounded-t-full   ">
            <div className=" ">
            <img src={graduate} className="-mt-20" alt="" />
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Landing;
