import { useEffect, useState } from "react"
import styled from "styled-components"
import { NormalButton } from "../../theme/components"

const Wrapper = styled.section`
    padding-top: 10rem! important;
    padding-bottom: 10rem! important;
    margin-top: 150px;
`

const GridBg = styled.div`
    pointer-events: none;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: width,height,opacity,border,1s ease-in;
    transform: translatez(0);
    z-index: 2;
    border: 1px solid rgba(255,255,255,0.1);
    width: calc(80% - 40px);
    height: 80%;
    opacity: 1;

    &.expand {
        width: calc(100% - 40px);
    }

    &.fade {
        opacity: 0;
    }
`

const CornerGrid = styled.div`
    width: 102px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    mask-image: -webkit-gradient(linear, left top, right bottom, 
        color-stop(0.00,  rgba(0,0,0,.5)),
        color-stop(0.25,  rgba(0,0,0,.25)),
        color-stop(0.50,  rgba(0,0,0,0)),
        color-stop(1.00,  rgba(0,0,0,0)));

    &.top-left {
        top: -1px;
        left: -1px;
        transform: rotate(0deg);
    }

    &.top-right {
        top: 0px;
        right: -2px;
        transform: rotate(90deg);
    }

    &.bottom-right {
        bottom: 0px;
        right: -1px;
        transform: rotate(180deg);
    }

    &.bottom-left {
        bottom: 0px;
        left: -2px;
        transform: rotate(270deg);
    }

    .square {
        width: 10px;
        height: 10px;
        border-top: 1px solid white;
        border-left: 1px solid white;
    }
`

const Content = styled.div`
    width: 65%;
    margin: auto;
    text-align: center;
`

const Title = styled.h2`
    font-weight: 600;
    font-size: 3.75rem;
    text-shadow: 0 0 80px rgb(192 219 255 / 48%), 0 0 32px rgb(65 120 255 / 24%);
    letter-spacing: -1.6px;
    line-height: 4rem;
    color: rgba(255, 255, 255, 0.96);
    margin-bottom: 1.2rem;

    .newline {
        display: none;
    }
`

const Description = styled.p`
    font-size: 1.25rem;
    line-height: 2rem;
    margin: 0px;
    color: rgba(255,255,255,.88);
`

const Squares = () => {
    return (
        <>
            <div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div><div className="square css-dhdo4m"></div>
        </>
    )
}

export const MintBox = () => {
    const [active, setActive] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)

    const handleScroll = () => {
        if( window.scrollY <= lastScroll ) {
            setActive(true)
        } else {
            setActive(false)
        }

        setLastScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <Wrapper className="relative">            
            <div>
                <GridBg className={`${ !active ? `fade expand` : '' }`}>
                    <CornerGrid className="absolute top-left">
                        <Squares />
                    </CornerGrid>

                    <CornerGrid className="absolute top-right">
                        <Squares />
                    </CornerGrid>

                    <CornerGrid className="absolute bottom-right">
                        <Squares />
                    </CornerGrid>

                    <CornerGrid className="absolute bottom-left">
                        <Squares />
                    </CornerGrid>
                </GridBg>

                <Content className="relative">
                    <Title>
                        Mint NFT to <br className="newline" /> attend lottery
                    </Title>

                    <Description>
                        Before The Graph, teams had to develop and operate proprietary indexing servers. This required significant engineering and hardware resources and broke the important security properties required for decentralization.
                    </Description>

                    <div className="mt-8">
                        <NormalButton>Mint NFT</NormalButton>
                    </div>
                </Content>
            </div>
        </Wrapper>
    )
}

export default MintBox