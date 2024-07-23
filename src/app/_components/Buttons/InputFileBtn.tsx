"use client";
import { bytesToMB } from "@/helpers/bytesToMB";
import { Button } from "@mui/material";
import React, { useRef, useState } from "react";

export const InputFileBtn = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>();
  return (
    <>
      <input
        type="file"
        id="fileInput"
        ref={ref}
        name="file"
        onChange={({ target }) => setFile(target.files?.[0])}
        className="hidden"
      />
      {file ? (
        <Button onClick={() => ref.current?.click()} variant="contained">
          Cambiar obra
        </Button>
      ) : (
        <Button onClick={() => ref.current?.click()} variant="contained">
          Seleccionar obra
        </Button>
      )}
      {file ? (
        <>
          <p className="text-xs">{file.name}</p>
          <p className="text-xs">{bytesToMB(file.size).toFixed(2)} MB</p>
        </>
      ) : (
        <p className="text-xs">No hay archivo seleccionado</p>
      )}
    </>
  );
};
