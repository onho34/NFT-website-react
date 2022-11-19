import React from 'react'
import styled from 'styled-components'
import loaderImg from '../../assets/images/svg/loader.svg'
import './index.scss'

const LoaderImg = styled.img`
    animation: 2s rotate linear infinite;
`

export const Loader = ({ size='16' }) => {
    return (
        <LoaderImg src={ loaderImg } alt='pic' width={size} height={size} />
    )
}