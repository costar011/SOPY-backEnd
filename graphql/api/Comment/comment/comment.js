import mongoose from "mongoose";
import Comment from "../../../model/Comment";

export default {
  Mutation: {
    createComment: async (_, args) => {
      const { description, userId, videoId } = args;

      try {
        const newUserId = mongoose.Types.ObjectId(userId);

        const commentResult = await Comment.create({
          description,
          author: newUserId,
          createdAt: new Date().toString(),
        });

        console.log(commentResult);

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
