

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const trucksRouter = require("./trucks/trucks-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/trucks", trucksRouter);

server.get("/", (req, res) => {
  res.json({ api: "This server is up and running! Add some Diners!" });
});

module.exports = server;