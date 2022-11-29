import styled from "styled-components"
import { NormalButton } from "../../theme/components"
import mountImg from '../../assets/images/mountain.png'
import { ArrowRight } from "react-feather"

const LeftPanel = styled.div`
    flex-basis: 70%;
    position: relative;
    z-index: 10;
    pointer-events: none;
    margin-top: -5px;

    @media(max-width: 768px) {
        flex-basis: 100%;
    }
`

const Title = styled.h1`
    font-weight: 600;
    font-size: 6rem;
    line-height: 1;
    letter-spacing: -2px;
    text-shadow: 0 0 80px rgb(192 219 255 / 48%), 0 0 32px rgb(65 120 255 / 24%);
    color: rgba(255, 255, 255, 0.96);
    pointer-events: none;
    margin-bottom: 3rem;
    margin-top: 0rem;

    @media(max-width: 768px) {
        font-size: 3rem;
        margin-bottom: 20px;
    }
`

const SubTitle = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin: 0px;
    color: rgba(255,255,255,.88);
    margin-bottom: 1rem;
    width: 70%;

    @media(max-width: 768px) {
        width: 100%;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 40px;
    pointer-events: all;
`

const RightPanel = styled.div`
    position: absolute;
    right: 0px;
    top: -40px;
    pointer-events: none;

    @media(max-width: 768px) {
        left: 0;
        right: auto;
        height: 300px;
        top: -90px;
        opacity: 0.5;
    }
`

const GalleryWrapper = styled.div`
    transform-origin: right center;
    transform: perspective(120px) rotateY(-4deg) translatez(0) translatex(-80px);
    z-index: 0;
    will-change: -webkit-mask-position,-moz-mask-position,mask-position,transform;
    overflow: hidden;
    mask-image: radial-gradient(circle at 50% 42%, black 10%, rgba(0, 0, 0, 0.1) 80%);
    mask-position: 0% 50%;
    mask-repeat: no-repeat;
    mask-size: 200% 200%;
    right: -80px;
    padding: 1rem;

    img {
        height: 100%;
    }

    @media(max-width: 768px) {

    }
`

const ColdBG = styled.div`
    display: none;

    @media(max-width: 768px) {
        display: block;
        background-image: radial-gradient(100% 100%, rgba(111,76,255,0.32) 0%, rgba(76,102,255,0.00) 100%);
        width: 840px;
        height: 840px;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        top: -150px;
        opacity: 0.32;
        z-index: 5;
    }
`

export const Intro = () => {
    return (
        <div className="relative flex">
            <ColdBG />

            <LeftPanel>
                <Title>
                    <br/> Rise to the Top <br/> 
                </Title>

                <SubTitle>
                    Riches await at the top of the mountain, but only for those who dare to climb.
                </SubTitle>

                <ButtonWrapper>
                    <NormalButton className="flex items-center justify-center">
                        Explore Map <ArrowRight size={18} className={'ml-2'} />
                    </NormalButton>
                </ButtonWrapper>
            </LeftPanel>

            <RightPanel className="h-full">
                <GalleryWrapper className="relative h-full">
                    <img alt="pic" src={ mountImg } />
                </GalleryWrapper>
            </RightPanel>
        </div>
    )
}

export default Intro