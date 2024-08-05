import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
} from "../controllers/circusControllers.js";
import isValidId from "../middlewares/isValidId.js";

const circusRouter = express.Router();

circusRouter.get("/", getAllContacts);

circusRouter.get("/:id", isValidId, getOneContact);

circusRouter.delete("/:id", isValidId, deleteContact);

circusRouter.post("/", createContact);

circusRouter.put("/:id", isValidId, updateContact);

export default circusRouter;
