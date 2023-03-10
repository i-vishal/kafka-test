const kafka = require('./kafkaSetup');
const KAFKA_TOPICS  = require('./kafkaTopics');

const consumer = kafka.consumer({ groupId: 'vms-notifications-vishal' })

async function startConsumer(topic, onMessageReceived) {
  await consumer.connect();
  await consumer.subscribe({ topic });

  setInterval(() => {
    console.log('listening for messages');
  }, 2000);
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      onMessageReceived(message.value.toString());
    },
  })
}

startConsumer(KAFKA_TOPICS.VMS_NOTIFICATIONS, (message) => {
  console.log(`Received message : ${message}`);
});
