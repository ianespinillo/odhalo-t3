import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Navbar } from "../../_components/Navbar/Navbar";
import { Langs } from "@/types";
import { redirect } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { MenuLanguage } from '../../_components/menu/MenuLanguage';

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  /* if (!Object.values(Langs).includes(lang as Langs) || !lang) {
    redirect("/es");
    } */
   const messages = await getMessages()
   
  return (
    <NextIntlClientProvider messages={messages}>
      <TRPCReactProvider>
        <header className="sm:mx-4 md:pt-10 lg:mx-20">
          <Navbar lang={lang} />
        </header>
        {children}
        <footer>
          <MenuLanguage />
        </footer>
      </TRPCReactProvider>
    </NextIntlClientProvider>
  );
}
