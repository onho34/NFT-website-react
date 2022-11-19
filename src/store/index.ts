import create from "zustand"
import produce from "immer"
import { zoomRange } from "../constants";

const now = () => new Date().getTime()

const useStore = create((set) => ({
	mapCenterPos: {
		x: window.innerWidth / 2,
		y: window.innerHeight / 2,
	},
	updateMapCenterPos: (val: any) => set(produce(state => {
		state.mapCenterPos.x = val.x;
		state.mapCenterPos.y = val.y;
	})),

	zoomLevel: 10,
	updateZoomLevel: (val: any) => set(produce((state) => {
		state.zoomLevel = val

		if( state.zoomLevel > zoomRange.max )
			state.zoomLevel = zoomRange.max
		if( state.zoomLevel < zoomRange.min )
			state.zoomLevel = zoomRange.min
	})),

    openModal: null,
    toggleModal: ( modal: any ) => set(produce(state => {
        state.openModal = state.openModal ? null : modal
    })),

	transactions: {},
    addTransaction: ({ chainId, from, hash, approval, summary, claim }: any) => set(produce(state => {
        if (state.transactions[chainId]?.[hash]) {
            throw Error('Attempted to add existing transaction.')
        }
        const txs = state.transactions[chainId] ?? {}
        txs[hash] = { hash, approval, summary, claim, from, addedTime: now() }
        state.transactions[chainId] = txs
    })),
    finalizeTransaction: ({ hash, chainId, receipt }: any) => set(produce(state => {
        const tx = state.transactions[chainId]?.[hash]
        if (!tx) {
            return
        }
        tx.receipt = receipt
        tx.confirmedTime = now()
    })),
    checkedTransaction: ({ chainId, hash, blockNumber }: any) => set(produce(state => {
        const tx = state.transactions[chainId]?.[hash]
        if (!tx) {
            return
        }
        if (!tx.lastCheckedBlockNumber) {
            tx.lastCheckedBlockNumber = blockNumber
        } else {
            tx.lastCheckedBlockNumber = Math.max(blockNumber, tx.lastCheckedBlockNumber)
        }
    })),

    blockNumber: {},
    updateBlockNumber: ({ chainId, blockNumber }: any) => set(produce(state => {
        if (typeof state.blockNumber[chainId] !== 'number') {
            state.blockNumber[chainId] = blockNumber
        } else {
            state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId])
        }
    }))
}))

export default useStore
