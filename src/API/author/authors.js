import express from "express";
import fs, { readFileSync } from "fs";

import { fileURLToPath } from "url";
import { dirname, join } from "path";
import uniqid from "uniqid";
// post ("http://localhost:3001/author/ (+body)"
// get ("http://localhost:3001/author")
// single get ("http://localhost:3001/author/:userID")
// put ("http://localhost:3001/author/:userId + body")
// delete ("http://localhost:3001/author/:userId")

const myRouter = express.Router();
const currentPath = fileURLToPath(import.meta.url);
const parentPath = dirname(currentPath);
const authorJson = join(parentPath, "authors.json");
myRouter.post("/", (req, res) => {
  const newInfo = { ...req.body, creatAt: new Date(), id: uniqid() };
  const infoArray = JSON.parse(fs.readFileSync(authorJson));
  infoArray.push(newInfo);
  fs.writeFileSync(authorJson, JSON.stringify(infoArray));
  res.send({ id: newInfo.id });
});

myRouter.get("/", (req, res) => {
  const info = fs.readFileSync(authorJson);
  const infoArray = JSON.parse(info);
  res.send(infoArray);
});

myRouter.get("/:authorsId", (req, res) => {
  const authorsId = req.params.authorsId;
  const infoArray = JSON.parse(fs.readFileSync(authorJson));
  const findId = infoArray.find((info) => info.id === authorsId);
  res.send(findId);
});

myRouter.put("/:authorsId", (req, res) => {
  const infoArray = JSON.parse(fs.readFileSync(authorJson));
  const index = infoArray.findIndex((info) => info.id === req.params.authorsId);
  const oldInfo = infoArray[index];
  const updateInfo = { ...oldInfo, ...req.body, updateAt: new Date() };
  infoArray[index] = updateInfo;
  fs.writeFileSync(authorJson, JSON.stringify(infoArray));
  res.send(infoArray);
});

myRouter.delete("/:authorId", (req, res) => {
  const infoArray = JSON.parse(fs.readFileSync(authorJson));
  const remain = infoArray.filter((info) => info.id !== req.params.authorId);
  res.send(remain);
});

export default myRouter;
