import React from 'react'
import { CircleButtons } from '../_components/Buttons/CircleButtons'

export default function Proposito() {
  return (
    <div className="flex flex-col justify-center p-3 md:flex-row lg:p-24">
      <div className="hidden basis-1/2 items-center justify-center p-2 outline outline-2 outline-black md:flex lg:p-20">
        <CircleButtons text="ODALHO" className="sm:scale-[2.5] lg:scale-[4]" />
      </div>
      <div
        className={`bg-prop flex h-[800px] basis-1/2 flex-col gap-5 p-4 text-center font-arial outline outline-2 outline-black`}
      >
        <div className="flex flex-col gap-6">
          <p className="pt-24 text-3xl font-medium sm:text-2xl lg:text-5xl">
            ODALHO es una energía que fue creada con el propósito de ayudarnos a
            recordar nuestra verdadera esencia.
          </p>

          <p className="text-3xl font-medium sm:text-2xl lg:text-5xl">
            Para facilitar este proceso ODALHO ofrece palabras en formato
            digital que pretenden activar estos recuerdos a de estímulos
            visuales.
          </p>
          <p className="text-3xl font-medium sm:text-2xl lg:text-5xl">
            Si alguna obra resuena contigo, ODALHO te ofrece la posibilidad de
            poder descargarla en forma gratuita (ver "propuesta").
          </p>
        </div>
      </div>
    </div>
  )
}
