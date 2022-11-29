import styled from "styled-components"

const Spacer = styled.div`
    height: 150px;
`

const Wrapper = styled.section`
    position: relative;
    margin: auto;
`

const BackGround = styled.div`
    height: 1000px;
    width: 100vw;
    position: absolute;
    left: calc((1320px - 100vw) / 2);
    top: -180px;
    opacity: 0.32;
    display: block;
    content: '';
    background-image: url('/assets/images/cold-2.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    z-index: 0;
`

const Title = styled.h3`
    font-size: 2.5rem;
    font-weight: 600;
    text-shadow: 0 0 64px rgb(192 219 255 / 48%), 0 0 16px rgb(65 120 255 / 24%);
    letter-spacing: -1.2px;
    color: rgba(255, 255, 255, 0.96);
    margin-bottom: 1.2rem;
    text-align: center;
`

const Description = styled.p`
    font-size: 1.25rem;
    line-height: 2rem;
    color: rgba(255,255,255,.88);
    max-width: 840px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
`

const Divider = styled.div`
    box-sizing: border-box;
    min-width: 0;
    position: relative;
    height: 1px;
    background-color: rgba(255,255,255,.16) !important;
    margin: 0 auto !important;
    max-width: none !important;
    width: 100% !important;

    &::before, &::after {
        content: close-quote;
        position: absolute;
        display: block;
        width: 7px;
        height: 7px;
        top: 0px;
        bottom: 0px;
        margin: auto 0;
        border: #85858f 1px solid;
        transform: rotate(45deg);
    }

    &::before {
        left: -8px;
    }

    &::after {
        right: -8px;
    }
`

const QuestionTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    text-shadow: 0 0 64px rgb(192 219 255 / 48%), 0 0 16px rgb(65 120 255 / 24%);
    letter-spacing: -1.2px;
    color: rgba(255, 255, 255, 0.96);
    margin-bottom: .5rem;
    text-align: left;
`

const QuestionAnswer = styled.div`
    font-size: 1rem;
    line-height: 2rem;
    color: rgba(255,255,255,.88);
    // max-width: 840px;
    width: 100%;
    margin: 0 auto;
    text-align: left;
`

const QuestionWrapper = styled.div`
    width: 80%;

    @media(max-width: 768px) {
        width: 100%;
    }
`

export const FaqComponent = () => {
    const data = {
        rows: [
            {
                title: "What is Rise to the Top NFT?",
                content: "Rise to the Top is a 10,000 climber NFT collection that are uniquely named and will be your game piece in the Rise to the Top game. Pieces will be eliminated in accordance with the elimination schedule, remaining pieces will be able to claim sums of Ethereum based on position reached in accordance with the payout schedule."
            },
            {
                title: "How much does a Rise to the Top climber cost?",
                content: "Rise to the Top climbers will cost .5 Ethereum to attend the competition."
            },
            {
                title: "When will the elimination process start?",
                content: "The elimination process will start after 48 hours from the start of the minting or 24 hours after all 10,000 NFTs have been minted."
            },
            {
                title: "What do I do with my climber NFT?",
                content: "Once the game begins, elimination level will start to rise. Check back each day to view the status of your climber and see if you are still on the mountain. The higher up the mountain you make it, the more you win."
            },
            {
                title: "How many winners are there?",
                content: "At a full mint out, there will be 1,113 winners with 1 NFT that will rise to the top, getting 2000x their original contribution"
            },
            {
                title: "How can I trust this project?",
                content: "We use chain link oracle for random number generation for elimination and some trustable 3rd party audit."
            },
            {
                title: "What happens if the project does not fully mint out in the 48 hours?",
                content: "In the rare case that this happens, the game will proceed in accordance with the whitepaper as the prizes are setup based on the percentage of the collective mint amount in Ethereum."
            }
        ]
    };

    const Question = ({ title, content, index }: any) => {
        return (
            <div className="w-full">
                { index === 0 ? <Divider /> : null }

                <div className="py-4">
                    <QuestionTitle>{title}</QuestionTitle>
                    <QuestionAnswer>{content}</QuestionAnswer>
                </div>

                <Divider />
            </div>
        )
    }

    return (
        <>
            <Spacer />

            <Wrapper className="relative">
                <BackGround />

                <div className="mb-12">
                    <Title>FAQ</Title>
                    <Description>
                        Learn more about the Rise to the Top game and community.
                    </Description>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <QuestionWrapper>
                        { data.rows.map((item: any, index: number) => (
                            <Question key={`question${ index }`} title={ item.title } content={ item.content } index={ index }/>
                        )) }
                    </QuestionWrapper>
                </div>
            </Wrapper>
        </>
    )
}

export default FaqComponent