const tunnel = require('tunnel-ssh');
const fs = require('fs');
const configjs = require('./config-data');

let ServerConfig = {
    publicServer:[]
 };
 
 configjs.map(function(item){
     ServerConfig.publicServer.push({
         "privateKey" : item.privateKey,
         "host" : item.host,
         "port" : item.port,
         "dstHost" : item.dstHost,
         "dstPort" : item.dstPort,
         "localHost" : item.localHost,
         "localPort" : item.localPort,
         "keepAlive" : item.age
     });
 });

let serverA = tunnel(ServerConfig.publicServer[0], function (error, server) {
    console.log("Is listening ", serverA.listening);
    serverA.on('connect', function () {
        console.error('serverA is connected');
    });

    serverA.on('ready', function () {
        console.error('serverA is ready');
    })

    if (error) {
        console.log('Something bad happened:', error);
    };
    let serverB = tunnel(ServerConfig.publicServer[1], function (error, serverB) {
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

    let serverC = tunnel(ServerConfig.publicServer[2], function (error, serverC) {
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

