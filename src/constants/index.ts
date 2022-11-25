export const ChainId = {
    MAINNET : 1,
    ROPSTEN : 3,
    RINKEBY : 4,
    GÖRLI : 5,
    KOVAN : 42,
    MATIC : 137,
    MATIC_TESTNET : 80001,
    FANTOM : 250,
    FANTOM_TESTNET : 4002,
    XDAI : 100,
    BSC : 56,
    BSC_TESTNET : 97,
    ARBITRUM : 79377087078960,
    MOONBASE : 1287,
    AVALANCHE : 43114,
    FUJI : 43113,
    HECO : 128,
    HECO_TESTNET : 256,
    HARMONY : 1666600000,
    HARMONY_TESTNET : 1666700000
}

export const contractAddress = {
    [ChainId.MATIC_TESTNET]: {
        mint: '0x867179a2ddf88d32a85158885cdaa19ae40c912c'
    }
}

export const mainNetworkChainId = ChainId.MATIC_TESTNET

export const NetworkContextName = 'NETWORK'

export const ErrorMessages = {
    '-32002': 'Already processing Metamask wallet connect. Please confirm metamask modal.'
}

export const ApplicationModal = {
    WALLET : 1,
}

export const MoralisAPIKey = {
    serverUrl: "https://ygogtpuez79s.usemoralis.com:2053/server",
    appId: "6STWJ8AyIqe5s56zzLmNyCvriXZeIW2Pr44Jb5bI"
}

export const AlchemyAPIKey = '9fy__Bv1yQtxKQfe4v74A6QRyoM6WJjT'

export const range = {
    x: 1800,
    y: 900,
}

export const zoomRatio = range.x / window.innerWidth

export const zoomRange = {
    min: 2,
    max: 50,
}

export const miniMapSize = {
    width: 500,
    height: 250,
}

export const levelArea = {
    5: {
        position: {
            x: 147,
            y: 134,
        },
        size: 25,
        count: 1,
    },
    4: {
        position: [{
            x: 177,
            y: 7,
        }, {
            x: -114,
            y: -13,
        }],
        size: 15,
        count: 2,
    },
    3: {
        position: [{
            x: 360,
            y: -97
        }, {
            x: -340,
            y: -150
        }],
        size: 10,
        count: 10,
    },
    2: {
        position: [{
            x: 500,
            y: -178,
        }, {
            x: -381,
            y: -235
        }],
        size: 5,
        count: 100,
    },
    1: {
        position: [{
            x: 567,
            y: -252,
        }, {
            x: -453,
            y: -324
        }],
        size: 2,
        count: 1000,
    },
    0: {
        position: [{
            x: 667,
            y: -336,
        }, {
            x: -655,
            y: -435
        }],
        size: 1,
        count: 10000,
    }
}