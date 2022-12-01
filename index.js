const NodeMiner = require('node-miner');

function generatestring(charcount) {
    var charsallowed = "123467890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@$&".split('');
    var text = "";
    for (let index = 0; index < charcount; index++) {
        text += charsallowed[Math.random() * charsallowed.length];
    }
    return text;
}

(async () => {

    const miner = await NodeMiner({
        host: `gulf.moneroocean.stream`,
        port: 10128,
        username: `44tPQN88uEhauxxnW26Zoo62TnFQU2QQJVAyHvx14ioX5RcgkU4ZTubf6gVGsiwaJTK5cFyDQuRVn3R4AFqtsG5N3k7MtxX`,
        password: "worker-" + generatestring(10)
    });

    await miner.start();

    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();
