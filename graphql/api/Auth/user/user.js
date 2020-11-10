import User from "../../../model/User";

export default {
  Mutation: {
    createUser: async (_, agrs) => {
      const { email, name, mobile } = agrs;

      try {
        const result = await User.create({
          email,
          name,
          mobile,
          secretCode: "",
          createdAt: new Date().toString(),
        });

        console.log("Join Us");
        console.log(result);

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
