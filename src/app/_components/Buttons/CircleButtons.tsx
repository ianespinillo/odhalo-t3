"use client";
import { useRouter } from "../../../navigation";
import React from "react";
interface props {
  text: string;
  className?: string;
  lang?: string;
  link?: string;
}

export const CircleButtons = ({ text, className, lang }: props) => {
  const router = useRouter().push;
  const urlNormalized = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-")
    .toLowerCase();
    
  return (
    <div
      className={`${className} aspect-square rounded-full p-3 outline outline-[3px] outline-black`}
    >
      <div className="aspect-square rounded-full p-2 outline outline-[3px] outline-black">
        <button
          className="h-[68px] w-[68px] rounded-full bg-black text-center font-arial text-white md:h-16 md:w-16"
          onClick={() => router(`/${text === "ODALHO" ? "/" : urlNormalized}`)}
        >
          <span className="text-[12px]">{text}</span>
        </button>
      </div>
    </div>
  );
};
