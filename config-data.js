var configData = [
    {username: 'ec2-user',
    privateKey: fs.readFileSync('C:\\Users\\rivinduw\\Downloads\\TestKeyPair.pem'),
    host: '52.59.171.111',
    port: 22,
    dstHost: '52.57.190.231',
    dstPort: 8080,
    localHost: '127.0.0.1',
    localPort: 8080,
    keepAlive: true},

    {username: 'ec2-user',
    privateKey: fs.readFileSync('C:\\Users\\rivinduw\\Downloads\\TestKeyPair.pem'),
    host: '52.59.171.111',
    port: 22,
    dstHost: '172.31.27.166',
    dstPort: 1433,
    localHost: '127.0.0.1',
    localPort: 8081,
    keepAlive: true},

    {username: 'ec2-user',
    privateKey: fs.readFileSync('C:\\Users\\rivinduw\\Downloads\\TestKeyPair.pem'),
    host: '52.59.171.111',
    port: 22,
    dstHost: '52.57.190.231',
    dstPort: 80,
    localHost: '127.0.0.1',
    localPort: 8082,
    keepAlive: true}
];

let ServerConfig = {
   publicServer:[]
};

configData.map(function(item){
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