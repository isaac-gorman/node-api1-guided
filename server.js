const express = require("express");
const { getUserById } = require("./database");
const db = require("./database");

// creates a new express server
const server = express();

// this tells the server to install middleware
// this middleware allows me to parse json data from the request body
server.use(express.json());

// express gives us routings
server.get("/", (req, res) => {
  res.json({ message: "hello world!" });
});

server.get("/users", (req, res) => {
  const user = db.getUsers();
  res.status(200).json(user);
});

server.get("/users/:id", (req, res) => {
  // the param variable variable matches to the name of our URL param above
  const id = req.params.id;
  const user = db.getUserById(id);
  const userIDs = db.getUserIds();
  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({
      error_message: `user with id:${id} can not be found`,
      existing_user_ids: `Only users with id numbers: ${userIDs} exist`,
    });
  }
});

server.post("/users", (req, res) => {
  const newUser = db.createUser({
    name: req.body.name,
  });

  res.status(201).json(newUser);
  // Q: Where is the payload coming in and how do I account for it?
  // - req.payload?
});

server.delete("/users/:id", (req, res) => {
  // I need to take the id from the req object
  const id = req.params.id;
  const user = getUserById(id);
  const userIDs = db.getUserIds();
  if (user) {
    res.status(204).json({
      success_message: `User with id:${id} was successfully deleted `,
    });
    db.deleteUser(id);
  } else {
    res.status(404).json({
      error_message: `user with id:${id} can not be found`,
      existing_user_ids: `Only users with id numbers: ${userIDs} exist`,
    });
  }
});

server.listen(8080, () => {
  console.log(`Server Successfully Starter on Port 8080!!`);
});
