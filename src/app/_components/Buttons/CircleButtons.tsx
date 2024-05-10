import React from "react";
import Link from 'next/link';
interface props {
  text: string;
  className?: string;
}

export const CircleButtons = ({ text, className }: props) => {
  return (
    <div className={`${className} rounded-full p-4 outline outline-[3px] outline-black aspect-square`}>
      <div className="rounded-full p-4 outline outline-[3px] outline-black aspect-square">
        <button
            className="font-arial text-white text-xl rounded-full h-28 w-28 bg-black text-center"
        >
            <span>{text}</span>
        </button>
      </div>
    </div>
  );
};
