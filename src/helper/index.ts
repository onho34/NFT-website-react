export const shortenAddress = ( address: string, count = 7 ) => {
    return address.slice( 0, count ) + '...' + address.slice( -count )
}

export const formattedNumber = ( number: any ) => {
    let prefix = ''
    if( Math.floor(number / 10) === 0 )
        prefix = '000'
    else if( Math.floor(number / 100) === 0 )
        prefix = '00'
    else if( Math.floor(number / 1000) === 0 )
        prefix = '0'
    
    return prefix + number
}