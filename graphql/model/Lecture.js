import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Lecture = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    lv: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    pay: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Lecture`, Lecture, `Lecture`);
