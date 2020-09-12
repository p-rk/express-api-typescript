import express from "express";

import v1Test from "./api/api";

const router = express.Router();

/* v1 routes */
router.use("/v1", v1Test);

/* v2 routes */

export default router;
