import { BigNumber } from '@ethersproject/bignumber'
import { getAddress } from '@ethersproject/address'
import { Contract } from '@ethersproject/contracts'
import { AddressZero } from '@ethersproject/constants'
import { ethers } from 'ethers'
import { Fraction } from '../entities'

export function isAddress(value: any) {
    try {
        return getAddress(value)
    } catch {
        return false
    }
}

export function getSigner(library: any, account: any) {
    return library.getSigner(account).connectUnchecked()
}

export function getProviderOrSigner(library: any, account: any) {
    return account ? getSigner(library, account) : library
}

export function getContract(address: any, ABI: any, library: any, account: any) {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`)
    }

    return new Contract(address, ABI, getProviderOrSigner(library, account))
}

export const formatFromBalance = (value: any, decimals = 18) => {
    if (value) {
        return Fraction.from(BigNumber.from(value), BigNumber.from(10).pow(decimals)).toString()
    } else {
        return ''
    }
}

export const formatBalance = (value: any, decimals = 18, maxFraction = 0) => {
    const formatted = ethers.utils.formatUnits(value, decimals)
    if (maxFraction > 0) {
        const split = formatted.split('.')
        if (split.length > 1) {
            return split[0] + '.' + split[1].substr(0, maxFraction)
        }
    }
    return formatted
}

export const parseBalance = (value: any, decimals = 18) => {
    return ethers.utils.parseUnits(value || '0', decimals)
}

export const isEmptyValue = (text: any) =>
    ethers.BigNumber.isBigNumber(text)
        ? ethers.BigNumber.from(text).isZero()
        : text === '' || text.replace(/0/g, '').replace(/\./, '') === ''