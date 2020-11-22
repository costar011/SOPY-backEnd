import Author from "../../../model/Author";
import Book from "../../../model/Book";

export default {
  Query: {
    // Qurey 데이터 갖고오는 것 빼고는 전부 다  Mutation 이다.
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

    searchBook: async (_, args) => {
      const { title } = args; // 구조 분해 할당
      try {
        const result = await Book.find(
          {
            title: {
              $regex: `.*${title}.*`,
              // 변수이기 때문에 $regex를 쓴다. 어떤 패턴 검색을 할 수 있다.
              // 정규표현식을 쓸 수 있음.
            },
          },
          {}
        ).sort({ price: 1 });
        // find({title:title 이럴 때 title하나만 써주는 객체리터럴 이라고한다.},{})

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
};
