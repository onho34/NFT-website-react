import styled from "styled-components";
import logoImg from '../../assets/images/logo.svg'
import { NormalButton } from "../../theme/components";
import { useLocation, useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { useModalOpen, useWalletModalToggle } from "../../hooks/store";
import { ApplicationModal } from "../../constants";
import { shortenAddress } from "../../helper";
import WalletModal from "../WalletModal";

const Wrapper = styled.header`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    // height: var(--gds-header-height);
    transform: translateY(-100%);
    opacity: 0;
    background-color: rgba(12, 10, 29, 0.88);
    backdrop-filter: blur(32px);
    border-bottom: 1px solid rgb(145 145 145 / 20%);
    transition: color 400ms ease 0s, background-color 400ms ease 0s, border-color 400ms ease 0s, text-decoration-color 400ms ease 0s, fill 400ms ease 0s, stroke 400ms ease 0s, opacity 400ms ease 0s, box-shadow 400ms ease 0s, text-shadow 400ms ease 0s, transform 400ms ease 0s, filter 400ms ease 0s, backdrop-filter 400ms ease 0s;

    &.active {
        transform: translateY(0%);
        opacity: 1;
    }
`

const MenuItem = styled.div`
    padding: 0.5rem 16px;
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

    &.active {
        color: #fff;
        border-bottom: 1px solid #fff;
    }
`

const LogoImg = styled.div`
    img {
        margin-right: 32px;
        height: 25px;
        display: block;
    }
`

const MenuGroup = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const AddressWrapper = styled.div`
    border-radius: 100vw;
    border: 1px solid #2b3137;
    padding: .2rem 1rem;
    cursor: pointer;
`

export const MapHeader = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const { account } = useWeb3React()

    const toggleWalletModal = useWalletModalToggle()

    const walletModalOpen = useModalOpen( ApplicationModal.WALLET )

    return (
        <Wrapper className={`active py-2`}>
            <div className="container flex justify-between items-center h-full w-full">
                <div className="flex justify-center items-center">
                    <LogoImg className="cursor-pointer" onClick={() => navigate('/')}>
                        <img alt="pic" src={logoImg}></img>
                    </LogoImg>

                    <MenuGroup className="flex justify-center items-center">
                        <MenuItem onClick={() => navigate('/')}>
                            Home
                        </MenuItem>

                        <MenuItem onClick={() => navigate('/map')} className={`${ location.pathname === '/map' ? 'active' : '' }`}>
                            The Mountain
                        </MenuItem>

                        <MenuItem onClick={() => navigate('/nfts')} className={`${ location.pathname === '/nfts' ? 'active' : '' }`}>
                            NFTs
                        </MenuItem>
                    </MenuGroup>
                </div>

                <div className="flex justify-center items-center">
                    { account 
                        ? (
                            <AddressWrapper onClick={toggleWalletModal}>
                                { shortenAddress( account, 5 ) }
                            </AddressWrapper>
                        )
                        : (
                            <NormalButton onClick={ toggleWalletModal }>
                                Connect Wallet
                            </NormalButton>
                        )
                     }
                </div>
            </div>

            <WalletModal 
                isOpen={walletModalOpen}
                onClose={ toggleWalletModal }
            />
        </Wrapper>
    )
}

export default MapHeader