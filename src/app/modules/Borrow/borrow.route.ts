
import express from "express";
import { borrowController } from "./borrow.controller";
const router = express.Router();

//Create Member Adds a new member to the library./api/members
router.post(
  "/",
  borrowController.createBorrow
);

//Overdue Borrow List Endpoint: GET /api/borrow/overdue

router.get("/overdue", borrowController.overdueBorrowList);


export const BorrowRoutes = router;
