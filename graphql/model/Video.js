import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Video = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoPath: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    hit: {
      type: Number,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `User`,
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Comment`,
      },
    ],
  },
  { versionKey: false }
);

export default mongoose.model(`Video`, Video, `Video`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
