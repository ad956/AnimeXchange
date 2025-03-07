import express from "express";
import dotenv from "dotenv";
import router from "./routes/index";
import { initKafka } from "./config/kafka";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api", router);

app.listen(port, async () => {
  await initKafka();
  console.log(`Gateway is running at http://localhost:${port}`);
});
