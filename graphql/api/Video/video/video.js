import Video from "../../../model/Video";
import User from "../../../model/User";
import mongoose from "mongoose";

export default {
  Mutation: {
    uploadVideo: async (_, args) => {
      const { title, description, videoPath, loginEmail } = args;

      // 데이터를 Video라는 스키마에 추가
      try {
        const uploaded = await Video.create({
          title,
          description,
          videoPath,
          loginEmail,
          hit: parseInt(0), // 무조건 정수형일 수 밖에 없다. (한번 정수로 바꿔준다.)
          createdAt: new Date().toString(),
        });

        const newObId = mongoose.Types.ObjectId(uploaded._id);

        const user = await User.findOne({ email: loginEmail });

        user.videos.push(newObId); // videos를 newObId로 push한다.
        user.save(); // User안에 save하여 추가한다.

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
      // 추가된 비디오의 _id 값을
      // 사용자의 videos안에 넣어준다.
    },
  },
};
