import express from "express";
import validateRequest from "../../middlewares/validRequestZod";
import { MemberSchemaValidator } from "./member.validation";
import { memberController } from "./member.controller";

const router = express.Router();

//Create Member Adds a new member to the library./api/members
router.post(
  "/",
  validateRequest(MemberSchemaValidator),
  memberController.createMember
);


//Read All Members Retrieves a list of all members in the library.Endpoint: GET /api/members

router.get("/", memberController.RetrievesAllMembers);

//GET /api/members/:memberId
router.get("/:memberId", memberController.fetchSingleMemberById);

//Update Member Updates information for a specific member by their memberId.Endpoint: PUT /api/members/:memberId

router.put("/:memberId", memberController.MemberUpdatesById);

//Delete Member Deletes a member from the library by their memberId. Endpoint: DELETE /api/members/:memberId

router.delete("/:memberId", memberController.MemberDeletesById);

export const MemberRoutes = router;
