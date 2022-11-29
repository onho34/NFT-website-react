import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { useWalletModalToggle } from "../../hooks/store"
import { useIsTransactionPending } from "../../hooks/store/transactions"
import useMintNFT from "../../hooks/useMintNFT"
import { NormalButton } from "../../theme/components"
import { Loader } from "../Loader/small"

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

    @media(max-width: 768px) {
        width: 100%;

        &.expand {
            width: 100%;
        }
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

    @media(max-width: 768px) {
        width: 100%;
    }
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

    @media(max-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
    }
`

const Description = styled.p`
    font-size: 1.25rem;
    line-height: 2rem;
    margin: 0px;
    color: rgba(255,255,255,.88);

    @media(max-width: 768px) {
        width: 75%;
        margin: auto;
    }
`

const CommentInput = styled.div`
    width: 344px;
    max-width: 100%;

    .border-radius-4 {
        border-radius: 4px;
    }

    .inputWrapper {
        min-width: 0;
        cursor: text;
        row-gap: 4px;
        padding-left: 8px;
        padding-right: 8px;
        opacity: 1;
        color: rgba(255, 255, 255, 0.88);
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: rgba(111, 76, 255, 0.04);
        border: 1px solid rgba(111, 76, 255, 0.64);
        border-radius: 4px;
        box-sizing: border-box;
        transition: border 0.3s ease;
        position: relative;
        pointer-events: all;

        input {
            color: rgba(255, 255, 255, 0.88);
            margin-bottom: 0px;
            width: 100%;
            height: 30px;
            border: none !important;
            font-family: EuclidCircular,sans-serif;
            font-size: 16px;
            background: transparent;
            outline: none;
        }

        &:hover {
            border: 1px solid rgb(111, 76, 255);
            background-color: rgba(111, 76, 255, 0.1);
        }
    }

    .svgWrapper {
        flex-shrink: 0;
        position: absolute;
        inset-inline-end: 0px;
        margin-bottom: -2px;

        button {
            width: 32px;
            height: 32px;

            .svgSpan {
                position: absolute;
                inset: 0px;
                border-radius: 9999px;
                background-color: rgb(111, 76, 255);
                opacity: 0;
                transform: scale(1);
                transition: color 200ms ease,background-color 200ms ease,border-color 200ms ease,text-decoration-color 200ms ease,fill 200ms ease,stroke 200ms ease,opacity 200ms ease,box-shadow 200ms ease,text-shadow 200ms ease,transform 200ms ease,filter 200ms ease,backdrop-filter 200ms ease;
            }

            .svgSpan2 {
                display: block;
                width: 16px;
                height: 16px;
                opacity: 0.32;
                transition: opacity 200ms ease;

                svg {
                    width: 100%;
                    height: 100%;
                    fill: currentColor;
                    transform: rotate(0deg);
                }
            }
        }
    }
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
    const [comment, setComment] = useState('')
    const [ pendingTx, setPendingTx ] = useState(null)

    const isPending = useIsTransactionPending(pendingTx ?? undefined)

    const enableMintBtn = pendingTx === null || !isPending

    const { mintCostBigNumber, mint } = useMintNFT(true)
    const { account } = useWeb3React()
    const toggleWalletModal = useWalletModalToggle()

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

    const mintBtnClickHandler = async () => {
        if( !account ) {
            toggleWalletModal()
            return
        }

        try {
            const tx = await mint({
                comment: comment,
                value: mintCostBigNumber
            })

            if( tx.hash )
                setPendingTx(tx.hash)
        } catch(e: any) {
            console.error('mint process error --------', e)
        }
    }

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
                        Mint an NFT to <br className="newline" /> enter
                    </Title>

                    <Description>
                        In the text box, enter a name for your climber. Names will be unique, so if the name is already taken, you will have to pick a new untaken name before you can mint.
                    </Description>

                    <div className="flex justify-center items-center w-full my-4 mt-8">
                        <CommentInput>
                            <div className="m-0 flex flex-col w-full">
                                <div className="border-radius-4">
                                    <div className="inputWrapper m-0 flex flex-col">
                                        <div className="m-0 flex items-center justify-center">
                                            <input 
                                                type="text" 
                                                placeholder="Name your climber" 
                                                aria-label="Name your climber" 
                                                value={comment}
                                                onChange={ (e: any) => setComment(e.target.value) }
                                            />

                                            <div className="svgWrapper">
                                                <button>
                                                    <span className="svgSpan"></span>

                                                    <div className="m-0 p-0 flex flex-col justify-center items-center w-full h-full">
                                                        <span className="svgSpan2">
                                                            <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5C8.82843 9.5 9.5 8.82843 9.5 8ZM8 5.5C9.38071 5.5 10.5 6.61929 10.5 8C10.5 9.38071 9.38071 10.5 8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M6 8.5L1 8.5L1 7.5L6 7.5L6 8.5Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.3536 8.35355L8.35355 15.3535L7.64645 14.6464L14.2929 7.99999L7.64645 1.35355L8.35355 0.646439L15.3536 7.64644C15.4473 7.74021 15.5 7.86738 15.5 7.99999C15.5 8.1326 15.4473 8.25978 15.3536 8.35355Z"></path></svg>
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CommentInput>
                    </div>

                    <div>
                        <NormalButton 
                            onClick={mintBtnClickHandler}
                            disabled={ !enableMintBtn }
                        >
                            { (pendingTx && isPending) ? (
                                <>
                                    <Loader size='25' />
                                </>
                            ) : 'Mint NFT' }
                        </NormalButton>
                    </div>
                </Content>
            </div>
        </Wrapper>
    )
}

export default MintBox