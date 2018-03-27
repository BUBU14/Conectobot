export function init() {
    var socket = io.connect('http://' + document.domain + ':' + location.port);
    socket.on('connect', function() {
        socket.emit('event', {data: 'Connected!'});
    });
    return socket
}
