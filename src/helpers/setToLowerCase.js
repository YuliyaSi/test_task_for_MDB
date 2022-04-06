export const setToLowerCase = (value) => {
    return value.split(' ').map(i => i.toLowerCase()).join('')
}