// routes/bookRoutes.ts
import express from "express";
import { bookController } from "./book.controller";
import { BookSchemaValidator } from "./book.validation";
import validateRequest from "../../middlewares/validRequestZod";

const router = express.Router();

//  Creates a new book record in the library’s database.Endpoint: POST /api/books
router.post(
  "/",
  validateRequest(BookSchemaValidator),
  bookController.createBook
);

//Retrieves a list of all books in the library. Endpoint: GET /api/books
router.get("/", bookController.RetrievesBook);


export const BookRoutes = router;
