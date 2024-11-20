"use client";
import { Modal } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { Suspense, useState } from "react";
interface Props {
  code: string;
  title: string;
  image: string;
  thumbnail: string;
}

export const PictureComponent = ({ code, title, image, thumbnail }: Props) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("buttons");
  const download = async (img: string): Promise<void> => {
    try {
      const res = await fetch(img);
      const buffer = await res.arrayBuffer();
      const url = window.URL.createObjectURL(new Blob([buffer]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${code}.png`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Limpiar el elemento después de hacer clic
      window.URL.revokeObjectURL(url); // Liberar memoria
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <article className="flex flex-col md:min-h-[430px]">
      <div className="flex items-center justify-center">
        <img
          src={thumbnail}
          className="w-[300px] outline outline-1 outline-black"
          alt="preview for thumbnail"
        />
      </div>
      <div className="flex flex-col items-center gap-1.5 text-center font-semibold">
        <h3 className="font-arial text-2xl">{code}</h3>
        <h3 className="font-arial text-2xl">{title}</h3>
      </div>
      <div className="flex justify-around font-arial text-xl font-semibold">
        <button
          className="cursor-pointer bg-transparent text-blue-800"
          onClick={() => setOpen(true)}
        >
          {t("see")}
        </button>
        <button
          className="cursor-pointer bg-transparent text-blue-800"
          onClick={() => download(image)}
        >
          {t("download")}
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          className="flex items-center justify-center"
        >
          <img
            src={thumbnail}
            alt="preview for thumbnail picture"
            className="w-[500px]"
          />
        </Modal>
      </div>
    </article>
  );
};
