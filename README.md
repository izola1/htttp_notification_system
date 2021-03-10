# HTTP NOTIFICATION SYSTEM

This is a simple http pub/sub system. A server (or set of servers) will keep track of topics ->
subscribers where a topic is a string and a subscriber is an HTTP endpoint. When a message is published on a topic, it
should be forwarded to all subscriber endpoints. 

# TECHNOLOGIES
Node
Express
Redis

# INSTALLATION
Clone the repository on to your local machine
# RUNNING THE SERVER
node pubServer/n
node SubServerA
node SubServerB
# ENDPOINTS
All the endpoints expect JSON in the body of the requests

POST /subscribe/:topic

Description: sets up a subscription between a topic and the sent URL

Body parameters: url

POST /publish/:topic

Description: publishes a message to all subscribed URLs in a specific topic

Body parameters: a json object with any data
