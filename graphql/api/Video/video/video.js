import Video from "../../../model/Video";

export default {
  Query: {
    getAllVideos: async (_, args) => {
      try {
        const result = await Video.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getVideoOne: async (_, args) => {
      const { id } = args;

      try {
        const result = await Video.findOne({ _id: id });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },
  Mutation: {
    registerVideo: async (_, args) => {
      const { path, title, desc } = args;

      try {
        await Video.create({
          thumbnailPath: path,
          title,
          description: desc,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    deleteVideo: async (_, args) => {
      const { id } = args;

      try {
        await Video.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    updateVideoOne: async (_, args) => {
      const { id, path, title, desc } = args;
      try {
        await Video.updateOne(
          { _id: id },
          {
            $set: {
              thumbnailPath: path,
              title,
              description: desc,
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
