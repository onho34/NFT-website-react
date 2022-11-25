import { Component } from "react"
import * as PIXI from 'pixi.js'
import { pauseEvent } from "../../utils/helper"
import { levelArea, range, zoomRange } from "../../constants"
import { generateRandomColor, getRandomValues } from "../../helper/math"

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
    spritesArray: any

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
        const spritesArray: any[] = []
        this.spritesArray = spritesArray

        const onReady = () => {
            this.app = new PIXI.Application({ resizeTo: window, backgroundAlpha: 0, width: window.innerWidth, height: window.innerHeight })

            document.getElementById('mapContainer')?.appendChild( this.app.view )

            /**
             * Add mountain background image sprite
             */
            const mapImg = PIXI.Sprite.from(`/assets/images/map.png`)
            this.app.stage.addChild(mapImg)

            const graphics = new PIXI.Graphics()
            this.app.stage.addChild(graphics)

            const container = new PIXI.ParticleContainer(100000, {
                scale: true,
                position: true,
                rotation: true,
                uvs: true,
                alpha: true,
            })
            container._batchSize = 16383
            this.app.stage.addChild(container)

            /**
             * Level 0 ~ 3 sprites
             */
            for( let i = 0; i < 4; i++ ) {
                const result = getRandomValues((levelArea as any)[i].position[0], (levelArea as any)[i].position[1], (levelArea as any)[i].count)
                for( let j = 0; j < result.length; j++ ) {
                    const bunny = PIXI.Sprite.from(`/assets/images/card.png`) as any
                    bunny.mapPosition = {
                        x: result[j].x,
                        y: result[j].y,
                    }
                    bunny.size = (levelArea as any)[i].size
                    // bunny.tint = generateRandomColor()
                    spritesArray.push(bunny)
                    container.addChild(bunny)
                }
            }

            /**
             * Level 4 sprites
             */
            for( let i = 0; i < 2; i++ ) {
                const bunny = PIXI.Sprite.from(`/assets/images/card.png`) as any
                bunny.mapPosition = {
                    x: (levelArea as any)[4].position[i].x,
                    y: (levelArea as any)[4].position[i].y,
                }
                bunny.size = (levelArea as any)[4].size
                // bunny.tint = generateRandomColor()
                spritesArray.push(bunny)
                container.addChild(bunny)
            }

            /**
             * Level 5 sprite
             */
            const bunny = PIXI.Sprite.from(`/assets/images/card.png`) as any
            bunny.mapPosition = {
                x: (levelArea as any)[5].position.x,
                y: (levelArea as any)[5].position.y,
            }
            bunny.size = (levelArea as any)[5].size
            // bunny.tint = generateRandomColor()
            spritesArray.push(bunny)
            container.addChild(bunny)

            this.app.ticker.add(() => {
                mapImg.anchor.set(0.5)
                mapImg.width = range.x * this.props.zoomLevel
                mapImg.height = range.y * this.props.zoomLevel
                mapImg.x = this.props.mapCenterPos.x
                mapImg.y = this.props.mapCenterPos.y

                // graphics.clear()
                // graphics.lineStyle(2, 0xff0000, 1);

                // for( let i = 0; i < 5; i++ ) {
                //     graphics.drawRect( this.props.mapCenterPos.x - (levelArea as any)[i].position[0].x * this.props.zoomLevel,
                //         this.props.mapCenterPos.y - (levelArea as any)[i].position[0].y * this.props.zoomLevel,
                //         ((levelArea as any)[i].position[0].x - (levelArea as any)[i].position[1].x) * this.props.zoomLevel,
                //         ((levelArea as any)[i].position[0].y - (levelArea as any)[i].position[1].y) * this.props.zoomLevel
                //     );
                // }

                for( let i = 0; i < spritesArray.length; i++ ) {
                    const sprite = spritesArray[i]
                    sprite.anchor.set(0.5)
                    sprite.width = sprite.size * this.props.zoomLevel * 2
                    sprite.height = sprite.size * this.props.zoomLevel * 2
                    sprite.x = this.props.mapCenterPos.x - sprite.mapPosition.x * this.props.zoomLevel
                    sprite.y = this.props.mapCenterPos.y - sprite.mapPosition.y * this.props.zoomLevel
                }
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