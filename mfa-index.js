const Client = require('ssh2').Client;
const conn = new Client();
let interactiveCounter = 0;
const password = "intel@123";

conn.on('ready', function () {

    console.log("Connected!");
}).on('error', function (err) {
    console.error(err);
}).on('keyboard-interactive', function (name, descr, lang, prompts, finish) {
    // For illustration purposes only! It's not safe to do this!
    // You can read it from process.stdin or whatever else...
    let interactiveArray = (interactiveCounter++ == 0) ? [password] : [process.argv[2]];
    return finish(interactiveArray);
});
conn.connect({
    debug: function (log) {
        //  console.log(log);
    },
    host: "18.196.3.2",
    port: 22,
    username: "ubuntu",
    password: "intel@123",
    privateKey: require('fs').readFileSync("D:\\RivinduW@99x\\keytunnelInstanceO.pem"),
    tryKeyboard: true,
});
