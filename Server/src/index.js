const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
const morgan = require("morgan");

server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", router);

server.listen(PORT, console.log("funciona rey"));

//const characters = require("./utils/data");
// const http = require("http");
// const { getCharById } = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);
//       getCharById(res, parseInt(id));
//     }
//   })
//   .listen(3001, "localhost");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);
//       let charactersFilter = characters.find(
//         (char) => char.id === parseInt(id)
//       );
//       res.writeHead(200, { "Content-type": "application/json" });
//       res.end(JSON.stringify(charactersFilter));
//     }
//   })
//   .listen(3001, "localhost");
