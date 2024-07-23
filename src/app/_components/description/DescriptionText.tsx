import React from "react";
import { CircleButtons } from "../Buttons/CircleButtons";

interface props {
  ask: string;
  text: string;
  className?: string;
}

export const DescriptionText = ({ ask, text, className }: props) => {
  return (
    <div className="flex flex-col justify-center p-3 md:flex-row lg:p-24">
      <div className="hidden basis-1/2 items-center justify-center p-2 outline outline-2 outline-black md:flex lg:p-20">
        <CircleButtons text="ODALHO" className="sm:scale-[2.5] lg:scale-[4]" />
      </div>
      <div className={`${className} flex h-[800px] basis-1/2 flex-col gap-5 p-4 pt-10 text-center font-arial outline outline-2 outline-black`}>
        <h1 className="text-6xl font-[520]">{ask} </h1>
        <p className="pt-16 text-3xl font-medium sm:text-2xl lg:text-4xl italic">
          {text}
        </p>
      </div>
    </div>
  );
};
