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
};
