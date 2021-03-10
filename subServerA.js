const express = require('express');
const redis = require('redis');

const subscriber = redis.createClient();

const app = express();

subscriber.on("message",(channel,message) => {
    console.log("Received data :"+message);
})

subscriber.subscribe("subscriber-notify");

app.get('/',(req,res) => {
    res.send("Subscriber A");
})


const port = process.env.PORT || 9000

app.listen(port,() => {
    console.log(`server is listening on PORT ${port}...`);
})