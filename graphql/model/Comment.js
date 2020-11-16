import mongoose from "mongoose";

const Schema = mongoose.Schema; // const <--변하지 않는다는 의미  Schema <-- 객체는 대문자로 시작함

const Comment = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `User`,
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Comment`, Comment, `Comment`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
