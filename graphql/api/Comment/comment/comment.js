import Comment from "../../../model/Comment";
import User from "../../../model/User";
import Video from "../../../model/Video";
import mongoose from "mongoose";

// comment --> 댓글 이라는 녀석이 있는데
// 사용자는 어디에 댓글을 다느냐? -> 비디오에다가 댓글을 다는 것 이다.
// 비디오에 댓글이 추가가 되면서 사용자에게도 같이 추가가 되어야한다.
// 내가 쓴 댓글을 전체적으로 볼 수 있어야하기 때문이다.

export default {
  Query: {
    // Qurey 데이터 갖고오는 것 빼고는 전부 다  Mutation 이다.
    viewComments: async (_, args) => {
      const { videoId } = args;

      try {
        const result = await Video.findOne({ _id: videoId }).populate({
          path: `comments`,
          model: Comment,
          populate: {
            path: `author`,
            model: User,
          },
        });

        console.log(result);

        return result.comments;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
  Mutation: {
    // updata , delete 는 query가 아니기 때문에 Mutation으로 가야함.
    createComment: async (_, args) => {
      const { description, userId, videoId } = args;

      try {
        const newUserId = mongoose.Types.ObjectId(userId);

        const commentResult = await Comment.create({
          description,
          author: newUserId,
          createdAt: new Date().toString(),
        });

        const newCommentId = mongoose.Types.ObjectId(commentResult._id);

        const parentVideo = await Video.findOne({ _id: videoId });
        parentVideo.comments.push(newCommentId);
        parentVideo.save();

        const parentUser = await User.findOne({ _id: userId });
        parentUser.comments.push(newCommentId);
        parentUser.save();

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    deleteComment: async (_, args) => {
      const { id } = args;

      try {
        const result = await Comment.deleteOne({ _id: id });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    updateComment: async (_, args) => {
      const { id, description } = args;

      try {
        const result = await Comment.updateOne(
          { _id: id },
          {
            $set: {
              description,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};

// 댓글을 추가 하고나서
// -> 비디오에 추가
// -> 유저에 추가 해주는데 이걸 왜하는 것 인가??
// 사용자가 글을 입력하면 comment를 만든다.
// 그러면은 그 녀석의 id가 있을 것 이다 이 id를 비디오랑 유저한테 주는 것 이다.
// 비디오에 주는 이유는? 비디오 볼 떄 밑에 댓글이 보이기 떄문이다.
// 유저한테 주는 이유는? 이 유저가 사용하는 댓글을 한번에 볼 수 있어야하니까.
