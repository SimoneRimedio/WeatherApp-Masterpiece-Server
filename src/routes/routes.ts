import { Router } from "express";
import getReverseGeocode from "../controllers/getReverseGeocode";

const router = Router();

router.get("/getreversegeocode", getReverseGeocode);

export default router;
