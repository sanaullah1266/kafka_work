const { kafka } = require("./client")

async function init() {
  const consumer = kafka.consumer({
    groupId: "user-1", // Use 'groupId' instead of 'group_id'
});
  await consumer.connect()
  
  await consumer.subscribe({
    topics: ["riders_updates"], // Use 'topic' instead of 'topics' and remove square brackets
    fromBeginning: true
  });
  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(`[${topic}]:PART:${partition}:`,message.value.toString()); // Access message value using 'message.value.toString()'
    }
  });
}

init();
