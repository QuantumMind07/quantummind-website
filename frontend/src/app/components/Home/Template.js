import React from "react";
import { CardStack } from "./card-stack";
import { cn } from "../lib/utils";
import Image from "next/image";
import { Button } from "rsuite";

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-blue-100 text-blue-800 dark:bg-blue-700/[0.2] dark:textcolortheme px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    content: (
      <Image
        src={"/assets/Decimi.png"}
        width={150}
        height={150}
        alt="Decimi"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
  },
  {
    id: 1,
    content: (
      <Image
        src={"/assets/pristyn.png"}
        width={150}
        height={150}
        alt="Pristyn"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
  },
  {
    id: 2,
    content: (
      <Image
        src={"/assets/CountryDelight.png"}
        width={150}
        height={150}
        alt="Country Delight"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
  },
];

const Template = () => {
  return (
    <div className="wrapper w-full flex flex-row gap-[40px] items-center my-[120px] px-6">
      <div className="block1 flex">
        <CardStack items={CARDS} />
      </div>

      <div className="block2 w-full flex flex-col justify-center items-start gap-4">
        <h3 className="text-black font-bold text-gray-800 ">
        Chatbot <Highlight>Templates & Companies</Highlight> We Built For
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">
        Explore our collection of <Highlight>AI-powered chatbot templates</Highlight> built for various industries. These chatbots help businesses automate customer interactions, enhance engagement, and streamline workflows.
        </p>
        <Button appearance="primary" className="!bg-textcolortheme !text-white px-4 py-2 mq450:hidden hover:!bg-btnhover mt-2">
          View More Templates
        </Button>
      </div>
    </div>
  );
};

export default Template;
