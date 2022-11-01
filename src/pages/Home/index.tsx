import { Suspense } from 'react'
import styled from 'styled-components'
import { Loader } from '../../components/Loader'

const Wrapper = styled.div`
    position: relative;
`

export const Home = () => {
    return (
        <Wrapper>
            <Suspense fallback={<Loader />}>
                
            </Suspense>
        </Wrapper>
    )
}

export default Home