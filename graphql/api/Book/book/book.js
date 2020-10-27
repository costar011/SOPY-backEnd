import Author from "../../../model/Author";
import Book from "../../../model/Book";

export default {
  Query: {
    getAllBooks: async (_, agrs) => {
      try {
        const result = await Book.find({}, {}).populate({
          path: `author`,
          model: Author,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getOneBook: async (_, args) => {
      const { title } = args;

      try {
        const result = await Book.findOne({ title }, {}).populate({
          path: `author`,
          model: Author,
        });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },
};
