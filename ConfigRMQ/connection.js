// connection.js
const amqp = require("amqplib");

async function connectToRabbitMQ() {
  const connection = await amqp.connect(
    "amqp://absensi_rfid:absensi_rfid!@103.167.112.188:5672/absensi"
  );
  const channel = await connection.createChannel();
  const queueName = "rfid";

  await channel.assertQueue(queueName, { durable: true });

  return { connection, channel, queueName };
}

module.exports = connectToRabbitMQ;
