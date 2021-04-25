require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid enroll frame short fan razor random unknown grid prison metal gesture'; 
let testAccounts = [
"0x7a30d3235943e570543d53032b25e89aa558d31a3537a6ca34e385e108359f65",
"0x4320c3aa990786281e581b1ceac8f61fd3578fd6d549cf5bd95cf2c5b91a351a",
"0xc802df00b81e237fd3476e54e4c2c53299804d053a88fa0a0271a8bbbca0857c",
"0x3b7d2c719e25d1238ee32398356aa49898843a1bf7992217e2bc67b423e5acc8",
"0xa25375d3db8d93c8c504e377d0d6cf461d2ce6250ef7404f91a41732fdaa7e5e",
"0x8669185744d7f8174bc0b95ebf013634d58fa2be3e88ba060fb381cc3a452e86",
"0x85d76eb683348ffbcf3eb8910aedfb946ac0b4dded05fb5f27ead4aef04eb6e2",
"0x90ca15b341c2b5db44994b70670e9b3d284408d2861691c150c83b5f75470f82",
"0x67de99ba7775b17051706f0914ed23611175a8c887ae19b6c6d3fe8c5048d599",
"0x3d00fbe1e07e365425db1ef4cf6810f8619e7ee41de6dd0f3dede5cf92ce22e8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


