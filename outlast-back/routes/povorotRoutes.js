import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} from "../controllers/povorotControllers.js";
import isValidId from "../middlewares/isValidId.js";

const povorotRouter = express.Router();

povorotRouter.get("/", getAllContacts);

povorotRouter.get("/:id", isValidId, getOneContact);

povorotRouter.delete("/:id", isValidId, deleteContact);

povorotRouter.post("/", createContact);

povorotRouter.put("/:id", isValidId, updateContact);

export default povorotRouter;
