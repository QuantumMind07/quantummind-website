"use client";
import { useEffect, useRef } from "react";
import { Button, ButtonToolbar } from "rsuite";
import ExploreIcon from "@rsuite/icons/Explore";
import GearIcon from "@rsuite/icons/Gear";
import gsap from "gsap";
import Image from "next/image";

const Content = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });
  
      tl.from(headingRef.current, { opacity: 0, y: 50 }) 
        .from(paragraphRef.current, { opacity: 0, y: 30 }, "-=0.5") 
        .from(btnsRef.current, { opacity: 0, scale: 0.9 }, "-=0.5"); 
    });
  
    return () => ctx.revert(); 
  }, []);
  
  return (
    <div className="wrapper h-[400px] flex flex-row justify-between">
      <div className="heading w-[50%] flex justify-center items-center flex-col px-[20px]">
        <h1 ref={headingRef}>Your Gateway to Next-Gen Chatbots</h1>
        <p ref={paragraphRef} className="w-full mt-4 pl-2" >we build innovative AI-powered chatbots tailored to real-world needs.<br/>Explore our projects and see how we revolutionize human-computer interaction.</p>
        <div  ref={btnsRef} className="btn-wrapper w-full mt-8 pl-2">
          <ButtonToolbar>
            <Button className="!bg-textcolortheme !text-white !rounded-xl hover:!bg-btnhover" startIcon={<ExploreIcon/>} size="md">Explore Projects</Button>
            <Button className="!bg-textcolortheme !text-white !rounded-xl hover:!bg-btnhover" startIcon={<GearIcon/>} size="md">Build Your Bot</Button>
          </ButtonToolbar>
        </div>
      </div>
      <div className="logo w-[50%] flex justify-center items-center">
      <div className="relative w-[400px] flex justify-center item-center">
          <Image
            src="/assets/image.png"
            width={500}
            height={400}
            alt="bot image"
            priority
          />
        </div>
      </div>
    </div>
  )
};

export default Content;
