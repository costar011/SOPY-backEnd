import { Query } from "mongoose";
import Snack from "../../../model/Snack";

export default {
  Query: {
    // Qurey 데이터 갖고오는 것 빼고는 전부 다  Mutation 이다.
    getAllSnack: async (_, args) => {
      try {
        const result = await Snack.find({ price: { $lte: 2000 } }, {});
        // find({},{특별히 조회할 애를 넣는 곳 넣을 것이 있으면 !})

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getSnackGte: async (_, args) => {
      const { price } = args;

      try {
        const result = await Snack.find({ price: { $gte: price } }, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getSnackLte: async (_, args) => {
      const { price } = args;

      try {
        const result = await Snack.find({ price: { $lte: price } }, {});

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
