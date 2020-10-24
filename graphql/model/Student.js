import mongoose from "mongoose";
import student from "../api/Student/student/student";

const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    moblie: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Student`, Student, `Student`);
