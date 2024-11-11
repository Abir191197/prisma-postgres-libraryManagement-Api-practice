"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBikeIntoDB = async (BookData) => {
    const result = await prisma.book.create({
        data: BookData,
    });
    return result;
};
const RetrievesBookFromDB = async () => {
    const result = await prisma.book.findMany({});
    return result;
};
const fetchSingleBookByIdFromDB = async (id) => {
    const result = await prisma.book.findUnique({
        where: {
            bookId: id,
        },
    });
    return result;
};
exports.bookService = {
    createBikeIntoDB,
    RetrievesBookFromDB,
    fetchSingleBookByIdFromDB,
};
