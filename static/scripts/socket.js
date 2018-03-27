export function init() {
    var socket = io.connect('http://' + document.domain + ':' + location.port);

    socket.on('event', function () {
        socket.emit('connect', {data: ' Connected'});
    });
    return socket
}
