type TLower = (a: string) => string;

export const setToLowerCase: TLower = (value) => value.split(' ').map(i => i.toLowerCase()).join('')