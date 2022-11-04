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

export const FaqComponent = () => {
    const data = {
        rows: [
            {
                title: "What is Ghost nft?",
                content: "Ghosts are a collection of 10,000 unique characters battling for their existence on the Ethereum blockchain."
            },
            {
                title: "How much does a Ghost cost?",
                content: "Ghosts will cost 0.06 ETH + Gass Fee on both presale and launch day."
            },
            {
                title: "When will my Ghost be revealed?",
                content: "After reaching 100% all Ghosts will be revealed on opensea."
            },
            {
                title: "What are my benefits as a holder?",
                content: "Holders will automatically join Buffs private club where all the fun begins. As a member, you will be part of all activities and future ideas. As a holder, you will have the ability to make a change on our journey by being part of taking decisions for every step we take together as a community."
            },
            {
                title: "How can I own a Ghost?",
                content: "The only way to own a Ghost before revealing will be by minting one on ghostnft.com"
            },
            {
                title: "What about royalties?",
                content: "The royalties will be 5%. 50% FOR THE COMMUNITY"
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
                        Learn more about the lottery and RiseToTop community.
                    </Description>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="w-4/5">
                        { data.rows.map((item: any, index: number) => (
                            <Question key={`question${ index }`} title={ item.title } content={ item.content } index={ index }/>
                        )) }
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default FaqComponent