import React from 'react'
import { CircleButtons } from '../../../_components/Buttons/CircleButtons'
import { useTranslations } from 'next-intl'

export default function Proposito() {
  const t = useTranslations('proposito')
  return (
    <div className="flex flex-col justify-center p-3 md:flex-row lg:p-24">
      <div className="hidden basis-1/2 items-center justify-center p-2 outline outline-2 outline-black md:flex lg:p-20">
        <CircleButtons text="ODALHO" className="sm:scale-[2.5] lg:scale-[4]" />
      </div>
      <div
        className={`bg-prop flex h-[800px] basis-1/2 flex-col gap-5 px-4 text-center font-arial italic outline outline-2 outline-black justify-center`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-medium sm:text-2xl lg:text-4xl">
            {t('text1')}
          </p>

          <p className="text-2xl font-medium sm:text-2xl lg:text-4xl">
            {t('text2')}
          </p>
          <p className="text-2xl font-medium sm:text-2xl lg:text-4xl">
            {t('text3')}
          </p>
        </div>
      </div>
    </div>
  )
}
