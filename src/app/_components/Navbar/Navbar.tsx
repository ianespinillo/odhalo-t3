import { links } from "@/data/Links";
import Image from "next/image";
import React from "react";
import { CircleButtons } from "../Buttons/CircleButtons";

export const Navbar = () => {
  return (
    <div>
      <div className="flex gap-4 justify-center p-4 bg-img w-full mx-5">
        {links.map((link) => (
          <CircleButtons key={link} text={link} className={link !== 'ODALHO' ? 'scale-75' : '' }  />
        ))}
      </div>
    </div>
  );
};
