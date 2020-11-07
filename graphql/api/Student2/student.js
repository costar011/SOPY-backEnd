import Lecture from "../../model/Lecture";
import Student from "../../model/Student";

export default {
  Query: {
    getStudentByOne2: async (_, args) => {
      const { age } = args;

      try {
        const result = await Student.find({
          age: {
            $gte: age,
          },
        }).populate({
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
