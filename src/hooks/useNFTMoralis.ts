import { useMoralisWeb3Api } from "react-moralis"
import { useState, useEffect, useCallback } from 'react'
import { ChainId, contractAddress, mainNetworkChainId, MoralisAPIKey } from "../constants"
import { useActiveWeb3React } from "."

// start moralis server
const Moralis = require('moralis')
const serverUrl = MoralisAPIKey.serverUrl
const appId = MoralisAPIKey.appId
Moralis.start({ serverUrl, appId })

const useNFTMoralis = () => {
    const Web3Api = useMoralisWeb3Api()
    const { account } = useActiveWeb3React()

    const [ myNFTData, setMyNFTData ] = useState([]) as any

    const fetchNFTsForContract = useCallback(async () => {
        const oldTime = new Date().getTime()
        
        let cursor = null

        while(true) {
            const options = {
                chain: 'mumbai',
                address: account,
                token_address: contractAddress[ mainNetworkChainId ].mint,
                cursor: cursor,
            } as any

            const ethNFTs = await Web3Api.account.getNFTsForContract(options)

            cursor = ethNFTs.cursor

            setMyNFTData( (prev: any) => ([ ...prev, ...(ethNFTs as any).result ]) )

            if( cursor === "" || cursor === null )
                break
        }
        const newTime = new Date().getTime()

        console.error('time elapsed: ', (newTime - oldTime))
    }, [ setMyNFTData ])

    useEffect(() => {
        fetchNFTsForContract()

        const refreshInterval = setInterval(fetchNFTsForContract, 10000)
        return () => clearInterval(refreshInterval)
    }, [ setMyNFTData ])

    return { myNFTData }
}

export default useNFTMoralis