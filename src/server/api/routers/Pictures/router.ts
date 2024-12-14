import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../trpc";
import {
  getPicByIdDTO,
  getPicsDTO,
  PictureDTO,
  updatePictureDTO,
} from "../../../dtos/picture.dto";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { mkdir, unlink, writeFile } from "fs/promises";
import { db } from "@/server/db";
import sharp from "sharp";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const PicturesRouter = createTRPCRouter({
  uploadPicture: protectedProcedure
  .input(PictureDTO)
  .mutation(async ({ ctx, input }) => {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    try {
      const buffer = Buffer.from(await input.image.arrayBuffer());

      // Subir la imagen original
      const uploadToCloudinary = (buffer: Buffer, folder: string): Promise<any> => {
        return new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );
          uploadStream.end(buffer);
        });
      };

      const res = await uploadToCloudinary(buffer, "ODALHO");

      // Crear una versión comprimida con Sharp y subirla
      const compressedBuffer = await sharp(buffer).resize(500).toBuffer();
      const compressedRes = await uploadToCloudinary(
        compressedBuffer,
        "ODALHO/thumbnails"
      );

      // Guardar información en la base de datos
      await ctx.db.picture.create({
        data: {
          id: input.code,
          name: input.title,
          imageUrl: res.secure_url,
          publicImgUrl: compressedRes.secure_url,
          chapterNumber: input.chapter,
        },
      });

      return { ok: true };
    } catch (error) {
      console.error(error);
      return { error: true };
    }
  }),
  getPictures: publicProcedure
    .input(getPicsDTO)
    .query(async ({ input, ctx }) => {
      return await db.picture.findMany({
        take: 6,
        skip: input.page * 6,
        where: {
          chapterNumber: input.chapter,
        },
      });
    }),
  getPicturesNumber: publicProcedure.query(
    async () => await db.picture.count(),
  ),
  getAllPictures: protectedProcedure.query(
    async () => await db.picture.findMany(),
  ),
  getPictureById: protectedProcedure
    .input(getPicByIdDTO)
    .query(async ({ input }) => {
      return await db.picture.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  deletePicture: protectedProcedure
    .input(getPicByIdDTO)
    .mutation(async ({ input }) => {
      await db.$transaction(async(tx) => {
        const picture = await tx.picture.findUnique({
          where: {
            id: input.id
          }
        })
        cloudinary.config({
          cloud_name: process.env.CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        const ids={
          image: picture!.imageUrl.split("/").slice(-1)[0]?.split(".")[0],
          thumbnail: picture!.publicImgUrl
            .split("/")
            .slice(-1)[0]
            ?.split(".")[0],
        }
        await cloudinary.uploader.destroy("ODALHO/" + ids.image!)
        await cloudinary.uploader.destroy("ODALHO/thumbnails/" + ids.thumbnail!)
        await tx.picture.delete({
          where: {
            id: input.id
          }
        })
      })
      revalidatePath("/admin/obras");
    }),
  updatePicture: protectedProcedure
    .input(updatePictureDTO)
    .mutation(async ({ ctx, input }) => {
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      if (input.image?.size! > 0) {
        const urls = await ctx.db.picture.findUnique({
          where: {
            id: input.code,
          },
          select: {
            imageUrl: true,
            publicImgUrl: true,
          },
        });
        try {
          const ids = {
            image: urls!.imageUrl.split("/").slice(-1)[0]?.split(".")[0],
            thumbnail: urls!.publicImgUrl
              .split("/")
              .slice(-1)[0]
              ?.split(".")[0],
          };
          await cloudinary.uploader.destroy("ODALHO/" + ids.image!);
          await cloudinary.uploader.destroy(
            "ODALHO/thumbnails/" + ids.thumbnail!,
          );
        } catch (error) {
          console.log(error);
          throw new Error("Error al borrar las anteriores imagenes");
        }
        try {
          const buffer = Buffer.from(await input.image!.arrayBuffer());
          const tempDir = path.join(process.cwd(), "temp");
          const tempFilePath = path.join(tempDir, input.image!.name);
          await mkdir(tempDir, { recursive: true });
          await writeFile(tempFilePath, buffer);
          const res = await cloudinary.uploader.upload(tempFilePath, {
            folder: "ODALHO",
          });
          await unlink(tempFilePath);
          try {
            const compressedBuffer = await sharp(buffer).resize(500).toBuffer();
            const compressedTempFilePath = path.join(
              tempDir,
              `${input.code}-compressed.jpg`,
            );
            await writeFile(compressedTempFilePath, compressedBuffer);
            const compressedRes = await cloudinary.uploader.upload(
              compressedTempFilePath,
              {
                folder: "ODALHO/thumbnails",
              },
            );
            await ctx.db.picture.update({
              where: {
                id: input.oldCode,
              },
              data: {
                id: input.code,
                name: input.title,
                imageUrl: res.secure_url,
                publicImgUrl: compressedRes.secure_url,
                chapterNumber: input.chapter,
              },
            });
            await unlink(compressedTempFilePath);
          } catch (error) {
            console.log(error);
            return {
              error: true,
            };
          }
        } catch (error) {
          console.log(error);
          return {
            error: true,
          };
        }
      } else {
        await ctx.db.picture.update({
          where: {
            id: input.oldCode,
          },
          data: {
            id: input.code,
            name: input.title,
            chapterNumber: input.chapter,
          },
        });
      }
    }),
});
