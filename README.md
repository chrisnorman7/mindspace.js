# mindspace.js
Mindspace websocket communication

## Usage
```
<script src="https://cdn.rawgit.com/chrisnorman7/mindspace.js/9099863c/mindspace.js></script>
<script>
mindspaceFunctions["message"] = (obj) => {
    let text = obj.args[0]
    alert(text)
}

mindspaceFunctions["ping"] = () => mindspaceSend(socket, {name: "pong"})
</script>
```

## Explanation
The idea of this package is that json-encoded strings are sent either way through a websocket. Your web browser can interpret them as objects. These objects will contain 3 parts: The name of the command, positional arguments sent to the command, and keyword arguments sent to the command.

Both positional and keyword arguments are sent because I originally defined the Mindspace specification in Python.
