"use server"

import { api } from "@/trpc/server"
import { cookies } from "next/headers"

export async function deleteById(id: string) {
    await api.pictures.deletePicture({ id })
}