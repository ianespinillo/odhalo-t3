import { z } from "zod";
import type { EmailInput } from "../types";

export const EmailDTO: z.ZodType<EmailInput> = z.object({
    email: z.string().email(),
    subject: z.string(),
    message: z.string()
})