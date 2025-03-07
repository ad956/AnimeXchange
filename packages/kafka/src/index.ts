import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "gateway",
  brokers: [process.env.KAFKA_BROKER || "localhost:9092"],
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "gateway-group" });

export async function connectKafka() {
  await producer.connect();
  await consumer.connect();
  console.log("Kafka Connected");
}
