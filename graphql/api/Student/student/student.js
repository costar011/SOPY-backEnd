import Lecture from "../../../model/Lecture";
import Student from "../../../model/Student";

export default {
  Query: {
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
