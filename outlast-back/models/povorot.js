import { Schema, model } from "mongoose";
import handleSaveError from "./hooks.js";
import { runValidatorAtUpdate } from "./hooks.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    reserved: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    players: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleSaveError);

contactSchema.pre("findOneAndUpdate", runValidatorAtUpdate);

const Povorot = model("povorot", contactSchema);

export default Povorot;
