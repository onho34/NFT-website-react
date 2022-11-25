import styled from "styled-components"
import MapHeader from "../../components/Header/mapHeader"
import { formattedNumber } from "../../helper"
import useNFTAlchemy from "../../hooks/useNFTAlchemy"
import { NormalButton } from "../../theme/components"

const Wrapper = styled.div`
    position: relative;
    text-align: center;
    min-height: 100vh;

    &:before {
        display: block;
        content: '';
        width: 616px;
        height: 716px;
        top: 0px;
        left: calc((1064px - 100vw) / 2);
        background-image: url('/assets/images/warm-3.svg');
        background-repeat-y: no-repeat;
        position: absolute;
        filter: blur(32px);
        z-index: 0;
    }
`

const Title = styled.h3`
    font-weight: 600;
    font-size: 3rem;
    text-shadow: 0 0 80px rgb(192 219 255 / 48%), 0 0 32px rgb(65 120 255 / 24%);
    letter-spacing: -1.2px;
    color: rgba(255, 255, 255, 0.96);
    margin-bottom: 1.2rem;

    @media(max-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
    }
`

const Description = styled.p`
    font-size: 1.25rem;
    line-height: 2rem;
    margin: auto;
    color: rgba(255,255,255,.88);
    max-width: 824px;

    @media(max-width: 768px) {
        width: 75%;
        margin: auto;
    }
`

const Spacer = styled.div`
    height: 100px;
`

const ItemWrapper = styled.div`
    background-color: transparent;
    box-shadow: rgb(20 26 40 / 20%) 0px 7px 42px;
    border-radius: 4px;
    overflow: hidden;
    will-change: transform;
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
    margin: 1rem;

    .wrapper {
        border-radius: 4px;
        overflow: hidden;
        max-width: 280px;

        .imgBack {
            position: absolute;
            top: 0px;
            height: 220px;
            width: 100%;
            background: linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.08) 100%),linear-gradient(180deg,rgba(12,10,29,0) 0%,rgba(12, 10, 29, 0.4) 100%);
        }

        video {
            height: 220px;
            object-fit: cover;
        }

        .descriptionWrapper {
            padding: 1rem 1.5rem;
            text-align: left;
            width: 100%;
            // min-height: 100px;
            bottom: 0px;
            background: linear-gradient(180deg,#0C0A1D 0%,rgba(12,10,29,0.32) 100%),rgba(255,255,255,0.08);
            border-radius: 0 0 8px 8px;

            .title {
                h3 {
                    margin-bottom: 8px;
                    font-size: 1.17rem;
                }
            }

            .description {
                margin: 0;
                min-width: 0;
                display: flex;
                justify-content: space-between;
                width: 100%;
                
                .date {
                    opacity: 0.3;
                }
            }
        }
    }
`

export const NFTs = () => {
    const { myNFTData } = useNFTAlchemy()

    return (
        <>
            <MapHeader />

            <Wrapper className="container w-full">
                <Spacer />

                <Title>
                    My RiseToTop NFTs
                </Title>

                <Description>
                    Lorem Isum Lorem Isum Lorem Isum Lorem Isum Lorem Isum Lorem Isum
                </Description>

                <div className="flex justify-center items-center mt-8">
                    { myNFTData.map((item: any, index: number) => (
                        <ItemWrapper key={`nftdata${index}`}>
                            <div className="wrapper">
                                <div className="imgBack" />

                                <video muted autoPlay loop>
                                    <source src="/assets/videos/sample.mp4" type="video/mp4" />
                                </video>

                                <div className="descriptionWrapper">
                                    <div className="title">
                                        <h3>#{ formattedNumber(item.tokenId) } - <b>Lvl { item.level }</b></h3>
                                    </div>

                                    <div className="description">
                                        <small>{ item.comment }</small> &nbsp;&nbsp;
                                        <small className="date">Rising</small>
                                    </div>

                                    <div className="w-full flex justify-center mt-2">
                                        <NormalButton disabled>
                                            Claim Bonus
                                        </NormalButton>
                                    </div>
                                </div>
                            </div>
                        </ItemWrapper>
                    )) }
                </div>
            </Wrapper>
        </>
    )
}

export default NFTs