"use client";;
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; 
        newArray.unshift(newArray.pop()); 
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className="relative  h-60 w-[25rem] md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-themeblue h-full w-full md:h-60 md:w-96 rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, 
              zIndex: cards.length - index, 
            }}>
            <div className="w-full h-full flex justify-center items-center">
              {card.content}
            </div>
            {/* <div>
              <p className="text-neutral-500 px-4 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 px-4 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div> */}
          </motion.div>
        );
      })}
    </div>
  );
};
