# HTTP NOTIFICATION SYSTEM

This is a simple http pub/sub system. A server (or set of servers) will keep track of topics ->
subscribers where a topic is a string and a subscriber is an HTTP endpoint. When a message is published on a topic, it
should be forwarded to all subscriber endpoints. 

### TECHNOLOGIES
Node
Express
Redis

### INSTALLATION
Clone the repository on to your local machine
### RUNNING THE SERVERS
`node pubServer` - Publisher Server<br/> 
`node SubServerA` - Subscriber Server A<br/>
`node SubServerB` - Subscriber Server A<br/>
### ENDPOINTS
POST - `/subscribe/:topic` - For subscribing to a topic

       Expected Body:
        `{
          url: string
         }` 

        Success Response
        `{
          url: string,
          topic: string
         }`

POST `/publish/:topic`  - For Publishing a message on a given topic

      Expected Body:
          `{
            [key: string]: any
           }` 

       Success Response:
       `{
          topic: string
          data: object // whatever data was sent in the publish body
        }`
