const express = require('express');
const redis = require('redis');


const publisher = redis.createClient();

const app = express();
app.use(express.json());



const topics = [
    {
        topic: "topic1",
        data: {message: "Introduction to Programming"}
    }
]

const subscribers = [
    {
        url: 'http://localhost:9000',
        subscribeTopic: 'topic1'
    }
]


//publishing route
app.post('/publish/:topic', (req,res) => {
    const topic = {
        topic: req.body.topic,
        data: req.body.data
    };
    publisher.publish("subscriber-notify",JSON.stringify(topic)) 
    res.send(topic);
})

//subscription route
app.post('/subscribe/:topic', (req,res) => {

    const subscriber = {
        url: req.body.url,
        subscribeTopic: req.params.topic
    }

    subscribers.push(subscriber);
    res.send(subscriber)
})


const port = process.env.PORT || 8000

app.listen(port,() => {
    console.log(`server is listening on PORT ${port}...`);
})