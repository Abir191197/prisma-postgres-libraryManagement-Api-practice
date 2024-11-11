
import express from "express";
import { returnController } from "./return.controller";

const router = express.Router();

//Create Member Adds a new member to the library./api/members
router.post(
  "/",
  returnController.returnBook
);



export const returnRoutes = router;
