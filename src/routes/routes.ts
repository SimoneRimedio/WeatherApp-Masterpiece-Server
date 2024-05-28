import { Router } from "express";

import getGeocode from "../controllers/getGeocode";
import getReverseGeocode from "../controllers/getReverseGeocode";

const router = Router();

router.get("/getgeocode", getGeocode);
router.get("/getreversegeocode", getReverseGeocode);

export default router;
