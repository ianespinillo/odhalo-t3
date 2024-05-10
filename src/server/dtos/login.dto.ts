import { z } from "zod";
import { Login } from "../types";

export const loginDTO: z.ZodType<Login>= z.object({
    email: z.string().email(),
    password: z.string().min(8)
})