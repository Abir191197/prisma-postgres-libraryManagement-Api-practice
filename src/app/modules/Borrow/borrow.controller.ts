import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { borrowService } from "./borrow.service";

const createBorrow = catchAsync(async (req, res) => {
  const borrowData = req.body; // Get the book data from the request body

  // Call the service to create the book in the database
  const result = await borrowService.createBorrowIntoDB(borrowData);

  // Send response with success
  sendResponse(res, {
    statusCode: StatusCodes.CREATED, // Use CREATED (201) status code for successful creation
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

const overdueBorrowList = catchAsync(async (req, res) => {
  // Fetch overdue borrow list from the service
  const result = await borrowService.overdueBorrowListFromDB();

  // Check if there are any overdue books
  if (result.length === 0) {
    return sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "No overdue books",
      data: result, // Return empty array
    });
  }

  // Send response with overdue books
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Overdue borrow list fetched successfully",
    data: result,
  });
});

export const borrowController = {
  createBorrow,
  overdueBorrowList,
};
