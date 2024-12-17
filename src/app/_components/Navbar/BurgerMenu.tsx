"use client";

import React, { useState } from "react";

import { Drawer } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { links } from "@/data/Links";
import { useTranslations } from "next-intl";
import { useRouter, Link } from "@/navigation";

export const BurgerMenu = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const router = useRouter();
  return (
    <div className="md:hidden">
      <CiMenuBurger
        size={40}
        onClick={() => setIsOpen(true)}
        color="black"
        className="m-3 cursor-pointer"
      />
      <Drawer open={IsOpen} onClose={() => setIsOpen(false)}>
        <div className="flex items-center justify-between text-center font-arial">
          <h1 className="p-4 text-3xl font-bold">ODALHO</h1>
          <IoMdCloseCircleOutline
            size={36}
            onClick={() => setIsOpen(false)}
            color="black"
            className="m-3 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col gap-3 p-4 font-arial">
          {links.map((link, i) => {
            const text = t(`nav${i + 1}`);
            const urlNormalized = link
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
              .toLowerCase()
              .split(" ")
              .join("-");
            return (
              <li key={link}>
                <Link
                  href={link === "ODALHO" ? "/" : urlNormalized}
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </Drawer>
    </div>
  );
};
