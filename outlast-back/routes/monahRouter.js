import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} from "../controllers/monahControllers.js";
import isValidId from "../middlewares/isValidId.js";

const monahRouter = express.Router();

monahRouter.get("/", getAllContacts);

monahRouter.get("/:id", isValidId, getOneContact);

monahRouter.delete("/:id", isValidId, deleteContact);

monahRouter.post("/", createContact);

monahRouter.put("/:id", isValidId, updateContact);

export default monahRouter;
