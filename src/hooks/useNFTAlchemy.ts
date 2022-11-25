import { Alchemy, Network } from "alchemy-sdk"
import { useState, useEffect, useCallback } from 'react'
import { AlchemyAPIKey, contractAddress, mainNetworkChainId } from "../constants"
import { useActiveWeb3React } from "."
import { useBlockNumber } from "./store";
import { useMintContract } from "./useContract";
import { formatFromBalance } from "../utils";

const config = {
    apiKey: AlchemyAPIKey,
    network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(config);

const useNFTAlchemy = () => {
    const { account } = useActiveWeb3React() as any
    const currentBlockNumber = useBlockNumber()
    const mintContract = useMintContract( true ) as any

    const [ myNFTData, setMyNFTData ] = useState([]) as any

    const fetchNFTsForContract = useCallback(async () => {
        const nfts = await alchemy.nft.getNftsForOwner(account);
        const data = nfts.ownedNfts.filter((item: any) => {
            return item.contract.address === contractAddress[ mainNetworkChainId ].mint
        }) as any

        for( let i = 0; i < data.length; i++ ) {
            const nftData = await mintContract._tickets( Number(data[i].tokenId) )

            data[i].level = formatFromBalance(nftData.level, 0)
            data[i].comment = nftData.comment
        }

        setMyNFTData(data)
    }, [ account, setMyNFTData, currentBlockNumber ])

    useEffect(() => {
        if( !account ) return

        fetchNFTsForContract()

        const refreshInterval = setInterval(fetchNFTsForContract, 10000)
        return () => clearInterval(refreshInterval)
    }, [ account, setMyNFTData ])

    return { myNFTData }
}

export default useNFTAlchemy