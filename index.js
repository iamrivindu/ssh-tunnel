const tunnel = require('tunnel-ssh');
const fs = require('fs');
let configA = {
    username: 'ec2-user',
    privateKey: fs.readFileSync('C:\\Users\\rivinduw\\Downloads\\TestKeyPair.pem'),
    host: '',
    port: 22,
    dstHost: '',
    dstPort: 8080,
    localHost: '127.0.0.1',
    localPort: 8080,
    keepAlive: true
};

let configB = {
    username: 'ec2-user',
    privateKey: fs.readFileSync('C:\\Users\\rivinduw\\Downloads\\TestKeyPair.pem'),
    host: '',
    port: 22,
    dstHost: '',
    dstPort: 1433,
    localHost: '127.0.0.1',
    localPort: 8081,
    keepAlive: true
};

let configC = {
    username: 'ec2-user',
    privateKey: fs.readFileSync('C:\\Users\\rivinduw\\Downloads\\TestKeyPair.pem'),
    host: '',
    port: 22,
    dstHost: '',
    dstPort: 80,
    localHost: '127.0.0.1',
    localPort: 8082,
    keepAlive: true
};

let serverA = tunnel(configA, function (error, server) {
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
    let serverB = tunnel(configB, function (error, serverB) {
        console.log("Is listening ", serverB.listening);
        serverB.on('connect', function () {
            console.error('Server is connected');
        });
    
        serverB.on('ready', function () {
            console.error('Server is ready');
        })
    
        if (error) {
            console.log('Something bad happened:', error);
        }
        
    });
    
    serverB.on('error', function (err) {
        console.error('Something bad happened:', err);
    });

    let serverC = tunnel(configC, function (error, serverC) {
        console.log("Is listening ", serverC.listening);
        serverC.on('connect', function () {
            console.error('Server is connected');
        });
    
        serverC.on('ready', function () {
            console.error('Server is ready');
        })
    
        if (error) {
            console.log('Something bad happened:', error);
        }
    });
    
    serverC.on('error', function (err) {
        console.error('Something bad happened:', err);
    });
    
});

// Use a listener to handle errors outside the callback
serverA.on('error', function (err) {
    console.error('Something bad happened:', err);
});

