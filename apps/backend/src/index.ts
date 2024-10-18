import express from "express";
import { kafka } from "shared";

const app = express();
const producer = kafka.producer();

app.use(express.json());

// API Gateway routes
app.post("/api/nft/create", async (req, res) => {
  try {
    await producer.connect();
    await producer.send({
      topic: "nft-creation",
      messages: [{ value: JSON.stringify(req.body) }],
    });
    await producer.disconnect();
    res.status(200).json({ message: "NFT creation request sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send NFT creation request" });
  }
});

app.post("/api/user/event", async (req, res) => {
  try {
    await producer.connect();
    await producer.send({
      topic: "user-events",
      messages: [{ value: JSON.stringify(req.body) }],
    });
    await producer.disconnect();
    res.status(200).json({ message: "User event sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send user event" });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Backend API Gateway listening at http://localhost:${port}`);
});
