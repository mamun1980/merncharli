import express from "express";
import CreateNewUser from "../controllers/user.controllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  const msg = "Return users list";
  res.send(msg);
});

router.post("/", CreateNewUser);

router.delete("/:id", (req, res) => {
  const msg = `Delete user with id: ${id}`;
  res.send(msg);
});

export default router;
