import { useMemo } from 'react'
import { useActiveWeb3React } from ".";
import { contractAddress, mainNetworkChainId } from "../constants"

import MINT_ABI from '../constants/abis/mintContract.json';
import { getContract } from "../utils";

// returns null on errors
export function useContract(address: any, ABI: any, withSignerIfPossible = true) {
    const { library, account } = useActiveWeb3React()

    return useMemo(() => {
        if (!address || !ABI || !library) return null
        try {
            return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }
    }, [address, ABI, library, withSignerIfPossible, account])
}

export function useMintContract( withSignerIfPossible: any ) {
    return useContract(contractAddress[mainNetworkChainId].mint, MINT_ABI, withSignerIfPossible)
}