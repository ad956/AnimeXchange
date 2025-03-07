import { Router } from "express";
import { producer } from "@repo/kafka";

const router: any = Router();

router.post("/login", async (req: any, res: any) => {
  await producer.send({
    topic: "auth-request",
    messages: [{ value: JSON.stringify(req.body) }],
  });

  res.json({ message: "Login request sent to auth service" });
});

export default router;
