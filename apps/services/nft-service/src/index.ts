import { kafka } from "shared";

const consumer = kafka.consumer({ groupId: "nft-service-group" });

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: "nft-creation", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("NFT Service received message:", message.value?.toString());
    },
  });
}

startConsumer().catch(console.error);
