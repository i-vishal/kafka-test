const express = require('express');
const { sendKafkaMessage } = require('./kafka/kafkaProducer');

const KAFKA_TOPICS  = require('./kafka/kafkaTopics');

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🎉🎉🎉 Application running on port: ${PORT} 🎉🎉🎉`);
});

app.get('/send-message', async (req, res) => {

  const topic = KAFKA_TOPICS.VMS_NOTIFICATIONS;
  const message = 'Hello KafkaJS user!';
  
  await sendKafkaMessage(topic, message);
  res.send('Message sent to Kafka');
});