import {useContext, useState} from "react";
import {options} from "../options";
import {AppContext} from "../context/context";

export const useCountingFromList = () => {

    // @ts-ignore
    const { list } = useContext(AppContext)

    const [categoryOptions, setCategoryOptions] = useState<string[]>(options);
    const [totalPrice, setTotalPrice] = useState<number>(list.reduce((acc: number, next: { equipment: object[]; }) => acc + next.equipment.reduce((accum: number, nextPos: { price: number; }) => accum + Number(nextPos.price), 0), 0) || 0);
    const [countCategory, setCountCategory] = useState<string>('all');
    const [totalPos, setTotalPos] = useState<number>(list.reduce((acc: number, next: { equipment: any[]; }) => acc + next.equipment.length, 0));

    return [categoryOptions, setCategoryOptions, totalPrice, setTotalPrice, countCategory, setCountCategory, totalPos, setTotalPos] as const;
}