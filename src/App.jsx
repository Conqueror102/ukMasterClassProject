import React, { useRef } from "react";
import Header from "./static/Header";
import Landing from "./page/landing";
import Footer from "./static/Footer";

const App = () => {
  const home = useRef(null)
  const about = useRef(null)
  const service = useRef(null)
  const contact = useRef(null)
  const register = useRef(null)
  const handHomeScroll =()=>{
     home.current?.scrollIntoView({behavior:"smooth"})
  }
  const handAboutScroll =()=>{
     about.current?.scrollIntoView({behavior:"smooth"})
  }
  const handServiceScroll =()=>{
     service.current?.scrollIntoView({behavior:"smooth"})
  }
  const handContactScroll =()=>{
      contact.current?.scrollIntoView({behavior:"smooth"})
  }
  const handRegisterScroll =()=>{
      register.current?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <>
      <Header homeScroll={handHomeScroll } aboutScroll={handAboutScroll} serviceScroll={handServiceScroll} contactScroll={handContactScroll} enroll={handRegisterScroll}/>
      <Landing home={home} about={ about} service={service} contact={contact} reg={register} />
      <Footer />
    </>
  );
};

export default App;
