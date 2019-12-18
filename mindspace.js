class Mindspace {
    constructor() {
        this.socket = null
        this.commands = {}
        this.onunsupportedcommand = null // Called when the server sends an unsupported command.
        this.onclose = null // Called when the socket is closed.
    }

    addCommand(name, func) {
        this.commands[name] = func
    }

    sendCommand(name, obj) {
        if (obj.args === undefined) {
            obj.args = []
        }
        if (obj.kwargs === undefined) {
            obj.kwargs = {}
        }
        let data = [obj.name, obj.args, obj.kwargs]
        let s = JSON.stringify(data)
        this.socket.send(s)
    }

    connect(url) {
        this.socket = new WebSocket(url)
        this.socket.onmessage = e => {
            let data = JSON.parse(e.data)
            let command = this.commands[data.command]
            if (command === undefined) {
                if (this.onunsupportedcommand !== null) {
                    this.onunsupportedcommand(data)
                }
            } else {
                command(...data.args)
            }
        }
        this.socket.onclose = () => {
            this.socket = null
            if (this.onclose !== null) {
                this.onclose()
            }
        }
    }
}

this.Mindspace = Mindspace
