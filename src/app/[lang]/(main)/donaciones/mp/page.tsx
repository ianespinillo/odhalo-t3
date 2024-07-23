import React from "react";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { env } from "@/env";
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({
    accessToken: env.MERCADO_PAGO_ACCESS_TOKEN,
  });

export default function DonationsMP() {
    console.log(client)
  return (
    <div className="mx-10 flex flex-col gap-10">
      <h1 className="font-arial text-5xl">Donar con Mercado Pago</h1>
      <form action={donate} className="font-arial">
        <label htmlFor="name" className="flex flex-col gap-3">
          <span className="text-3xl">Ingrese su nombre:</span>
          <input
            type="text"
            name="name"
            id="name"
            className="mx-4 rounded-md border-2 border-black bg-transparent px-2 py-1.5"
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-3">
          <span className="text-3xl">Ingrese su correo:</span>
          <input
            type="email"
            name="email"
            id="email"
            className="mx-4 rounded-md border-2 border-black bg-transparent px-2 py-1.5"
          />
        </label>
        <label htmlFor="currency" className="flex flex-col gap-3">
          <span className="text-3xl">Seleccione la moneda:</span>
          <select name="currency" id="" className="mx-4 rounded-md border-2 border-black bg-transparent px-2 py-1.5">
            <option value="ARS">ARS</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
        <label htmlFor="amount" className="flex flex-col gap-3">
          <span className="text-3xl">Ingrese el monto:</span>
          <input
            type="number"
            name="amount"
            id="amount"
            className="mx-4 rounded-md border-2 border-black bg-transparent px-2 py-1.5"
          />
        </label>
        <button type="submit">Donar</button>
      </form>
    </div>
  );
}

async function donate(formData: FormData) {
    "use server";
    const preference= await new Preference(client).create({
        body:{
            items:[
                {
                    id: "1",
                    title: "Donacion",
                    quantity: 1,
                    currency_id: formData.get("currency") as string,
                    unit_price: Number(formData.get("amount") as string)
                }
            ]
        }
    })
    redirect(preference.init_point!)
}