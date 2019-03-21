let io = require('socket.io-client');
var readline = require('readline');
 
const socket = io('http://glennolsson.se:8082');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


socket.on("message", (mess) => {
    console.log(mess)
})

rl.on("line", (line) => {
    console.log("INPUT: " + line);
    socket.emit("message", line);
});

console.log("DONE")
