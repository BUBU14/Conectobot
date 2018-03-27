export function init() {
    var socket = io.connect('http://' + document.domain + ':' + location.port);
    return socket
}
