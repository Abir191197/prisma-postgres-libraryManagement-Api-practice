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



const fetchSingleBookByIdFromDB = async (id: string) => {
  try {
    // Fetch book by the provided bookId (UUID)
    const result = await prisma.book.findUniqueOrThrow({
      where: {
        bookId: id, // Use bookId for lookup, assuming it's a UUID
      },
    });

    // Return the book if found
    return result;
  } catch (error) {
    // Handle error if the book is not found
    throw new Error("Book not found or some other error occurred");
  }
};



const BookUpdatesByIdFromDB = async (id: string, bookData: any) => {
  const result = await prisma.book.update({
    where: {
      bookId: id,
    },
    data: bookData,
  });
  return result;
}

const BookDeletesByIdFromDB = async (id: string) => { 
  const result = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });
  return result;
}




export const bookService = {
  createBikeIntoDB,
  RetrievesBookFromDB,
  fetchSingleBookByIdFromDB,
  BookUpdatesByIdFromDB,
  BookDeletesByIdFromDB,
};