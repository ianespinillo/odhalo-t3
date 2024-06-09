import { z } from "zod";
import { Picture } from '../types';

export const PictureDTO: z.ZodType<Picture> = z.object({
    name: z.string(),
    image: z.instanceof(File),
    chapter: z.number(),
});

export const getPicsDTO = z.object({
    page: z.number(),
    chapter: z.number()
})