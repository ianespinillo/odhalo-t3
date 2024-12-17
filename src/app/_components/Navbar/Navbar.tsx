import { links } from "@/data/Links";
import React from "react";

import { CircleButtons } from "../Buttons/CircleButtons";
import { BurgerMenu } from "./BurgerMenu";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const t = useTranslations("navbar")
  
  return (
    <div>
      <BurgerMenu />
      <div className="flex flex-col items-center justify-center sm:hidden">
        <h1 className="text-4xl font-bold font-arial">ODALHO</h1>
        <h4 className="text-2xl font-semibold font-arial">{t("subtitle")}</h4>
      </div>
      <div className="bg-img hidden w-full justify-center p-10 shadow-lg outline outline-2 outline-black md:flex md:gap-1 lg:gap-3 xl:gap-12">
        {links.map((link, i) => {
          const text= t(`nav${i+1}`)
          
          return (
            <CircleButtons
              key={link}
              text={text}
              className={
                link === "ODALHO"
                  ? " md:mx-2 md:scale-110 lg:mx-6 lg:scale-150"
                  : "md:scale-[0.88] md:-mx-[3px] xl:scale-110"
              }
            />
          )
        })}
      </div>
    </div>
  );
};
