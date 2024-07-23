import { db } from "@/server/db";
import { chapters } from "./fixtures/chapters";

async function main() {
  /* for(let c of chapters) {
        await db.chapters.create({data: {
            name: c.text,
            number: c.chapter
        }})
    } */
  await db.user.create({
    data: {
      name: "admin",
      email: "admin2@test.com",
      password: "admin",
    },
  });
}

main()
  .then(() => console.log("db seeded successfully"))
  .catch((err) => console.log(err));
