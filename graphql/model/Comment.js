import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    description: {
      type: String,
      required: false,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `User`,
    },
    createdAt: {
      type: String,
      required: false,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Comment`, Comment, `Comment`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
