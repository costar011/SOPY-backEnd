import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const <--변하지 않는다는 의미  Schema <-- 객체는 대문자로 시작함

const User = new Schema( // User라는 상수에 스키마를 만듬
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    secretCode: {
      type: String,
      required: false,
    },
    createdAt: {
      type: String,
      required: true,
    },
    videos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Video`,
      },
    ],
  },
  { versionKey: false }
);

export default mongoose.model(`User`, User, `User`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
