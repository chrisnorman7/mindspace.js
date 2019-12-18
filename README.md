# mindspace.js
Mindspace websocket communication

## Usage
```
<script src="https://chrisnorman7.github.io/mindspace.js/mindspace.js"></script>
<script>
m = new Mindspace()
m.addCommand("message", alert)

m.addCommand("ping", () => m.sendCommand({name: "pong"})

m.connect("ws://somedomain.com:1234)
</script>
```

## Explanation
The idea of this package is that json-encoded strings are sent either way through a websocket. Your web browser can interpret them as objects. These objects will contain 3 parts: The name of the command, positional arguments sent to the command, and keyword arguments sent to the command.

Both positional and keyword arguments are sent because I originally defined the Mindspace specification in Python.
