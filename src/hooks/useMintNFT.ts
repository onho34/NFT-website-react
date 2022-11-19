import { BigNumber } from "ethers"
import { useCallback, useEffect, useState } from "react"
// import { useMoralisWeb3Api } from "react-moralis"
import { useActiveWeb3React } from "."
import { ChainId, contractAddress } from "../constants"
import { formatFromBalance } from "../utils"
import { useTransactionAdder } from "./store/transactions"
import { useMintContract } from "./useContract"

const useMintNFT = (props: any) => {
    const { account, chainId } = useActiveWeb3React()
    const mintContract = useMintContract( true )

    const [ totalSupply, setTotalSupply ] = useState(0)
    const [ mintCostBigNumber, setMintCostBigNumber ] = useState( BigNumber.from('0x013c310749028000') )

    const addTransaction = useTransactionAdder() as any

    // const Web3Api = useMoralisWeb3Api()

    const fetchMintInfo = useCallback(async () => {
        if( mintContract ) {
            try {
                const result = await mintContract?.totalSupply()
                setTotalSupply( Number( formatFromBalance( result, 0 ) ) )
    
                const result_mintCost = await mintContract?._price()
                setMintCostBigNumber( result_mintCost )
            } catch(e) {
                console.error('fetchMintInfo ------ : ', e)
            }
        } else {
            // const options = {
            //     chain: "eth",
            //     address: contractAddress[ ChainId['MAINNET'] ],
            //     limit: 1,
            // } as any

            // const ethNFTs = await Web3Api.token.getAllTokenIds(options);

            // setTotalSupply( (ethNFTs as any).total )
        }
    }, [ mintContract, account, chainId ])

    useEffect(() => {
        fetchMintInfo()

        const refreshInterval = setInterval(fetchMintInfo, 10000)
        return () => clearInterval(refreshInterval)
    }, [mintContract, account, chainId])

    const mint = useCallback(
        async ( input: any ) => {
            try {
                const tx = await mintContract?.mintToken( input.comment, 1, {
                    from: account,
                    value: input.value
                } )
                addTransaction(tx, { summary: `Mint succeed!` })
                return tx
            } catch(e) {
                console.error('mint -------', e)
                return e
            }
        },
        [ mintContract ]
    )

    return { totalSupply, mintCostBigNumber, mint }
}

export default useMintNFT