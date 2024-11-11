import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const createBikeIntoDB = async (BookData: any) => {
  const result = await prisma.book.create({
    data: BookData,
  });
  return result;
};

const RetrievesBookFromDB = async () => {
  const result = await prisma.book.findMany({});
  return result;
};



export const bookService = { createBikeIntoDB, RetrievesBookFromDB };