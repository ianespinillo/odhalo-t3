"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface props {
  text: string;
  letter: string;
  className?: string;
  link?: string;
}

export const CircleButtonsWithLetter = ({
  text,
  className,
  letter,
  link,
}: props) => {
  const router = useRouter().push;
  const urlNormalized = !link
    ? text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .join("-")
        .toLowerCase()
    : link
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
          className="h-24 w-24 rounded-full bg-black text-center font-arial text-white lg:h-[76px] lg:w-[76px] "
          onClick={() => router(`${text === "ODALHO" ? "/" : urlNormalized}`)}
        >
          <div className="flex flex-col items-center justify-center ">
            <span className="text-2xl">{letter.toUpperCase()}</span>
            <span className="text-center text-[9px]">{text}</span>
          </div>
        </button>
      </div>
    </div>
  );
};
