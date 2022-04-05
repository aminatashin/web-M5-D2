import express from "express";
import myRouter from "./API/author/author.js";
import listenEndpoints from "express-list-endpoints";

const server = express();
const port = 3001;

server.use("/author", myRouter);

server.listen(port, () => {
  console.table(listenEndpoints(server));
  console.log(`new runnung ${port}`);
});
