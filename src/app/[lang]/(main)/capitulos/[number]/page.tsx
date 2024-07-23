import { Pagination } from "@/app/_components/Pagination/Pagination";
import { PictureComponent } from "@/app/_components/Picture/PictureComponent";
import { intToRoman } from "@/helpers/intToRoman";
import { api } from "@/trpc/server";
import { getTranslations } from "next-intl/server";
import React, { Suspense } from "react";


interface Props {
  params: Params;
  searchParams: SearchParams;
}
interface Params {
  number: string;
  lang: string;
}
interface SearchParams {
  page: number;
}
export default async function ChapterPage({
  params: { number, lang },
  searchParams,
}: Props) {
  const chapterInfo = await api.chapters.getChapterData({
    number: Number(number),
  });
  
  const pics = await api.pictures.getPictures({
    page: Number(searchParams.page) - 1,
    chapter: Number(number),
    lang: lang ,
  });
  
  const picsNumber = await api.pictures.getPicturesNumber();
  const t = await getTranslations()

  const romanNumber = intToRoman(chapterInfo!.number);
  return (
    <div>
      <div className="flex flex-col items-center gap-2 pt-4">
        <h1 className="font-arial text-5xl font-medium">
          {t('capitulo')} {romanNumber}
        </h1>
        <h1 className="font-arial text-6xl font-semibold">
          "{t(`capitulos.caps.cap${number}`).toUpperCase()}"
        </h1>
      </div>
      <section className="mx-6 grid grid-cols-1 gap-y-5 pt-5 md:grid-cols-2 lg:grid-cols-3">
        <Suspense fallback={<div>Loading...</div>}>
          {pics.map((pic) => (
            <PictureComponent
              image={pic.imageUrl}
              title={pic.name}
              code={pic.id}
              thumbnail={pic.publicImgUrl}
              key={pic.id}
            />
          ))}
        </Suspense>
      </section>
      <Pagination number={Number(picsNumber)} />
    </div>
  );
}
