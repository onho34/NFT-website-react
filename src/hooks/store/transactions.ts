import { useCallback } from "react";
import { useActiveWeb3React } from ".."
import store from "../../store";

export function useTransactionAdder() {
    const { chainId, account } = useActiveWeb3React()

    const addTransaction = store( (state: any) => state.addTransaction )

    return useCallback(
        (
            response: any,
            {
                summary,
                approval,
                claim
            }: any
        ) => {
            if( !account ) return
            if( !chainId ) return
            
            const { hash } = response
            if( !hash ) {
                throw Error('No transaction hash found.')
            }
            
            addTransaction({ hash, from: account, chainId, approval, summary, claim })
        },
        [chainId, account]
    )
}

// returns all the transactions for the current chain
export function useAllTransactions() {
    const { chainId } = useActiveWeb3React()
    
    const transactions = store( (state: any) => state.transactions  )

    return chainId ? transactions[chainId] ?? {} : {}
}

export function useIsTransactionPending(transactionHash: any) {
    const transactions = useAllTransactions()

    if (!transactionHash || !transactions[transactionHash]) return false

    return !transactions[transactionHash].receipt
}