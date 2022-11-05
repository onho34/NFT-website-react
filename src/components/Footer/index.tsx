import { GitHub, Mail, Twitter, Facebook, Instagram } from "react-feather"
import styled from "styled-components"
import { Link } from 'react-scroll'

const Wrapper = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
`

const ContentWrapper = styled.div`
    flex-wrap: nowrap;
    row-gap: 32px;

    nav {
        ul {
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            row-gap: 8px;

            li {
                margin: 0;
                padding: 0;
                list-style: none;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0px;
                padding: 0 1rem;
                cursor: pointer;

                a {
                    color: rgba(255,255,255,0.88);
                    transition: color 200ms ease,background-color 200ms ease,border-color 200ms ease,text-decoration-color 200ms ease,fill 200ms ease,stroke 200ms ease;

                    &.subNav {
                        font-size: 14px;
                        line-height: 21px;
                        color: rgba(255, 255, 255, .48);
                    }

                    &:hover {
                        color: rgb(255, 255, 255);
                    }
                }
            }
        }
    }
`

const Contact = styled.div`
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
        padding-top: 16px;
        padding-bottom: 16px;
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

const Spacer = styled.div`
    height: 150px;
`

export const Footer = () => {
    return (
        <div className="relative">
            <Spacer />

            <Wrapper>
                <ContentWrapper className="m-0 p-0 flex flex-col justify-start items-center">
                    <Contact>
                        <div className="m-0 flex flex-col w-full">
                            <div className="border-radius-4">
                                <div className="inputWrapper m-0 flex flex-col">
                                    <div className="m-0 flex items-center justify-center">
                                        <input type="email" placeholder="Subscribe to our newsletter" aria-label="Subscribe to our newsletter" />

                                        <div className="svgWrapper">
                                            <button>
                                                <span className="svgSpan"></span>

                                                <div className="m-0 p-0 flex flex-col justify-center items-center w-full h-full">
                                                    <span className="svgSpan2">
                                                        <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5C8.82843 9.5 9.5 8.82843 9.5 8ZM8 5.5C9.38071 5.5 10.5 6.61929 10.5 8C10.5 9.38071 9.38071 10.5 8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.5L1 8.5L1 7.5L6 7.5L6 8.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.3536 8.35355L8.35355 15.3535L7.64645 14.6464L14.2929 7.99999L7.64645 1.35355L8.35355 0.646439L15.3536 7.64644C15.4473 7.74021 15.5 7.86738 15.5 7.99999C15.5 8.1326 15.4473 8.25978 15.3536 8.35355Z"></path></svg>
                                                    </span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Contact>

                    <nav>
                        <ul>
                            <li>
                                <Link
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    to={ 'home' }
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    to={ 'mint' }
                                >
                                    Mint
                                </Link>
                            </li>

                            <li>
                                <Link
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    to={ 'map' }
                                >
                                    Map
                                </Link>
                            </li>

                            <li>
                                <Link
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    to={ 'nft' }
                                >
                                    NFT
                                </Link>
                            </li>

                            <li>
                                <Link
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    to={ 'faq' }
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>

                        <ul className="mt-8">
                            <li>
                                <a className="subNav">Ghost Foundation</a>
                            </li>

                            <li>
                                <a className="subNav">Forum</a>
                            </li>

                            <li>
                                <a className="subNav">Testnet</a>
                            </li>

                            <li>
                                <a className="subNav">Privacy Policy</a>
                            </li>

                            <li>
                                <a className="subNav">Terms of Service</a>
                            </li>

                            <li>
                                <a className="subNav">Partnership requests</a>
                            </li>
                        </ul>

                        <ul className="my-8">
                            <li>
                                <a>
                                    <GitHub size={18} />
                                </a>
                            </li>

                            <li>
                                <a>
                                    <Twitter size={18} />
                                </a>
                            </li>

                            <li>
                                <a>
                                    <Facebook size={18} />
                                </a>
                            </li>

                            <li>
                                <a>
                                    <Instagram size={18} />
                                </a>
                            </li>

                            <li>
                                <a>
                                    <Mail size={18} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </ContentWrapper>
            </Wrapper>
        </div>
    )
}

export default Footer