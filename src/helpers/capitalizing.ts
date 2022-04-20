type TCapitalize = (v: string) => string;

export const capitalizing: TCapitalize = (value) => value.split(' ').map(i => i[0].toUpperCase() + i.slice(1)).join(' ');