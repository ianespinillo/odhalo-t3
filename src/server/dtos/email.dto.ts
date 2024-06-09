import { z } from "zod";
import { EmailInput } from "../types";

export const EmailDTO: z.ZodType<EmailInput> = z.object({
    email: z.string().email(),
    subject: z.string(),
    message: z.string()
})