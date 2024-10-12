import { kafka } from "shared";

const consumer = kafka.consumer({ groupId: "user-service-group" });

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: "user-events", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("User Service received message:", message.value?.toString());
    },
  });
}

startConsumer().catch(console.error);
