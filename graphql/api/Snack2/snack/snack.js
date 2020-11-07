import Company from "../../../model/Company";
import Snack from "../../../model/Snack";

export default {
  Query: {
    getallSnack: async (_, agrs) => {
      try {
        const result = await Snack.find({}, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
