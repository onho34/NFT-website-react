import MapHeader from "../../components/Header/mapHeader"
import useStore from "../../store"
import MapView from "./mapView"
import MiniMapView from "./miniMapView"

export const Map = () => {
    const mapCenterPos = useStore((state: any) => state.mapCenterPos)
    const updateMapCenterPos = useStore((state: any) => state.updateMapCenterPos)

    const zoomLevel = useStore((state: any) => state.zoomLevel)
    const updateZoomLevel = useStore((state: any) => state.updateZoomLevel)

    return (
        <>
            <MapHeader />

            <MapView 
                mapCenterPos={ mapCenterPos }
                updateMapCenterPos={ updateMapCenterPos }
                zoomLevel={ zoomLevel }
                updateZoomLevel={ updateZoomLevel }
            />

            <MiniMapView 
                mapCenterPos={ mapCenterPos }
                updateMapCenterPos={ updateMapCenterPos }
                zoomLevel={ zoomLevel }
                updateZoomLevel={ updateZoomLevel }
            />
        </>
    )
}

export default Map