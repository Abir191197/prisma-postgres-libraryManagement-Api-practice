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


//Fetches details of a specific book by its bookId.  Endpoint: GET /api/books/:bookId

router.get("/:bookId", bookController.fetchSingleBookById);

//Update BookUpdates information of an existing book by its bookId. Endpoint: PUT /api/books/:bookId

router.put("/:bookId", bookController.BookUpdatesById);


//Delete BookDeletes a book from the library by its bookId.Endpoint: DELETE /api/books/:bookId

router.delete("/:bookId", bookController.BookDeletesById);


export const BookRoutes = router;
