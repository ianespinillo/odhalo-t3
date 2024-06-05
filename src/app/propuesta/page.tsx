import React from "react";
import { CircleButtons } from "../_components/Buttons/CircleButtons";

export default function Propouse() {
  return (
    <div className="flex flex-col justify-center p-3 md:flex-row lg:p-24">
      <div className="hidden basis-1/2 items-center justify-center p-2 outline outline-2 outline-black md:flex lg:p-20">
        <CircleButtons text="ODALHO" className="sm:scale-[2.5] lg:scale-[4]" />
      </div>
      <div
        className={`bg-proposito flex h-[800px] basis-1/2 flex-col gap-5 p-4 text-center font-arial outline outline-2 outline-black`}
      >
        <div className="flex flex-col gap-6">
          <p className="pt-24 text-3xl font-medium sm:text-2xl lg:text-5xl">
            ODALHO facilita que sus obras sean de dominio público. La persona
            interesada va a poder descargar las obras de su elección de la
            página web en formato digital para luego utilizarla y aplicarla de
            la forma que lo desee. Se deberán respetar dos premisas:
          </p>
          <p className="text-3xl font-medium sm:text-2xl lg:text-5xl">
            1) Respetar la autoría (la firma de ODALHO debe figurar en la obra)
          </p>
          <p className="text-3xl font-medium sm:text-2xl lg:text-5xl">
            2) Respetar la esencia de la obra ( no se deben realizar
            modificaciones de ningún tipo en la misma)
          </p>
        </div>
      </div>
    </div>
  );
}
