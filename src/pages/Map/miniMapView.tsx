import { Component } from "react"
import * as PIXI from 'pixi.js'
import { miniMapSize, range } from "../../constants"
import styled from "styled-components"

type MapViewProps = {
    mapCenterPos: any,
    updateMapCenterPos: any,
    zoomLevel: any,
    updateZoomLevel: any,
}

const Wrapper = styled.div`
    width: 500px;
    height: 250px;
    background-color: #14181d;
    border-radius: 7px;
    border: 1px solid #a0a4a7;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    z-index: 99;
    margin-left: 15px;
    margin-top: 70px;
    overflow: hidden;

    .miniMapCanvas {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
`

export default class MiniMapView extends Component<MapViewProps> {
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
            this.app = new PIXI.Application({ backgroundAlpha: 0, width: miniMapSize.width, height: miniMapSize.height })

            document.getElementById('miniMapContainer')?.appendChild( this.app.view )

            /**
             * Add mountain background image sprite
             */
            const mapImg = PIXI.Sprite.from(`/assets/images/map.png`)
            mapImg.anchor.set(0.5)
            mapImg.width = miniMapSize.width
            mapImg.height = miniMapSize.height
            mapImg.x = miniMapSize.width / 2
            mapImg.y = miniMapSize.height / 2
            this.app.stage.addChild(mapImg)

            const graphics = new PIXI.Graphics()
            this.app.stage.addChild(graphics)

            this.app.ticker.add(() => {
                const centerPosition = {
                    x: this.app.view.width / 2 - (this.props.mapCenterPos.x - window.innerWidth / 2) * this.app.view.width / (range.x * this.props.zoomLevel),
                    y: this.app.view.height / 2 - (this.props.mapCenterPos.y - window.innerHeight / 2) * this.app.view.height / (range.y * this.props.zoomLevel),
                }

                const width = this.app.view.width * (window.innerWidth / (range.x * this.props.zoomLevel));
                const height = this.app.view.height * (window.innerHeight / (range.y * this.props.zoomLevel));

                graphics.clear();
                graphics.lineStyle(2, 0xffff00, 1);
                graphics.drawRect( centerPosition.x - width / 2, centerPosition.y - height / 2, width ,height );
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

    }

    onPointerMoveHandler(e: any) {

    }

    onPointerUpHandler(e: any) {

    }

    onWheelHandler(e: any) {

    }

    onTouchStartHandler(e: any) {

    }

    onTouchMoveHandler(e: any) {
    }

    onTouchEndHandler(e: any) {

    }

    render() {
        return (
            <Wrapper className="miniMapContainer top-4 left-4">
                <div className="miniMapCanvas" id="miniMapContainer"></div>
            </Wrapper>
        )
    }
}