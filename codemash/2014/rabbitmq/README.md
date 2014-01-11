### Creating distributed applications with RabbitMQ

 - Not much specific information about RabbitMQ, but more about architecting to make use
   of RabbitMQ most efficiently.
  
 - Create events instead of actions
   - I'm thinking this will be like a RESTful type of api, but with "callback events" to notify other's
   - app:model:new
     - sent on a PUT to the web server (PUT /api/:model)
     - `exchange.send('app:model:new', data)`
     - return to client
   - app:model:created
     - sent from the datastore manager (was listening for `app:model:new` events)
     - picked up by a a listener on the webapp and pushed out to clients through socket.io, for instance
