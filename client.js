const {Kafka} = require("kafkajs"); 

exports.kafka = new Kafka({
    clientId:"MyApp",
    brokers:["192.168.2.105:9092"],
})