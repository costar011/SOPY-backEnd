import mongoose from "mongoose";
import Lecture from "../api/Lecture/lecture/lecture";

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
    mobile: {
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
    lecture: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Lecture`,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Student`, Student, `Student`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
