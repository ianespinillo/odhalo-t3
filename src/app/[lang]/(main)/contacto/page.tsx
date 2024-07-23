import { EmailInput } from "@/server/types";
import { api } from "@/trpc/server";
import { useTranslations } from "next-intl";
import React from "react";

export default function Contact() {
  const t = useTranslations("contacto");
  return (
    <div className="mx-10 flex flex-col items-center justify-center gap-14 py-7">
      <h1 className="font-arial text-5xl">{t("title")}</h1>
      <form
        action={sendEmail}
        className="flex w-[40vw] flex-col gap-4 rounded-xl p-4 px-8 outline outline-black"
      >
        <label htmlFor="email" className="flex flex-col gap-3">
          <span className="font-arial text-xl">{t("form.mail")}:</span>{" "}
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-md border-2 border-black bg-transparent px-2 py-1.5 placeholder:text-black placeholder:font-arial"
            placeholder="example@example.com"
          />
        </label>
        <label htmlFor="subject" className="flex flex-col gap-3">
          <span className="font-arial text-xl">{t("form.subject")}:</span>{" "}
          <input
            type="text"
            name="subject"
            id="subject"
            className="rounded-md border-2 border-black bg-transparent px-2 py-1.5 placeholder:text-black"
          />
        </label>
        <label htmlFor="message" className="flex flex-col gap-3">
          <span className="font-arial text-xl">{t("form.message")}:</span>{" "}
          <textarea
            name="message"
            id="message"
            rows={5}
            className="rounded-md border-2 border-black bg-transparent px-2 py-1.5 placeholder:text-black"
          />
        </label>
        <button
          type="submit"
          className="cursor-pointer rounded-md border-2 border-black bg-black px-2 py-1.5 font-arial text-white duration-300 hover:bg-transparent hover:text-black"
        >
          {t("form.send")}
        </button>
      </form>
    </div>
  );
}

async function sendEmail(formData: FormData) {
  "use server";
  const data: EmailInput = {
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    subject: formData.get("subject") as string,
  };
  api.nodemailer.sendEmail(data);
}
