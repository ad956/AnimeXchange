import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router: any = Router();

const users: { username: string; password: string }[] = []; // Temporary storage

router.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.json({ message: "User registered!" });
});

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  res.json({ token });
});

export default router;
