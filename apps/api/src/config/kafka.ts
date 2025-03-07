import { producer, consumer, connectKafka } from "@repo/kafka";

export async function initKafka() {
  await connectKafka();

  consumer.subscribe({ topic: "auth-response", fromBeginning: true });

  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message on ${topic}:`, message.value?.toString());
    },
  });
}
