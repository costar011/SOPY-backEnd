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
  },
};
