import { Suspense } from 'react'
import styled from 'styled-components'
import FaqComponent from '../../components/Faq'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Intro from '../../components/Intro'
import { Loader } from '../../components/Loader'
import MintBox from '../../components/MintBox'
import NFTShow from '../../components/NFTShow'

const Wrapper = styled.div`
    position: relative;

    @media screen and (min-width: 749px) { 
        --gds-container-padding: 32px;
        --gds-header-height: 96px;
        --gds-header-height-visible: 96px;
    }

    @media screen and (max-width: 768px) {
        --gds-container-padding: 16px;
        --gds-header-height: 64px;
        --gds-header-height-visible: 64px;
    }
`

const Spacer = styled.div`
    position: relative;
    height: 150px;
`

export const Home = () => {
    return (
        <Wrapper className='container'>
            <Suspense fallback={<Loader />}>
                <Header />

                <div id="home">
                    <Spacer />
                    <Intro />
                </div>

                <div id="nft">
                    <NFTShow />
                </div>

                <div id="mint">
                    <MintBox />
                </div>

                <div id="faq">
                    <FaqComponent />
                </div>

                <Footer />
            </Suspense>
        </Wrapper>
    )
}

export default Home