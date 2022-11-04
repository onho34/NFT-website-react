import { useEffect, useState } from "react";
import styled from "styled-components";
import logoImg from '../../assets/images/logo.svg'
import { NormalButton } from "../../theme/components";

const Wrapper = styled.header`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--gds-header-height);
    transform: translateY(-100%);
    opacity: 0;
    background-color: rgba(12, 10, 29, 0.88);
    backdrop-filter: blur(32px);
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    transition: color 400ms ease 0s, background-color 400ms ease 0s, border-color 400ms ease 0s, text-decoration-color 400ms ease 0s, fill 400ms ease 0s, stroke 400ms ease 0s, opacity 400ms ease 0s, box-shadow 400ms ease 0s, text-shadow 400ms ease 0s, transform 400ms ease 0s, filter 400ms ease 0s, backdrop-filter 400ms ease 0s;

    &.active {
        transform: translateY(0%);
        opacity: 1;
    }
`

const MenuItem = styled.div`
    padding: 0 16px;
    font-size: 14px;
    letter-spacing: 0.4px;
    line-height: 20px;
    gap: 4px;
    color: rgba(199, 199, 199, .8);
    font-weight: 600;
    cursor: pointer;
    transition: all .5s;
    
    &:hover {
        color: rgba(255, 255, 255, .8);
    }
`

const ConnectBtn = styled.button`
`

const LogoImg = styled.div`
    img {
        margin-right: 32px;
        height: 25px;
        display: block;
    }
`

export const Header = () => {
    const [active, setActive] = useState('active')
    const [lastScroll, setLastScroll] = useState(0)

    const handleScroll = () => {
        if( window.scrollY <= lastScroll ) {
            setActive('active')
        } else {
            setActive('')
        }

        setLastScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <Wrapper className={`${active}`}>
            <div className="container flex justify-between items-center h-full w-full">
                <div className="flex justify-center items-center">
                    <LogoImg className="cursor-pointer">
                        <img alt="pic" src={logoImg}></img>
                    </LogoImg>

                    <MenuItem>
                        Mint
                    </MenuItem>

                    <MenuItem>
                        Map
                    </MenuItem>

                    <MenuItem>
                        NFT
                    </MenuItem>

                    <MenuItem>
                        FAQ
                    </MenuItem>
                </div>

                <div>
                    <NormalButton>
                        Connect Wallet
                    </NormalButton>
                </div>
            </div>
        </Wrapper>
    )
}

export default Header