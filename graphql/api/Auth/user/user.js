import User from "../../../model/User";
import { generateSecretCode } from "../../../../src/words";
import nodemailer from "nodemailer";
import smtpPool from "nodemailer-smtp-pool";

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
    loginUser: async (_, args) => {
      const { email } = args;

      try {
        const result = await User.findOne({ email });

        if (!result) {
          return false;
        } else {
          // secretCode 생성
          const secret = generateSecretCode();

          const smtpTransport = nodemailer.createTransport(
            smtpPool({
              service: "Gmail",
              host: "localhost",
              port: "465",
              tls: {
                rejectUnauthorize: false,
              },

              auth: {
                user: "4leaf.ysh@gmail.com",
                pass: "nvpdqofovkebects",
              },
              maxConnections: 5,
              maxMessages: 10,
            })
          );
          // secretCode를 사용자 이메일로 전송
          let mailOpt = {
            from: "4laef@software.com",
            to: result.email,
            subject: `🔐 Your Secret Code In SOPY Application`,
            html: `<h2>Welcome!! Login To SOPY!</h2><p>Your Secret Codes are <strong>[${secret}]</strong>.</p>`,
          };

          await smtpTransport.sendMail(mailOpt, function (err, info) {
            if (err) {
              console.error("Send Mail error : ", err);
              //smtpTransport.close();
            } else {
              console.log("Message sent : ", info); // info -> 정보
              //smtpTransport.close();
            }
          });
          // secretCode를 현재 감색 된 사용자 디비에 추가
          return true;
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
