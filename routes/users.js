import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("We in the user!");
});

export default router;
