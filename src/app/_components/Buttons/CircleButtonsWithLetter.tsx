"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface props {
  text: string;
  letter: string;
  className?: string;
}

export const CircleButtonsWithLetter = ({ text, className, letter }: props) => {
  const router = useRouter().push;
  const urlNormalized =text && text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-")
    .toLowerCase();
    
  return (
    <div
      className={`${className} aspect-square rounded-full p-4 outline outline-[3px] outline-black`}
    >
      <div className="aspect-square rounded-full p-3 outline outline-[3px] outline-black">
        <button
          className="lg:h-[76px] lg:w-[76px] h-24 w-24 rounded-full bg-black text-center font-arial text-white "
          onClick={() => router(`${text === "ODALHO" ? "/" : urlNormalized}`)}
        >
          <div className="flex flex-col justify-center items-center ">
          <span className="text-2xl">{letter.toUpperCase()}</span>
          <span className="text-[8px] text-center">{text}</span>
          </div>
        </button>
      </div>
    </div>
  );
};
