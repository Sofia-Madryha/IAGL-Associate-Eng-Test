const express = require("express");
const cors = require("cors");
const repository = require("./repository/todo");
const todoService = require("./service/todo")(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get("/api/todo", async (req, res) => {
    res.status(200).json(await todoService.getTodos());
  });

  server.post("/api/todo", async (req, res, next) => {
    try {
      const newTodo = req.body;
      res.status(201).json(await todoService.postTodo(newTodo));
    } catch (err) {
      next(err);
    }
  });

  server.use("/", (req, res) => {
    res.status(404).send({ msg: "Invalid url!" });
  });

  server.use((err, req, res, next) => {
    console.log(err);

    if (err.status && err.msg) {
      res.status(err.status).send({ msg: err.msg });
    } else {
      next(err);
    }
  });

  server.use((err, req, res, next) => {
    res.status(500).send({ msg: "Internal server error !" });
  });

  return server;
};
module.exports = server;
