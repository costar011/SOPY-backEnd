import Book from "../../../model/Book";
import Author from "../../../model/Author";

export default {
  Query: {
    getallBooks: async (_, args) => {
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

    getoneBook: async (_, args) => {
      const { title } = args;

      try {
        const result = await Book.findOne({}, {}).populate({
          path: `author`,
          model: Author,
        });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    search: async (_, agrs) => {
      const { title } = agrs;
      try {
        const result = await Book.find(
          {
            title: {
              $regex: `.*${title}.*`,
            },
          },
          {}
        ).sort({ price: 1 });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },
};
