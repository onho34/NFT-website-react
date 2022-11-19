import { Component } from "react"
import * as PIXI from 'pixi.js'
import { pauseEvent } from "../../utils/helper"
import { range, zoomRange } from "../../constants"

type MapViewProps = {
    mapCenterPos: any,
    updateMapCenterPos: any,
    zoomLevel: any,
    updateZoomLevel: any,
}

export default class MapView extends Component<MapViewProps> {
    app: any
    pointDownPos: any
    moveDistance: any

    constructor(props: MapViewProps) {
        super(props)

        this.onPointerDownHandler = this.onPointerDownHandler.bind(this)
        this.onPointerMoveHandler = this.onPointerMoveHandler.bind(this)
        this.onPointerUpHandler = this.onPointerUpHandler.bind(this)
        this.onWheelHandler = this.onWheelHandler.bind(this)
        this.onTouchStartHandler = this.onTouchStartHandler.bind(this)
        this.onTouchMoveHandler = this.onTouchMoveHandler.bind(this)
        this.onTouchEndHandler = this.onTouchEndHandler.bind(this)
    }

    componentDidMount(): void {
        const onReady = () => {
            this.app = new PIXI.Application({ resizeTo: window, backgroundAlpha: 0, width: window.innerWidth, height: window.innerHeight })

            document.getElementById('mapContainer')?.appendChild( this.app.view )

            /**
             * Add mountain background image sprite
             */
            const mapImg = PIXI.Sprite.from(`/assets/images/map.png`)
            this.app.stage.addChild(mapImg)
                                                                                                                                                                                                                                                                                                                        
            this.app.ticker.add(() => {    
                mapImg.anchor.set(0.5)
                mapImg.width = range.x * this.props.zoomLevel
                mapImg.height = range.y * this.props.zoomLevel
                mapImg.x = this.props.mapCenterPos.x
                mapImg.y = this.props.mapCenterPos.y
            })

            this.app.view.addEventListener('pointerdown', this.onPointerDownHandler, false)
            this.app.view.addEventListener('pointermove', this.onPointerMoveHandler, false)
            this.app.view.addEventListener('pointerout', this.onPointerUpHandler, false)
            window.addEventListener('pointerup', this.onPointerUpHandler, false)
            this.app.view.addEventListener('wheel', this.onWheelHandler, false)

            this.app.view.addEventListener('touchstart', this.onTouchStartHandler, false)
            this.app.view.addEventListener('touchmove', this.onTouchMoveHandler, false)
            this.app.view.addEventListener('touchend', this.onTouchEndHandler, false)
            window.addEventListener('touchcancel', this.onTouchEndHandler, false)
        }

        onReady()
    }

    componentWillUnmount() {
        this.app.view.removeEventListener('pointerdown', this.onPointerDownHandler, false)
        this.app.view.removeEventListener('pointermove', this.onPointerMoveHandler, false)
        this.app.view.removeEventListener('pointerout', this.onPointerUpHandler, false)
        window.removeEventListener('pointerup', this.onPointerUpHandler, false)
        this.app.view.removeEventListener('wheel', this.onWheelHandler, false)

        this.app.view.removeEventListener('touchstart', this.onTouchStartHandler, false)
        this.app.view.removeEventListener('touchmove', this.onTouchMoveHandler, false)
        this.app.view.removeEventListener('touchend', this.onTouchEndHandler, false)
        window.removeEventListener('touchcancel', this.onTouchEndHandler, false)

        this.app.destroy( true, { children: true, texture: true, baseTexture: true } )
    }

    onPointerDownHandler(e: any) {        
        pauseEvent(e)
        const clickPosition = {
            x: e.offsetX,
            y: e.offsetY
        }

        this.pointDownPos = clickPosition
        this.moveDistance = 0
    }

    onPointerMoveHandler(e: any) {
        pauseEvent(e);
        if( !this.pointDownPos )
            return

        const clickPosition = {
            x: e.offsetX,
            y: e.offsetY
        }

        const diff = {
            x: clickPosition.x - this.pointDownPos.x,
            y: clickPosition.y - this.pointDownPos.y,
        }

        const newCenterPosition = {
            x: this.props.mapCenterPos.x + diff.x,
            y: this.props.mapCenterPos.y + diff.y,
        }

        this.props.updateMapCenterPos(newCenterPosition)

        this.pointDownPos = clickPosition
    }

    onPointerUpHandler(e: any) {
        pauseEvent(e)
        this.pointDownPos = null
    }

    onWheelHandler(e: any) {
        pauseEvent(e)

        let newLevel
        if( e.deltaY > 0 ) {
            newLevel = this.props.zoomLevel - 1
        } else {
            newLevel = this.props.zoomLevel + 1
        }

        if( newLevel > zoomRange.max )
            newLevel = zoomRange.max
        if( newLevel < zoomRange.min )
            newLevel = zoomRange.min

        this.props.updateZoomLevel( newLevel )

        const newPosition = {
            x: this.app.view.width / 2 + (this.props.mapCenterPos.x - this.app.view.width / 2) * newLevel / this.props.zoomLevel,
            y: this.app.view.height / 2 + (this.props.mapCenterPos.y - this.app.view.height / 2) * newLevel / this.props.zoomLevel,
        }

        this.props.updateMapCenterPos(newPosition)
    }

    onTouchStartHandler(e: any) {

    }

    onTouchMoveHandler(e: any) {
    }

    onTouchEndHandler(e: any) {

    }

    render() {
        return (
            <div className="overflow-hidden max-h-screen max-w-screen">
                <div className="w-full h-full top-0 left-0" id="mapContainer"></div>
            </div>
        )
    }
}