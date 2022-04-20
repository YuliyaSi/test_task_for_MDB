export type THook<T> = () => T;

export interface IEquip {
    name: string,
    desc: string,
    option: string,
    price: number
}
export interface IUser {
    fullname: string,
    work: string,
    equipment: IEquip[],
}

export type IList = IUser[];

export type TEditHook<T, K> = (a: T) => K;

