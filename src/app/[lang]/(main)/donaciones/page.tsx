import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Donations() {
  const t= useTranslations('donaciones')
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-10 pt-8">
      <h3 className="text-center font-arial text-5xl font-semibold">
        {t('text1')}
      </h3>
      <div className="flex gap-16">
        <Link href='donaciones/mp' className="border-2 border-black">
          <Image
            width={200}
            height={200}
            className="bg-white"
            src="/mp.svg"
            alt="mp"
          />
        </Link>
        <Link href="https://paypal.me/iangamerps3" className="border-2 border-black flex justify-center items-center bg-white p-3">
          <Image
            width={200}
            height={200}
            className="bg-white"
            src="/paypal.svg"
            alt="paypal"
          />
        </Link>
      </div>
      <h3 className="text-center font-arial text-5xl font-semibold">
        {t("text2")}
      </h3>
    </div>
  );
}
