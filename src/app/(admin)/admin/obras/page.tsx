import { ManageTable } from "@/app/_components/Table/ManageTable";
import { api } from "@/trpc/server";
import Link from "next/link";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default async function Obras() {
  const data = await api.pictures.getAllPictures();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <h1 className="pb-8 text-center font-arial text-5xl">Obras</h1>
      <div className="flex justify-end">
        <Link
          href="/admin/obras/add"
          className="flex cursor-pointer items-center rounded-lg bg-black px-2 py-3 font-arial text-2xl text-white"
        >
          Añadir obra
          <AddCircleOutlineIcon />
        </Link>
      </div>
      <ManageTable
        colsName={["Código de obra", "Título", "N° Capítulo", "Acciones"]}
        data={data.map((p) => ({
          id: p.id,
          col2: p.name,
          col3: String(p.chapterNumber),
          col4: p.id,
        }))}
      />
    </div>
  );
}
