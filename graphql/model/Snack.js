import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const <--변하지 않는다는 의미  Schema <-- 객체는 대문자로 시작함

const Snack = new Schema( // User라는 상수에 스키마를 만듬
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Snack`, Snack, `Snack`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
