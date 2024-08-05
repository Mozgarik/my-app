import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} from "../controllers/pikaControllers.js";
import isValidId from "../middlewares/isValidId.js";

const pikaRouter = express.Router();

pikaRouter.get("/", getAllContacts);

pikaRouter.get("/:id", isValidId, getOneContact);

pikaRouter.delete("/:id", isValidId, deleteContact);

pikaRouter.post("/", createContact);

pikaRouter.put("/:id", isValidId, updateContact);

export default pikaRouter;
