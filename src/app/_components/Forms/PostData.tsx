import React from "react";
import { InputFileBtn } from "../Buttons/InputFileBtn";

interface Props {
  fn: (data: FormData) => void;
  chapters: { number: number; name: string }[];
  defaultValue?: {
    code: string;
    title: string;
    chapter: number;
    hasImage: boolean;
  };
}

export const PostData = ({ fn, chapters, defaultValue }: Props) => {
  return (
    <div className="flex w-full items-center justify-center">
      <form action={fn} className="rounded-lg bg-white p-4 font-arial">
        <label htmlFor="code" className="flex flex-col gap-3 text-xl">
          Código de la obra
          <input
            type="text"
            name="code"
            id="code"
            className="w-full rounded-md border-2 border-black bg-transparent px-2 py-1.5"
            defaultValue={defaultValue?.code}
          />
        </label>
        <label htmlFor="title" className="flex flex-col gap-3 text-xl">
          Título de la obra
          <input
            type="text"
            name="title"
            id="title"
            className="w-full rounded-md border-2 border-black bg-transparent px-2 py-1.5"
            defaultValue={defaultValue?.title}
          />
        </label>
        <label htmlFor="chapter" className="flex flex-col gap-3 text-xl">
          Capítulo de la obra
          <select
            name="chapter"
            id="chapter"
            className="w-full rounded-md border-2 border-black bg-transparent px-2 py-1.5 text-lg"
          >
            {chapters.map((chapter) => (
              <option
                key={chapter.number}
                value={chapter.number}
                {...(defaultValue?.chapter === chapter.number
                  ? { selected: true }
                  : {})}
              >
                {chapter.number} - {chapter.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="file" className="flex flex-col py-2 text-xl">
          Archivo de la obra
          <InputFileBtn />
        </label>
        <button
          type="submit"
          className="w-full rounded-md bg-black py-2 text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};
