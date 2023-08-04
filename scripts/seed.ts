const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const main = async () => {
  await db.category.deleteMany();

  await db.category.createMany({
    data: [
      { name: "Famous People" },
      { name: "Movies & TV" },
      { name: "Musicians" },
      { name: "Games" },
      { name: "Animals" },
      { name: "Philosophy" },
      { name: "Scientists" },
    ],
  });
};

main()
  .catch((e) => {
    console.error("Error seeding default categories: ", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
