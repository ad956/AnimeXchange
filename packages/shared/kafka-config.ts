import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "animexchange",
  brokers: ["localhost:29092"],
});

export default kafka;
