import React from "react";
import { CircleButtons } from "../_components/Buttons/CircleButtons";
import { ChaptersGrid } from "../_components/Grid/ChaptersGrid";

export default function Chapters() {
  return (
    <div className="mx-3 my-2 flex flex-col lg:mx-11 lg:flex-row">
      <div className="relative outline outline-2 outline-black basis-1/2">
        <div className="lg:bg-ciclico div-1 hidden items-center justify-center lg:flex">
          <CircleButtons text="ODALHO" className="sm:scale-[2.5] lg:scale-[4]" />
        </div>
        <div className="bg-chapters-text lg:bg-ciclico lg:div-2 flex items-center justify-center min-h-[50vh]">
          <p className="p-3 text-center text-xl font-arial italic !leading-tight md:text-4xl">
            La obra de ODALHO se estructura en seis capítulos y cada capítulo
            corresponde a una letra de su nombre. Origen estelar, Dualidad,
            Activación, Liberación, Humanización y Omniexistencia. La energía de
            ODALHO es dinámica y se expande continuamente, y cuando se complete
            la última obra correspondiente a la última letra de su nombre,
            ODALHO habrá cumplido su propósito.
          </p>
        </div>
      </div>
      <div className=" outline outline-2 outline-black basis-1/2">
        <ChaptersGrid />
      </div>
    </div>
  );
}
