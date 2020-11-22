import Company from "../../../model/Company";
import Snack from "../../../model/Snack";

export default {
  Query: {
    // Qurey 데이터 갖고오는 것 빼고는 전부 다  Mutation 이다.
    getAllCompany: async (_, args) => {
      try {
        const result = await Company.find({}, {}).populate({
          path: `snackList`,
          model: Snack,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
