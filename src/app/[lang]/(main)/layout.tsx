import "@/styles/globals.css";
import { TRPCReactProvider } from "@/trpc/react";
import { Navbar } from "../../_components/Navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { MenuLanguage } from "../../_components/menu/MenuLanguage";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <TRPCReactProvider>
        <header className="sm:mx-4 md:pt-10 lg:mx-20">
          <MenuLanguage />
          <Navbar />
        </header>
        {children}
        <footer></footer>
      </TRPCReactProvider>
    </NextIntlClientProvider>
  );
}

export const metadata = {
  title: "Odalho",
};
