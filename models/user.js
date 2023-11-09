import { Schema, model } from "mongoose";
import { handleSaveError, handleUpdateValidate } from "./hooks.js";
import { emailRegexp } from "../constants/userConstants.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findOneAndApdate", handleUpdateValidate);
userSchema.post("save", handleSaveError);
userSchema.post("findOneAndApdate", handleSaveError);

const User = model("user", userSchema);
export default User;
