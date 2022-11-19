export const shortenAddress = ( address: string, count = 7 ) => {
    return address.slice( 0, count ) + '...' + address.slice( -count )
}