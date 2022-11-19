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
        mint: '0xd450d2fcb6699177f298bd5b8829a5c8433497df'
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

export const range = {
    x: 1800,
    y: 900,
}

export const zoomRatio = range.x / window.innerWidth

export const zoomRange = {
    min: 1,
    max: 100,
}

export const miniMapSize = {
    width: 500,
    height: 250,
}