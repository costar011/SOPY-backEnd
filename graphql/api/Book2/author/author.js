import Author from "../../../model/Author";
import Book from "../../../model/Book";

export default {
  Query: {
    getallAuthor: async (_, args) => {
      try {
        const result = await Author.find({}, {}).populate({
          path: `artlist`,
          model: Book,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getoneAuthor: async (_, args) => {
      const { name } = args;

      try {
        const result = await Author.findOne({}, {}).populate({
          path: `artlist`,
          model: Book,
        });
        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
    getAuthorList: async (_, args) => {
      try {
        const result = await Author.find({}, {})
          .populate({
            path: `artlist`,
            model: Book,
          })
          .sort({ name: 1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
