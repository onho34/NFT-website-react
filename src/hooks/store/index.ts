import { useCallback } from "react";
import { useActiveWeb3React } from "..";
import { ApplicationModal } from "../../constants";
import store from "../../store";

export function useWalletModalToggle() {
    const toggleModal = store((state: any) => state.toggleModal)
    return useCallback(() => toggleModal( ApplicationModal.WALLET ), [ toggleModal ])
}

export function useModalOpen( modal: any ) {
    const openModal = store( (state: any) => state.openModal )
    return openModal === modal
}

export function useBlockNumber() {
    const { chainId } = useActiveWeb3React()

    const blockNumber = store((state: any) => state.blockNumber)

    return blockNumber[chainId ?? -1]
}