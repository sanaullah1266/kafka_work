const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();

  console.log("Connecting the Producer...");
  await producer.connect();
console.log("Producer connected Successfully");
  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        key: "location-updates",
        value: JSON.stringify({ name: "SanaKhan", loc: "South" }),
        partition: 0, // Specify the partition here
      },
    ],
  });
  await producer.disconnect();
}

init();
