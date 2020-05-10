require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain hospital install indoor forget tent'; 
let testAccounts = [
"0x32dd34383e135998ae26f23c38cbe6afd80fab8dcc7761d5549a71e858fb585f",
"0xf7413dcd42779aeaeafc32ef3ec8b2658254c0a32d11bf10fd863c6b4e52ed19",
"0x03a0a65378457241e6e076829a1fbba4a9bf40f262d0594d1d76c9b28ef5e391",
"0xa8bad7fb456af2e0e10c2192399dbf9a5e876b3fc5138b82c5d839b117950976",
"0xe0ad6df520147565806c9399535b371d84ce71da3f6046a5b0e2e298328a2251",
"0xa20e1e4014c2d7bc5882acac5da7bab8a4e3638535c32323e61a6a7816fe52c6",
"0x088b3553c9e9648d40350a5b4fe0d885799232b13917faa67775efaed7c1f5e9",
"0x148f7d0294b2351c3bf46408746be6e71bb0778fa34cf90dd120b1bc8408da63",
"0x975f664584cb430a3ed9d2d0a5f077389f6d3af5f24db5ba9ab593f9cc25325d",
"0x09a532d994e87ad0ebaec8fdce735e33fd1dd5f7fc4edcef7d6fd60f92b7cb42"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
