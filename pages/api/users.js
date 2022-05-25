const mongoose = require("mongoose");

const User = require("./db/models/user");

export default async function handler(req, res) {
  const connection =
    "mongodb+srv://derekmason:boop@boop.y55kq.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(connection, function (err) {
    if (err) throw err;
  });
  if (req.method === "POST") {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.first,
      last_name: req.body.last,
      joined: new Date(),
    });
    await newUser.save((err) => {
      if (err) throw err;
    });
    res.status(200).send(newUser);
  }
}
