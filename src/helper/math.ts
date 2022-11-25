export const rad2Ang = (rad: number) => rad * 180 / Math.PI;

export const ang2Rad = (ang: number) => ang * Math.PI / 180;

export const getRandomVal = (range: number) => Math.ceil(Math.random() * 100000000) % range;

export const isSamePoint = ( point1: any, point2: any ) => point1[0] === point2[0] && point1[1] === point2[1] && point1[2] === point2[2]

export const getFixedFloat = (val: any, len: number) => Number(val.toFixed(len))

export const getRandomValues = (start: any, end: any, count: number) => {
    const width = Math.ceil(Math.abs(start.x - end.x))
    const height = Math.ceil(Math.abs(start.y - end.y))

    const result = []

    for( let i = 0; i < count; i++ ) {
        result.push({
            x: end.x + getRandomVal(width),
            y: end.y + getRandomVal(height),
        })
    }

    return result
}

export const generateRandomColor = () => {
    let maxVal = 0xFFFFFF // 16777215.
    let randomNumber = Math. random() * maxVal as any
    randomNumber = Math. floor(randomNumber)
    randomNumber = randomNumber. toString(16)
    let randColor = randomNumber. padStart(6, 0)
    const string = `0x${randColor. toUpperCase()}`

    return parseInt(string.replace(/^#/, ''), 16)
}