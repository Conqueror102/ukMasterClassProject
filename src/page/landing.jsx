import Button from "../component/buttom";
import Padding from "../layout/Padding";
import girl from "../assets/girl in hero.png";
import Contact from "../component/contact";
import { SiFuturelearn } from "react-icons/si"
import { GiReceiveMoney, GiWorld } from "react-icons/gi"
import { FaBusinessTime, FaQuoteLeft, FaArrowRight } from "react-icons/fa"
import { FaWhatsapp, FaGlobe, FaGraduationCap, FaBriefcase, FaDollarSign } from "react-icons/fa";
import graduate from "../assets/girlGraduate.png";
import Form from "../component/Form";

const Landing = ({ home, about, service, contact, reg }) => {
  const phoneNumber = "+447440608000";

  const registerSect = () => {
    reg.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* hero section */}
      <div
        ref={home}
        className="w-full flex h-screen max-sm:flex-wrap max-sm:h-[600px] max-sm:pt-6 bg-[#164343]"
      >
        {/* text side */}
        <Padding>
          <div className="w-full flex h-full items-center max-sm:flex-col max-sm:text-center ">
            <div className="w-1/2 text-white max-sm:w-full max-sm:h-1/2  ">
              <p className="pb-4 max-sm:pb-2 max-sm:text-[12px]">
                We provide Educational Oppotunity
              </p>
              <h1 className="text-6xl font-semibold pb-4 max-sm:text-3xl ">
                <span className="text-[#16a571]">UK master’s</span> degree is a
                smart investment for academic
              </h1>
              <p className="pb-4 max-sm:pb-3 max-sm:text-[12px]">
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

            {/* image side */}
            <div className="w-1/2 h-full max-sm:h-1/2 max-sm:w-full ">
              <div className="flex items-center justify-center h-full max-sm:h-full max-sm:w-full max-sm:float-none ">
                <img src={girl} className=" h-full  max-sm:h-full" alt="" />
              </div>
            </div>
          </div>
        </Padding>
      </div>

      {/* section 1 */}
      <section ref={service} className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-green-50 rounded-full mb-4">
              <FaGlobe className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Study Abroad with Confidence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Planning to study in a new country? Let our experienced travel and
              visa agents make the process stress-free, affordable, and
              reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visa Guidance Card */}
            <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 bg-white">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <FaGraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accurate Visa Guidance</h3>
              <p className="text-gray-600">
                Every country has its own visa requirements for international
                students. We stay updated with all embassy regulations so you
                get step-by-step support and avoid costly mistakes.
              </p>
            </div>

            {/* Personalized Support Card */}
            <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 bg-white">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <FaBriefcase className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Personalized & Reliable Support
              </h3>
              <p className="text-gray-600">
                From flight booking to accommodation and visa application, we
                provide one-on-one support to ensure you're fully prepared
                before takeoff.
              </p>
            </div>

            {/* Student-Friendly Prices Card */}
            <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 bg-white">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <FaDollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student-Friendly Prices</h3>
              <p className="text-gray-600">
                We work with trusted partners to give you the best deals on
                flights, accommodation, and travel insurance. Everything is
                upfront—no hidden costs, just honest pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <div ref={reg} className="w-full bg-[#E3F9F5] py-15 max-sm:py-9">
        <p className="text-4xl mb-15 max-sm:mb-10 text-center font-semibold max-sm:text-2xl">
          Enroll for Registration Now!
        </p>
        <Padding>
          <Form />
        </Padding>
      </div>

      {/* section 3 */}
      <div ref={about} className="py-15 flex relative max-sm:py-8">
        <Padding>
        <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div>
              <span className="text-green-600 font-semibold text-lg inline-block pb-2">WHY CHOOSE US</span>
              <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
                Is a 1-Year Master's Degree in the UK a Smart Choice?
              </h2>
            </div>

            {/* Featured Quote */}
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 my-8">
              <div className="flex items-start">
                <FaQuoteLeft className="text-green-400 text-3xl mr-4 mt-1" />
                <p className="text-lg font-medium text-gray-700 italic">
                  "Completing a master's degree in only a year is achievable in the UK, making it both convenient and
                  cost-effective."
                </p>
              </div>
            </div>

            {/* Key Points with Icons */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <FaArrowRight className="text-green-600 text-sm" />
                </div>
                <p className="text-gray-700">
                  As a student considering what place is appealing to study for your master's is ideal. Some countries
                  may not be the right place for you to study.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <FaArrowRight className="text-green-600 text-sm" />
                </div>
                <p className="text-gray-700">
                  The UK is an appealing destination for immigrants seeking high quality education, as evident when you
                  check the top ranking universities in the world.
                </p>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <FaArrowRight className="text-green-600 text-sm" />
                </div>
                <p className="text-gray-700">
                  Taking into consideration the convenience and the cost effectiveness, it's an attractive option for
                  many international students.
                </p>
              </div>
            </div>

            {/* Highlighted Conclusion */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why It's Worth Considering</h3>
              <p className="text-gray-700">
                This article seeks to discuss why pursuing a 1-year master's degree in the UK could be one of the best
                decisions you have made for yourself, offering both academic excellence and career advancement.
              </p>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-8">
            {/* Benefit Cards */}
            <div className="grid gap-8">
              {/* Fast Learning Experience */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-lg mr-4">
                    <SiFuturelearn className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Fast learning experience</h3>
                    <p className="text-gray-600">
                      Intensive programs condense two years of study into one, ideal for career-driven students.
                    </p>
                  </div>
                </div>
              </div>

              {/* Save Time and Money */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-lg mr-4">
                    <GiReceiveMoney className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Save time and money</h3>
                    <p className="text-gray-600">Shorter tuition and living expenses help reduce financial burden.</p>
                  </div>
                </div>
              </div>

              {/* World Class Universities */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-lg mr-4">
                    <GiWorld className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Access world class universities</h3>
                    <p className="text-gray-600">
                      Universities like Oxford and Cambridge enhance career prospects globally.
                    </p>
                  </div>
                </div>
              </div>

              {/* Job Placement */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-lg mr-4">
                    <FaBusinessTime className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Job placement after study</h3>
                    <p className="text-gray-600">
                      Strong career services and a diverse job market improve post-graduation employment chances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Padding>
      </div>

      {/* section contact */}
      <div
        ref={contact}
        className="bg-[#164343] p-20 max-sm:p-3 h-screen flex items-center justify-center max-sm:flex-col"
      >
        <div className="bg-[#E3F9F5] w-full rounded-t-full max-sm:flex-col flex pt-10">
          <div className="">
            <img src={graduate} className="-mt-20 max-sm:m-0" alt="" />
          </div>

          <div className="w-1/2 max-sm:w-full flex flex-col justify-center max-sm:items-center">
            <p className="text-4xl font-semibold max-sm:my-2 max-sm:px-3 mb-10 max-sm:text-[25px]">
              let talk on whatapp
            </p>

            <div className="max-sm:px-4">
              <a href={`http://wa.me/${phoneNumber}`}>
                <Contact
                  icon={<FaWhatsapp />}
                  className={`text-2xl items-center max-sm:text-lg`}
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
