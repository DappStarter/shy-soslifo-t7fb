require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure traffic warm renew pitch social coral light army gather'; 
let testAccounts = [
"0x6f4a3d7e57f7f9fd9f5452c19381db5721288b2cde2f6a80a17e18623b82de8b",
"0xf7c78a5a6f7beeda93a7143cbd97f777744d247e09f00f90d2053a38bf987164",
"0x867cab82068a8f793516e0c345d2fa61f85637214b7a179947550d73981715f6",
"0x57ad30a1a85a471b9843fdbda89fee3e36f07e3f8d44e5c71c493646f30e91cf",
"0x7be6b4feb57c9bb16b8ee922d235e56c499d931fb76172d0af9622254ac5b063",
"0xdc5682dcac61f979a156b2b426fb302291ce8a6850c797a47996fa8206471076",
"0xeef81d8790f90c384ca8daef6548d622c677df4f60fd81f4187871c50c7d0450",
"0xb5d3db4e4af28e94aee042a0b377930443616d7cdac9c2a55e31b004e0c2329a",
"0xbf4339375fc88d4db0b8c229ea9c062de84cc3ef2c17a0566e0595c964142609",
"0x8cb87284f50d544a835b8f3c78924ced0cc1e91973a68615dcb778ca7a3aeb71"
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
            version: '^0.8.0'
        }
    }
};

