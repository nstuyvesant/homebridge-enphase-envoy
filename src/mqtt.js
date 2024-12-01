import asyncMqtt from 'async-mqtt';
const { connectAsync } = asyncMqtt;
import EventEmitter from 'events';

class Mqtt extends EventEmitter {
    constructor(config) {
        super();
        const options = {
            clientId: config.clientId,
            username: config.user,
            password: config.passwd
        }
        const url = `mqtt://${config.host}:${config.port}`;
        const subscribeTopic = `${config.prefix}/Set`;

        this.on('connect', async () => {
            try {
                //connect
                this.mqttClient = await connectAsync(url, options);
                this.emit('connected', 'MQTT Connected.');

                //subscribe
                await this.mqttClient.subscribe(subscribeTopic);
                this.emit('subscribed', `MQTT Subscribe topic: ${subscribeTopic}.`);

                //subscribed message
                this.mqttClient.on('message', (topic, message) => {
                    try {
                        const obj = JSON.parse(message.toString());
                        const emitDebug = config.debug ? this.emit('debug', `MQTT Received topic: ${topic}, message: ${JSON.stringify(obj, null, 2)}`) : false;
                        const key = Object.keys(obj)[0];
                        const value = Object.values(obj)[0];
                        this.emit('set', key, value);
                    } catch (error) {
                        this.emit('error', `MQTT Parse object error: ${error.message ?? error}`);
                    };
                });
            } catch (error) {
                this.emit('error', `MQTT Connect error: ${error}`);
            };
        }).on('publish', async (topic, message) => {
            try {
                const fullTopic = `${config.prefix}/${topic}`;
                const publishMessage = JSON.stringify(message, null, 2);
                await this.mqttClient.publish(fullTopic, publishMessage);
                const emitDebug = config.debug ? this.emit('debug', `MQTT Publish topic: ${fullTopic}, message: ${publishMessage}`) : false;
            } catch (error) {
                this.emit('error', `MQTT Publish error: ${error.message ?? error}`);
            };
        });

        this.emit('connect');
    };
};
export default Mqtt;