const mongoose = require("mongoose");

const User = require("./db/models/user.js");

export default async function handler(req, res) {
  const connection =
    "mongodb+srv://derekmason:boop@boop.y55kq.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(connection, function (err) {
    if (err) throw err;
    console.log("Successfully connected to MongoDB");
  });
  if (req.method === "POST") {
    console.log("body", req.body);
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.first,
      last_name: req.body.last,
      joined: new Date(),
    });
    newUser.save(function (err) {
      if (err) throw err;
    });
    res.status(201).send(newUser);
  } else {
    res.status(200).json("All Users");
  }
}
