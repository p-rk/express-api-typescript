import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  return res.status(200).json({ msg: "🚀 hello from v1 api" });
});

export default router;
