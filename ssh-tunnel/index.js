const tunnel = require('tunnel-ssh');
const fs = require('fs');
let configA = {
    username: 'ec2-user',
    privateKey: fs.readFileSync('C:\\Users\\rivinduw\\Downloads\\TestKeyPair.pem'),
    host: '52.59.171.111',
    port: 22,
    dstHost: '52.57.190.231',
    dstPort: 8080,
    localHost: '127.0.0.1',
    localPort: 8080,
    keepAlive: true
};

let configB = {
    username: 'ec2-user',
    privateKey: fs.readFileSync('C:\\Users\\rivinduw\\Downloads\\TestKeyPair.pem'),
    host: '52.59.171.111',
    port: 22,
    dstHost: '172.31.27.166',
    dstPort: 1433,
    localHost: '127.0.0.1',
    localPort: 8080,
    keepAlive: true
};

let serverA = tunnel(configA, function (error, serverA) {
    console.log("Is listening ", serverA.listening);
    /*serverA.on('connect', function () {
        console.error('serverA is connected');
    });

    serverA.on('ready', function () {
        console.error('serverA is ready');
    })

    if (error) {
        console.log('Something bad happened:', error);
    }*/
    let server = tunnel(configB, function (error, server) {
        console.log("Is listening ", server.listening);
        server.on('connect', function () {
            console.error('Server is connected');
        });
    
        server.on('ready', function () {
            console.error('Server is ready');
        })
    
        if (error) {
            console.log('Something bad happened:', error);
        }
    });
    
    server.on('error', function (err) {
        console.error('Something bad happened:', err);
    });
});

// Use a listener to handle errors outside the callback
serverA.on('error', function (err) {
    console.error('Something bad happened:', err);
});


