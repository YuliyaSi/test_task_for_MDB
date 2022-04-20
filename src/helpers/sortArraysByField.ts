type TSortArr = (f: number) => (a: string, b: string) => number

export const sortArraysByField: TSortArr = (field) => (a, b) => a[field] > b[field] ? 1 : -1;