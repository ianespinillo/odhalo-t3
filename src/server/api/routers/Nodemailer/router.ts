import { EmailDTO } from "@/server/dtos/email.dto";
import { createTRPCRouter, publicProcedure } from "../../trpc";
import { transporter } from "@/utils/nodemailer";


export const NodemailerRouter= createTRPCRouter({
    sendEmail: publicProcedure.input(EmailDTO).query(({input})=>{
        transporter.sendMail({
            from: input.email,
            to: 'odalho.digital@gmail.com',
            text: input.message,
            subject: input.subject
        })
        .then(()=>'Mail sent successfully')
        .catch(err => console.log(err))
    })
    
})