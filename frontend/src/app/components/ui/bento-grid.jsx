"use client";
import Image from "next/image";
import { cn } from "../lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-7xl gap-4  ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  const imageSrc =
    typeof header === "string" && header.trim()
      ? header
      : "/assets/default.png";
    const truncateText = (text, maxLength) =>
        text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  return (
    <div
      className={cn(
        "group/bento w-full flex flex-col justify-between items-center rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      {typeof header === "string" ? (
        <Image
          src={imageSrc}
          width={200}
          height={200}
          alt="header"
          className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        />
      ) : (
        header
      )}
      <div className="transition duration-200 group-hover/bento:translate-x-2 mt-[3px]">
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
        {truncateText(description, 100)}
        </div>
        <div>
          <button className="bg-textcolortheme text-white text-[10px] font-bold py-[10px] px-[10px] rounded-full mt-[4px]">
            Chat With Bot
          </button>
        </div>
      </div>
    </div>
  );
};
