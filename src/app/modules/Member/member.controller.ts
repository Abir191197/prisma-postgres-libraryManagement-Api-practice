import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { memberService } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const memberData = req.body; // Get the book data from the request body

  // Call the service to create the book in the database
  const result = await memberService.createMemberIntoDB(memberData);

  // Send response with success
  sendResponse(res, {
    statusCode: StatusCodes.CREATED, // Use CREATED (201) status code for successful creation
    success: true,
    message: "Member created successfully ",
    data: result,
  });
});

const RetrievesAllMembers = catchAsync(async (req, res) => {
  const result = await memberService.RetrievesAllMembersFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

const fetchSingleMemberById = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberService.fetchSingleMemberByIdFromDB(memberId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});
const MemberUpdatesById = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const memberData = req.body;
  const result = await memberService.MemberUpdatesByIdFromDB(memberId, memberData);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
})


const MemberDeletesById = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberService.MemberDeletesByIdFromDB(memberId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member deleted successfully",
    data: result,
  });
})

export const memberController = {
  createMember,
  RetrievesAllMembers,
  fetchSingleMemberById,
  MemberUpdatesById,
  MemberDeletesById,
};
