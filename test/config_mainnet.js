const BigNumber = require('bignumber.js');

module.exports = {
    node: 'https://mainnet.eth.aragon.network/ws',
    pools: ['0x2cf9106faf2c5c8713035d40df655fb1b9b0f9b9'],
    periodBlockDelimiters: [10606940, 10606980],
    blocksPerSnapshot: 10,
    antPerPeriod: new BigNumber(12500), // ~50k per month
    whitelistTokens: [
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
        '0x960b236A07cf122663c4303350609A66A7B288C0', // ANT
    ],
    uncappedTokens: [
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
        '0x960b236A07cf122663c4303350609A66A7B288C0', // ANT
    ],
};
