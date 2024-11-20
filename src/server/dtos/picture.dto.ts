import { z } from "zod";
import type { Picture, UpdatePicture } from '../types';
import { Langs } from "@/types";

export const PictureDTO: z.ZodType<Picture> = z.object({
    title: z.string(),
    image: z.instanceof(File),
    chapter: z.number(),
    code: z.string()
});

export const getPicsDTO = z.object({
    page: z.number(),
    chapter: z.number(),
    lang: z.string().refine(x => x in Langs, {
        message: "invalid language",
    }),
})

export const getPicByIdDTO = z.object({
    id: z.string()
});

export const updatePictureDTO: z.ZodType<UpdatePicture> = z.object({
    code: z.string(),
    oldCode: z.string(),
    title: z.string(),
    chapter: z.number(),
    image: z.instanceof(File).optional()
})