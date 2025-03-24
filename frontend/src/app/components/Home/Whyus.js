"use client";
import React, { useEffect, useRef } from "react";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import gsap from "gsap";

const Whyus = () => {
  const cardsRef = useRef([]);
  const card = [
    {
      heading: "Why Choose Us",
      para: "Crafting Intelligent, Scalable, and Engaging Chatbot Solutions.",
    },
    {
      heading: "Custom AI Solutions",
      para: "Tailored chatbot designs built to match your business needs.",
    },
    {
      heading: "Multi-Industry Applications",
      para: "Versatile bots for healthcare, finance, retail, and more.",
    },
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3, 
      ease: "power3.out",
    });
  });
  return () => ctx.revert(); 
  }, []);
  return (
    <div className="w-full flex justify-between flex-col">
      <div className="heading">
        <h3>Why Choose Us?</h3>
      </div>
      <div className="flex justify-between items-center gap-5 mt-5 flex-auto">
        {card.map((item, key) => {
          return (
            <div ref={(el) => (cardsRef.current[key] = el)} key={key}>
              <SpotlightCard>
                <h4>{item.heading}</h4>
                <p>{item.para}</p>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Whyus;
