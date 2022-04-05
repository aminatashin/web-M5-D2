import express from "express";
import myRouter from "./API/author/authors.js";
import listenEndpoints from "express-list-endpoints";

const server = express();
const port = 3001;

server.use("/authors", myRouter);
server.use(express.json());

server.listen(port, () => {
  console.table(listenEndpoints(server));
  console.log(`new runnung ${port}`);
});
