const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs", {
    url: 1,
    title: 1,
    author: 1,
    id: 1,
  });
  response.status(200).json(users);
});

usersRouter.post("/", async (request, response) => {
  const { username, name, password } = request.body;

  if (password.length < 3) {
    return response
      .status(400)
      .json({ error: "password must be at least 3 characters long" });
  }

  const usersWithUsername = await User.find({ username: username });
  if (usersWithUsername.length > 0) {
    return response.status(400).json({ error: "username is already taken" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();
  response.status(201).json(savedUser);
});

module.exports = usersRouter;
