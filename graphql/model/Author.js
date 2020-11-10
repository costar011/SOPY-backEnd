import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const <--변하지 않는다는 의미  Schema <-- 객체는 대문자로 시작함

const Author = new Schema( // User라는 상수에 스키마를 만듬
  {
    name: {
      type: String,
      required: true,
    },
    birth: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    artList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Book`,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Author`, Author, `Author`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
