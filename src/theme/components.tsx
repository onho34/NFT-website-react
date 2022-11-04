import styled from "styled-components";

export const InputButton = styled.button`
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    :hover {
        cursor: pointer;

        svg {
            stroke: #986db2 !important;
        }
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`

export const NormalButton = styled.button`
    height: 48px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 4px;
    border: 1px solid transparent;
    transition: color 400ms ease,background-color 400ms ease,border-color 400ms ease,text-decoration-color 400ms ease,fill 400ms ease,stroke 400ms ease,opacity 400ms ease,box-shadow 400ms ease,text-shadow 400ms ease,transform 400ms ease,filter 400ms ease,backdrop-filter 400ms ease;
    color: rgba(255, 255, 255, 0.88);
    background-color: rgba(111, 76, 255, 0.64);
    font-size: 14px;
    letter-spacing: 0.4px;
    line-height: 20px;
    font-weight: 600;

    &:hover {
        background-color: rgb(139 127 255 / 64%);
    }
`