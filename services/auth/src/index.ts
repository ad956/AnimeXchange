import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

const PORT = process.env.AUTH_PORT || 5001;
app.listen(PORT, () => {
  console.log(`Auth service running on http://localhost:${PORT}`);
});
