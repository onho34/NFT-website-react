import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Wrapper = styled.section`
    position: relative;
`

const BackDrop = styled.div`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1783px;
    height: 998px;
    background-image: url('/assets/images/cold-6.png');
    background-repeat: no-repeat;
`

const BackDropMask = styled.div`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1962px;
    height: 572px;
    background-image: url('/assets/images/aztec.svg');
    background-repeat: no-repeat;
    mask-image: radial-gradient(closest-side, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%);
`

const ContentWrapper = styled.div`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    position: relative;
`

const Spacer = styled.div`
    height: 150px;
`

const LeftPanel = styled.div`
    width: 50%;

    .slick-dots {
        li {
            &.slick-active {
                button {
                    &::before {
                        font-size: 15px;
                    }
                }
            }

            button {
                &::before {
                    font-size: 10px;
                    color: white;
                }
            }
        }
    }
`

const RightPanel = styled.div`
    margin: 0;
    min-width: 0;
    width: 50%;
    padding-inline-start: 10%;
    z-index: 2;

    .title {
        font-weight: 600;
        font-size: 3.75rem;
        text-shadow: 0 0 80px rgb(192 219 255 / 48%), 0 0 32px rgb(65 120 255 / 24%);
        letter-spacing: -1.6px;
        line-height: 4rem;
        color: rgba(255, 255, 255, 0.96);
        margin-bottom: 1.2rem;
    }

    .description {
        font-size: 1.25rem;
        line-height: 2rem;
        margin: 0px;
        color: rgba(255,255,255,.88);
    }
`

const ImageWrapper = styled.div`
    background-color: rgba(12,10,29,1.0);
    border: 1px solid rgba(255, 255, 255, 0.16);
    padding: 24px;
    border-radius: 8px;
    position: relative;

    .wrapper {
        width: 100% !important;
        padding: 0 !important;
    }

    div {
        width: 50%;
        padding: 1rem;
        position: relative;

        img {
            width: 100%;
        }
    }
`

export const NFTShow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
    };

    return (
        <Wrapper>
            <BackDrop />
            <BackDropMask />

            <ContentWrapper>
                <Spacer />

                <div className="m-0 flex">
                    <LeftPanel className="relative">
                        <Slider {...settings}>
                            <ImageWrapper>
                                <div className="wrapper relative flex flex-wrap">
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/1.png'></img>
                                    </div>
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/2.png'></img>
                                    </div>
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/3.png'></img>
                                    </div>
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/4.png'></img>
                                    </div>
                                </div>
                            </ImageWrapper>

                            <ImageWrapper>
                                <div className="wrapper relative flex flex-wrap">
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/5.png'></img>
                                    </div>
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/6.png'></img>
                                    </div>
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/7.png'></img>
                                    </div>
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/8.png'></img>
                                    </div>
                                </div>
                            </ImageWrapper>

                            <ImageWrapper>
                                <div className="wrapper relative flex flex-wrap">
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/9.png'></img>
                                    </div>
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/10.png'></img>
                                    </div>
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/11.png'></img>
                                    </div>
                                    <div>
                                        <img alt="pic" src='/assets/images/nfts/12.png'></img>
                                    </div>
                                </div>
                            </ImageWrapper>
                        </Slider>
                    </LeftPanel>

                    <RightPanel className="relative flex flex-col justify-center">
                        <h2 className="title">A Fantastic Ghost NFTs</h2>

                        <p className="description">
                            Subgraphs can be composed into a global graph of all the world's public information. This data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes.
                        </p>
                    </RightPanel>
                </div>
            </ContentWrapper>
        </Wrapper>
    )
}

export default NFTShow