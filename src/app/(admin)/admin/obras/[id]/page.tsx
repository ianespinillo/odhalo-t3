import { PostData } from "@/app/_components/Forms/PostData";
import { api } from "@/trpc/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function Edit({ params }: { params: { id: string } }) {
  const picture = await api.pictures.getPictureById({ id: params.id });
  const chapters = await api.chapters.getChapters();
  const fn = async (formData: FormData) => {
    "use server";
    const form = {
      code: formData.get("code") as string,
      title: formData.get("title") as string,
      chapter: Number(formData.get("chapter")),
      image: formData.get("file") as File,
      oldCode: params.id,
    };
    const req = await api.pictures.updatePicture(form);
    if (!req?.error) {
      redirect("/admin/obras");
    }
  };
  return (
    <PostData
      fn={fn}
      chapters={chapters}
      defaultValue={{
        code: picture!.id,
        title: picture!.name,
        chapter: picture!.chapterNumber,
        hasImage: !!picture!.imageUrl,
      }}
    />
  );
}
