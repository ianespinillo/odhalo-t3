import { createTRPCRouter, protectedProcedure, publicProcedure } from '../../trpc';
import { getPicsDTO, PictureDTO } from '../../../dtos/picture.dto';
import {v2 as cloudinary} from 'cloudinary'
import path from 'path';
import { writeFile } from 'fs/promises';
import { db } from '@/server/db';

export const PicturesRouter = createTRPCRouter({
    uploadPicture: protectedProcedure.input(PictureDTO).mutation(async ({ctx, input}) => {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        })
        const buffer = Buffer.from(await input.image.arrayBuffer())
        const filePath = path.join(process.cwd(),"public", input.image.name);
        await writeFile(filePath, buffer);
        const res = await cloudinary.uploader.upload(filePath, {
            folder: 'ODALHO'
        })
        db.picture.create({
            data:{
                name: input.name,
                imageUrl: res.secure_url,
                chapterNumber: input.chapter
            }
        })
    }),
    getPictures: publicProcedure.input(getPicsDTO).query(async({input}) => {
        return await db.picture.findMany({
            take: 6,
            skip: input.page * 6,
            where:{
                chapterNumber: input.chapter
            }
        })
    })
})