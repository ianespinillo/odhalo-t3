import React from "react";
import { CircleButtons } from "../../../_components/Buttons/CircleButtons";
import { ChaptersGrid } from "../../../_components/Grid/ChaptersGrid";
import { useTranslations } from "next-intl";

export default function Chapters() {
  
  const t = useTranslations("capitulos");
  return (
    <div className="mx-3 my-2 flex flex-col lg:mx-20 lg:flex-row">
      <div className="relative basis-1/2 outline outline-2 outline-black">
        <div className="lg:bg-ciclico div-1 hidden items-center justify-center lg:flex">
          <CircleButtons
            text="ODALHO"
            className="sm:scale-[2.5] lg:scale-[4] xl:scale-[5]"
          />
        </div>
        <div className="bg-chapters-text lg:bg-ciclico lg:div-2 flex min-h-[50vh] items-center justify-center">
          <p className="p-3 text-center font-arial text-xl italic !leading-tight md:text-4xl lg:text-4xl">
            {t("text1")}
          </p>
        </div>
      </div>
      <div className=" bg-chapters basis-1/2 outline outline-2 outline-black">
        <ChaptersGrid />
      </div>
    </div>
  );
}
