import { useEffect } from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

const SideBar = styled.div`
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    height: 100vh;
    width: 240px;
    z-index: 10;
    pointer-events: all;
    transform: translateZ(0px);
    transition: all .3s;
    animation: 0.4s ease-in 0s 1 normal none running fadeInRight;
    overflow-y: auto;
    box-shadow: rgb(0 0 0 / 14%) 0px 0px 16px, rgb(0 0 0 / 14%) 0px 0px 64px, rgb(0 0 0 / 32%) 0px 0px 128px;
    right: -240px;

    &.active {
        right: 0;
    }
`

const Wrapper = styled.div`
    width: 240px;
    height: 100vh;
    background: linear-gradient(0deg, rgba(111, 76, 255, 0.04), rgba(111, 76, 255, 0.04)), linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), rgb(12, 10, 29);
    padding: 48px;
`

const Title = styled.div`
    margin: 0px 0px 6px;
    min-width: 0px;
    display: flex;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.64);
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    text-transform: uppercase;
    height: 36px;
    gap: 3px;
`

const Menu = styled.div`
    margin: 0px;
    min-width: 0px;
    display: flex;
    flex-direction: column;
`

const MenuItem = styled.div`
    height: 52px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgba(255, 255, 255, 0.64);
`

export const MenuSideBar = ({ show, setShow }: any) => {
    const detectTarget = (event: any) => {
        if( !event.target.matches('#dropdownMenuBtn') && !event.target.matches('#menuSideBar') ) {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', detectTarget)

        return () => {
            window.removeEventListener('click', detectTarget)
        }
    })

    return (
        <SideBar className={`${show ? 'active' : ''} fixed top-0`}>
            <Wrapper id="menuSideBar">
                <Title>Rise To Top</Title>

                <Menu>
                    <Link
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        to={ 'home' }
                    >
                        <MenuItem onClick={() => setShow(false)}>
                            Home
                        </MenuItem>
                    </Link>

                    <Link
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        to={ 'mint' }
                    >
                        <MenuItem onClick={() => setShow(false)}>
                            The Mountain
                        </MenuItem>
                    </Link>

                    <Link
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        to={ 'map' }
                    >
                        <MenuItem onClick={() => setShow(false)}>
                            Map
                        </MenuItem>
                    </Link>

                    <Link
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        to={ 'nft' }
                    >
                        <MenuItem onClick={() => setShow(false)}>
                            NFT
                        </MenuItem>
                    </Link>

                
                    <Link
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        to={ 'faq' }
                    >
                        <MenuItem onClick={() => setShow(false)}>
                            FAQ
                        </MenuItem>
                    </Link>
                </Menu>
            </Wrapper>
        </SideBar>
    )
}

export default MenuSideBar
