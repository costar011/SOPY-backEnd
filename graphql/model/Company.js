import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Company = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },

    snackList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Snack`,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Company`, Company, `Company`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
