export const capitalizing = (value) => {
    return value.split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ');
}