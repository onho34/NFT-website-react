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

    @media(max-width: 768px) {
        width: 100%;
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

    @media(max-width: 768px) {
        text-align: center;
        width: 100%;
        padding-inline-start: 0%;

        .title {
            font-size: 2rem;
            line-height: 3rem;
        }

        .description {
            font-size: 1.25rem;
            line-height: 2rem;
            margin: 0px;
            color: rgba(255,255,255,.88);

            margin-bottom: 2rem;
        }
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
        width: 100%;
        padding: 1rem;
        position: relative;

        img {
            width: 100%;
        }
    }
`

const PanelWrapper = styled.div`
    @media(max-width: 768px) {
        flex-direction: column-reverse;
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

                <PanelWrapper className="m-0 flex">
                    <LeftPanel className="relative">
                        <Slider {...settings}>
                            <ImageWrapper>
                                <div className="wrapper relative flex flex-wrap">
                                    <div>
                                        <video muted autoPlay loop>
                                            <source src="/assets/videos/sample.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </ImageWrapper>

                            <ImageWrapper>
                                <div className="wrapper relative flex flex-wrap">
                                    <div>
                                        <video muted autoPlay loop>
                                            <source src="/assets/videos/sample.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </ImageWrapper>

                            <ImageWrapper>
                                <div className="wrapper relative flex flex-wrap">
                                    <div>
                                        <video muted autoPlay loop>
                                            <source src="/assets/videos/sample.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </ImageWrapper>

                            <ImageWrapper>
                                <div className="wrapper relative flex flex-wrap">
                                    <div>
                                        <video muted autoPlay loop>
                                            <source src="/assets/videos/sample.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </ImageWrapper>
                        </Slider>
                    </LeftPanel>

                    <RightPanel className="relative flex flex-col justify-center">
                        <h2 className="title">Elimination schedule</h2>

                        <p className="description">
                            This is our elimination schedule.
                        </p>
                        
                        <br/>

                        <h2 className="title">Payout schedule</h2>
                        
                        <p className="description">
                            This is the game elimination schedule.
                        </p>
                    </RightPanel>
                </PanelWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default NFTShow