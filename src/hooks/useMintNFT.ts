import { BigNumber } from "ethers"
import { useCallback, useEffect, useState } from "react"
import {NotificationManager} from 'react-notifications'
import { useActiveWeb3React } from "."
import { formatFromBalance } from "../utils"
import { useTransactionAdder } from "./store/transactions"
import { useMintContract } from "./useContract"

const useMintNFT = (props: any) => {
    const { account, chainId } = useActiveWeb3React()
    const mintContract = useMintContract( true )

    const [ totalSupply, setTotalSupply ] = useState(0)
    const [ mintCostBigNumber, setMintCostBigNumber ] = useState( BigNumber.from('0x013c310749028000') )

    const addTransaction = useTransactionAdder() as any

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
                const tx = await mintContract?.mintToken( input.comment, {
                    from: account,
                    value: input.value
                } )
                addTransaction(tx, { summary: `Mint succeed!` })
                return tx
            } catch(e: any) {
                console.error('mint -------', e)
                if( JSON.stringify(e).indexOf('execution reverted: Elimination has been started') !== -1 )
                    NotificationManager.warning( 'Elimination has been started.' )
                return e
            }
        },
        [ mintContract ]
    )

    return { totalSupply, mintCostBigNumber, mint }
}

export default useMintNFT