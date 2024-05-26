// File: admin.js

const { kafka } = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    await admin.connect();  // Ensure the connect method is awaited
    console.log("Admin connection success");

    console.log("Creating Topics [riders_updates]");  // Update topic name to valid format
    await admin.createTopics({
        topics: [{
            topic: "riders_updates",  // Replace space with an underscore
            numPartitions: 2,
        }]
    });
    console.log("Topic Creating Success [riders_updates]");

    console.log("Disconnecting Admin...");
    await admin.disconnect();
}

init().catch(console.error);
