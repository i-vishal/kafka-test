const kafka = require('./kafkaSetup');

const producer = kafka.producer()

async function sendKafkaMessage(topic, message) {
  await producer.connect();
  
  await producer.send({
    topic,
    messages: [
      { value: message },
    ],
  })
  
  await producer.disconnect()
}

module.exports = { sendKafkaMessage };
