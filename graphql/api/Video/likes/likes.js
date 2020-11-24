import Video from "../../../model/Video";
import User from "../../../model/User";
import mongoose, { mongo } from "mongoose";

export default {
  Mutation: {
    likesToggle: async (_, args) => {
      const { videoId, userId } = args;

      const obUserId = mongoose.Types.ObjectId(userId);

      try {
        const video = await Video.findOne({ _id: videoId }).populate({
          path: `likes`,
          model: User,
        });

        if (video.likes.length === 0) {
          console.log("안눌렀음 추가 하셈");
          video.likes.push(obUserId);
          video.save();
          return true;
        }

        await Promise.all(
          video.likes.map((data) => {
            console.log("userId:", userId);
            console.log("dataId:", data);
            if (data._id === userId) {
              // 스크립트에서는 3번을 쓴다. 2번을 쓰게되면 true로 떨어진다 왜? 데이터타입을 구분하지 않기 때문이다.
              console.log("좋아요 누름");
            } else {
              console.log("안누름 추가하셈");
              video.likes.push(obUserId);
              video.save();

              return true;
            }
          })
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
