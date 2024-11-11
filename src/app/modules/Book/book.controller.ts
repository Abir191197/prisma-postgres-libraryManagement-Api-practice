import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookService } from "./book.service";



// Create a new book
const createBook = catchAsync(async (req, res) => {
  const bookData = req.body; // Get the book data from the request body

  // Call the service to create the book in the database
  const result = await bookService.createBikeIntoDB(bookData);

  // Send response with success
  sendResponse(res, {
    statusCode: StatusCodes.CREATED, // Use CREATED (201) status code for successful creation
    success: true,
    message: "Book created successfully",
    data: result,
  });
});


const RetrievesBook = catchAsync(async (req, res) => {
  const result = await bookService.RetrievesBookFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});


export const bookController = {
  createBook,
  RetrievesBook,
};
