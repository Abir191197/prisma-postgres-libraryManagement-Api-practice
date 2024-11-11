// validators/bookValidator.ts
import { z } from "zod";

// Define Zod schema for Book
export const BookSchemaValidator = z.object({
  body: z.object({
    title: z.string().min(1, { message: "Title is required" }).max(255, {
      message: "Title must be 255 characters or fewer",
    }),
    genre: z.string().min(1, { message: "Genre is required" }).max(100, {
      message: "Genre must be 100 characters or fewer",
    }),
    publishedYear: z
      .number()
      .int()
      .gte(1000)
      .lte(new Date().getFullYear())
      .optional(),
    totalCopies: z.number().int().gte(1),
    availableCopies: z.number().int().gte(0),
  }),
});

export type Book = z.infer<typeof BookSchemaValidator>; // Export type for use in TypeScript
