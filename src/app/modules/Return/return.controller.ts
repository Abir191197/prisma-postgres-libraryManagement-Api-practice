import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import {  returnService } from "./return.service";

const returnBook = catchAsync(async (req, res) => {
  const borrowId = req.body; // Get the book data from the request body

  // Call the service to create the book in the database
  const result = await returnService.returnBookFromDB(borrowId);

  // Send response with success
  sendResponse(res, {
    statusCode: StatusCodes.CREATED, // Use CREATED (201) status code for successful creation
    success: true,
    message: "Book returned successfully",
   
  });
});


export const returnController = {
  returnBook,
};
