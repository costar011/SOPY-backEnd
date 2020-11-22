import Lecture from "../../../model/Lecture";
import Student from "../../../model/Student";

export default {
  Query: {
    // Qurey 데이터 갖고오는 것 빼고는 전부 다  Mutation 이다.
    getAllStudents: async (_, args) => {
      try {
        const result = await Student.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
  Query: {
    // Qurey 데이터 갖고오는 것 빼고는 전부 다  Mutation 이다.
    getStudentByOne: async (_, args) => {
      const { name } = args;

      try {
        const result = await Student.findOne({ name }).populate({
          path: `lecture`,
          model: Lecture,
        });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },
};
