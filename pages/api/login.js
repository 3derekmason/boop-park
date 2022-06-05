const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("./db/models/user");

dotenv.config();

export default async function handler(req, res) {
  const connection = process.env.MONGODB_URI;
  mongoose.connect(connection, function (err) {
    if (err) throw err;
  });
  if (req.method === "POST") {
    try {
      var user = await User.findOne({
        username: req.body.username,
      }).exec();
      if (!user) {
        return res.status(400).send({ message: "The username does not exist" });
      }
      user.comparePassword(req.body.password, (error, match) => {
        if (!match) {
          return res.status(400).send({ message: "The password is invalid" });
        }
        return res.status(200).send(user);
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
