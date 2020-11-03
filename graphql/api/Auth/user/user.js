export default {
  Mutation: {
    createUser: async (_, args) => {
      const { email, name, moblie } = args;

      console.log(email);
      console.log(name);
      console.log(moblie);

      return true;
    },
  },
};
