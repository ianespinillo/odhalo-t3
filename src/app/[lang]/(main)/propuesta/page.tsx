import React from "react";
import { CircleButtons } from "../../../_components/Buttons/CircleButtons";
import { useTranslations } from "next-intl";

export default function Propouse() {
  const t= useTranslations('propuesta')
  return (
    <div className="flex flex-col justify-center p-3 md:flex-row lg:p-24">
      <div className="hidden basis-1/2 items-center justify-center p-2 outline outline-2 outline-black md:flex lg:p-20">
        <CircleButtons text="ODALHO" className="sm:scale-[2.5] lg:scale-[4]" />
      </div>
      <div
        className={`bg-proposito flex h-[800px] basis-1/2 flex-col gap-5 p-4 text-center font-arial outline outline-2 outline-black`}
      >
        <div className="flex flex-col gap-6">
          <p className="pt-24 text-3xl font-medium sm:text-2xl lg:text-4xl">
            {t('text')}
          </p>
          <p className="text-3xl font-medium sm:text-2xl lg:text-4xl">
            1) {t('item1')}
          </p>
          <p className="text-3xl font-medium sm:text-2xl lg:text-4xl">
            2) {t('item2')}
          </p>
        </div>
      </div>
    </div>
  );
}
