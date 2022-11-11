import create from "zustand"
import produce from "immer"
import { range, zoomRange } from "../constants";

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
	}))
}))

export default useStore
