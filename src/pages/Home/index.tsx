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

                <div id="mint">
                    <MintBox />
                </div>

                <div id="nft">
                    <NFTShow />
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
