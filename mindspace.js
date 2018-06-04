const mindspaceFunctions = {}

function mindspaceSend(soc, obj) {
    if (obj.args === undefined) {
        obj.args = []
    }
    if (obj.kwargs === undefined) {
        obj.kwargs = {}
    }
    let l = [obj.name, obj.args, obj.kwargs]
    let value = JSON.stringify(l)
    soc.send(value)
}

function mindspaceReceive(string) {
    let obj = JSON.parse(string)
    let func = mindspaceFunctions[obj.name]
    if (func !== undefined) {
        func(obj)
    } else {
        throw Error(`Unrecognised command: ${string}`)
    }
}
