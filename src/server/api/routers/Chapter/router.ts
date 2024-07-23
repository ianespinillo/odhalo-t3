import { createTRPCRouter, publicProcedure } from '../../trpc';
import { ChapterDTO } from '../../../dtos/chapter.dto';
import { db } from '../../../db';
export const ChapterRouter= createTRPCRouter({
    getChapterData: publicProcedure.input(ChapterDTO).query(async ({input})=>{
        return await db.chapters.findUnique({
            where:{
                number:input.number
            }
        })
    }),
    getChapters: publicProcedure.query(async() => await db.chapters.findMany())
})