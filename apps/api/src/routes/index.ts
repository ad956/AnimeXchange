import { Router } from "express";
import authRoutes from "./auth.route";

const router: any = Router();

router.use("/auth", authRoutes);

export default router;
