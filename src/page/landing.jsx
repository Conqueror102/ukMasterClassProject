import Button from "../component/buttom";
import Padding from "../layout/Padding";
import girl from "../assets/girl in hero.png";
import Contact from "../component/contact";
import { SiFuturelearn } from "react-icons/si"
import { GiReceiveMoney, GiWorld, GiAirplaneDeparture } from "react-icons/gi"
import { FaBusinessTime } from "react-icons/fa"
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaWhatsapp, FaGlobe, FaGraduationCap, FaBriefcase, FaDollarSign } from "react-icons/fa";
import graduate from "../assets/girlGraduate.png";
import Form from "../component/Form";
import { LuFileSearch, LuUserCheck } from "react-icons/lu";

const Landing = ({ home, about, service, contact, reg }) => {

 const features = [
  {
    icon: <MdOutlineVerifiedUser className="text-green-600 text-2xl" />,
    title: "Expert Guidance You Can Trust",
    description: "Years of experience helping students navigate the UK study and visa process with ease.",
  },
  {
    icon: <GiAirplaneDeparture className="text-green-600 text-2xl" />,
    title: "End-to-End Support",
    description: "From application to arrival — including visa, flights, accommodation, and job advice.",
  },
  {
    icon: <GiReceiveMoney className="text-green-600 text-2xl" />,
    title: "Affordable Student Packages",
    description: "We prioritize your budget with honest, transparent pricing and exclusive student deals.",
  },
  {
    icon: <LuFileSearch className="text-green-600 text-2xl" />,
    title: "Up-to-Date Visa Knowledge",
    description: "Stay compliant and confident — we’re always informed on the latest embassy requirements.",
  },
  {
    icon: <FaRegHandshake className="text-green-600 text-2xl" />,
    title: "One-on-One Personalized Service",
    description: "Every student is different — our support is tailored just for you.",
  },
  {
    icon: <LuUserCheck className="text-green-600 text-2xl" />,
    title: "Real Student Success Stories",
    description: "Join hundreds of students who’ve made it to the UK successfully with our help.",
  },
  {
    icon: <SiFuturelearn className="text-green-600 text-2xl" />,
    title: "Fast Learning Experience",
    description: "Intensive programs condense two years of study into one, ideal for career-driven students.",
  },
  {
    icon: <GiReceiveMoney className="text-green-600 text-2xl" />,
    title: "Save Time and Money",
    description: "Shorter tuition and living expenses help reduce financial burden.",
  },
  {
    icon: <GiWorld className="text-green-600 text-2xl" />,
    title: "Access World Class Universities",
    description: "Universities like Oxford and Cambridge enhance career prospects globally.",
  },
  {
    icon: <FaBusinessTime className="text-green-600 text-2xl" />,
    title: "Job Placement After Study",
    description: "Strong career services and a diverse job market improve post-graduation employment chances.",
  },
];


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
                Shape Your Future in the UK
              </p>
              <h1 className="text-6xl font-semibold pb-4 max-sm:text-3xl ">
                <span className="text-[#16a571]">Study and work in the UK — </span> we’ll guide you every step of the way
              </h1>
              <p className="pb-4 max-sm:pb-3 max-sm:text-[12px]">
               Access top universities, explore flexible job opportunities, and get real-time help with your application process — all in one platform.

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
              Your Trusted Partner for a Smooth UK Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
             Dreaming of studying in the UK? Let our expert travel and visa agents handle the hard part. We make the process simple, affordable, and stress-free — so you can focus on your future.

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
                Each country has unique visa requirements for international students — and missing a step can be costly. Our experts stay up-to-date with embassy regulations to provide you with clear, step-by-step support from start to finish.

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
                From visa application to flight booking and accommodation, we offer dedicated one-on-one guidance to make your transition smooth and stress-free. Your journey starts with a team that truly cares.
              </p>
            </div>

            {/* Student-Friendly Prices Card */}
            <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 bg-white">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <FaDollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student-Friendly Prices</h3>
              <p className="text-gray-600">
                We partner with reliable providers to offer you the best deals on flights, accommodation, and travel insurance — all tailored for student budgets. No hidden fees, just honest pricing you can trust.

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
           <div>
              <span className="text-green-600 font-semibold text-lg inline-block pb-2">WHY CHOOSE US?</span>
              <h2 className="text-4xl font-bold leading-tight text-gray-900 ">
                Your Success Abroad Starts With the Right Support
              </h2>
              <p className="mb-6">We don’t just send you abroad — we set you up for success.
</p>
            </div>
        <div className="">
          
          <div className="space-y-8">
           
    <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10">
      {features.map((feature, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-start">
            <div className="bg-green-50 p-3 rounded-lg mr-4">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}

            {/* Highlighted Conclusion */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why It's Worth Considering</h3>
              <p className="text-gray-700">
                Planning to study abroad is a big step — and choosing the UK can be a game-changer. This platform is designed to make your journey smoother, more affordable, and fully supported at every stage. From expert visa guidance to affordable travel plans and job support while studying, we help you unlock opportunities that set you up for long-term success — both academically and professionally.

              </p>
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
