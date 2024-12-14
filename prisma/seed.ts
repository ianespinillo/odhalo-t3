import { db } from "@/server/db";
import { chapters } from "./fixtures/chapters";
import { hashPassword } from "@/helpers/password-adapter";

async function main() {
  /* for(let c of chapters) {
        await db.chapters.create({data: {
            name: c.text,
            number: c.chapter
        }})
    } */
  await db.user.create({
    data: {
      name: "Cristian",
      email: "cristianjonin@gmail.com",
      password: await hashPassword("odalho2022"),
    },
  });
}

main()
  .then(() => console.log("db seeded successfully"))
  .catch((err) => console.log(err));
