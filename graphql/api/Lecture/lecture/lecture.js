import Lecture from "../../../model/Lecture";

export default {
  Query: {
    getAllLecture: async (_, args) => {
      try {
        const result = await Lecture.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
