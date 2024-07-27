import { db } from "@/server/db";
import { chapters } from "./fixtures/chapters";
import { hashPassword } from "@/helpers/password-adapter";

async function main() {
  for(let c of chapters) {
        await db.chapters.create({data: {
            name: c.text,
            number: c.chapter
        }})
    }
  await db.user.create({
    data: {
      name: "admin",
      email: "admin4@test.com",
      password: await hashPassword("admin1234"),
    },
  });
}

main()
  .then(() => console.log("db seeded successfully"))
  .catch((err) => console.log(err));
