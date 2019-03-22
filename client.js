let io = require('socket.io-client');
var readline = require('readline');
const socket = io("http://130.229.186.37:3000");

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
    socket.emit("message", {
        vafan: "händer?"
    });
});

console.log("DONE")
