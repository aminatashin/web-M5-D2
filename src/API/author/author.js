import express from "express";
// post ("http://localhost:3001/author/ (+body)"
// get ("http://localhost:3001/author")
// single get ("http://localhost:3001/author/:userID")
// put ("http://localhost:3001/author/:userId + body")
// delete ("http://localhost:3001/author/:userId")

const myRouter = express.Router();
myRouter.post("/", (req, res) => {
  console.log("hi bitch");
});

myRouter.get("/", (req, res) => {});
myRouter.get("/:authorId", (req, res) => {});

myRouter.put("/:authorId", (req, res) => {});

myRouter.delete("/:authorId", (req, res) => {});

export default myRouter;
