import { z } from "zod";
import { Chapter } from '../types';

export const ChapterDTO: z.ZodType<Chapter> = z.object({
    number: z.number()
})