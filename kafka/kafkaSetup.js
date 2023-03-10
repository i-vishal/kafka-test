const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [
    'b-1-public.recruitcrm.fijtkb.c3.kafka.ap-southeast-1.amazonaws.com:9196',
    'b-3-public.recruitcrm.fijtkb.c3.kafka.ap-southeast-1.amazonaws.com:9196',
    'b-2-public.recruitcrm.fijtkb.c3.kafka.ap-southeast-1.amazonaws.com:9196'
  ],
  ssl: true,
  sasl: {
    mechanism: 'scram-sha-512', // scram-sha-256 or scram-sha-512
    username: 'rcrm',
    password: 'Fb6fBW3a5hM3dG'
  }
})

module.exports = kafka;