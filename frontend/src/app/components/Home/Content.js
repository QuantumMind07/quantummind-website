"use client"
import { useEffect, useRef } from "react";
import { Button, ButtonToolbar } from "rsuite";
import ExploreIcon from "@rsuite/icons/Explore";
import GearIcon from "@rsuite/icons/Gear";
import gsap from "gsap";

const Content = () => {
    const iframeRef = useRef(null);
  const textRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      iframeRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "+=0.5" 
      )
      .fromTo(
        btnsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "+=0.3" 
      );
  }, []);
  return (
    <div className="relative w-full h-screen flex items-center justify-center px-10">
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <iframe
        ref={iframeRef}
        src="https://my.spline.design/roomgirlworkingcopy-187738243bf8cc3d5212e9eb133602aa/"
        className="w-full h-full opacity-[0]"
      ></iframe>
    </div>

    <div className="relative z-10 flex flex-col items-center text-center text-white w-3/5">
      <h1
        ref={textRef}
        className="text-[50px] mt-[-140px] text-textcolortheme font-bold opacity-[0] mq450:text-[30px] mq450:w-[400px]"
      >
        Your Gateway to Next-Gen Chatbots
      </h1>

      <div ref={btnsRef} className="btns flex gap-6 mt-[300px] opacity-[0]">
        <ButtonToolbar className="flex mq450:w-full mq450:flex-col mq450:justify-between mq450:items-center ">
          <Button
            className="bg-blue-500 text-white hover:bg-blue-700 w-[150px]"
            startIcon={<ExploreIcon />}
          >
            Explore Projects
          </Button>
          <Button
            className="bg-green-500 text-white hover:bg-green-700 w-[150px]"
            startIcon={<GearIcon />}
          >
            Build Your Bot
          </Button>
        </ButtonToolbar>
      </div>
    </div>
  </div>
  )
}

export default Content
