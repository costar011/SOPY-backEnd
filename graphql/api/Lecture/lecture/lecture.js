import Lecture from "../../../model/Lecture";

export default {
  Query: {
    // Qurey 데이터 갖고오는 것 빼고는 전부 다  Mutation 이다.
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
