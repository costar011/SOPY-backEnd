import User from "../../../model/User";

export default {
  Mutation: {
    registUser: async (_, args) => {
      const {
        name,
        email,
        nickName,
        mobile,
        zoneCode,
        address,
        detailAddress,
      } = args;
      try {
        const result = await User.create({
          name,
          email,
          nickName,
          mobile,
          zoneCode,
          address,
          detailAddress,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
