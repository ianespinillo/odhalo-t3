import React from "react";
import {MercadoPagoConfig} from 'mercadopago';
import { env } from "@/env";


export default function Donations() {
  const client= new MercadoPagoConfig({accessToken: env.MERCADO_PAGO_ACCESS_TOKEN})
  return (
    <div className="flex flex-col items-center justify-center px-10 pt-8 gap-12">
      <h3 className="text-5xl font-arial font-semibold text-center">
        Si desea colaborar con la obra de ODALHO, usted puede hacerlo a través
        de los siguientes medios:
      </h3>
      <div className="flex gap-16"></div>
      <h3 className="text-5xl font-arial font-semibold text-center">
        ODALHO agradece mucho su donación. Esto facilita que el proyecto pueda
        continuar plasmándose y difundiéndose en el mundo material.
      </h3>
    </div>
  );
}
