# Sample Code

This is a simple project to test connecting to RabbitMq via Stomp using the stompTs package.

## How to test

1. Run rabbitmq (docker): 
```docker run -dit -p 15672:15672 -p 5672:5672 -p 15674:15674 --name rabbitmq --rm crochik/rabbitmq:3.7-stomp```

2. Run this application:
```ng serve```

3. Connect to the RabbitMq Management in the web browser: `http://localhost:15672` using credentials `guest`/`guest`.

4. Click on the `Queue` tab. There should be on queue named `stomp-subscription-...`, select it by clicking on the name.

5. on the bottom of the page you will find a `publish message`

    The code assumes two possible formats for messages: `json` or `text`. If a header `content-type` is included with the value `application/json` the service will try to parse it and then output a prettyfied version of the json. Otherwise, the service will just output the body "as is".

6. send a text message: on the payload field add some text and press the "Publish Message" button

7. send a json message: add a header `content-type` with value `application/json`, paste a valid json in the payload button and then push the "Publish Message" button.

## Notes

* the app compomnent is subscribing to the topic `/topic/test.#`. In practice this means that it is that the queue is bound to the exchange `amq.topic` using the routing key `test.#` (any message published to amq.topic that starts with `test.` or is `test` will be routed to this queue and should show in the web page)

* there is no error handling. Make sure to look at the browser console for messages.
