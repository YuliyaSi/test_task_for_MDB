import {useEffect, useState} from "react";
import {options} from "../options";
import {IList, THook} from "../types/HooksType";

export const useCountingFromList: THook<object> = () => {
    const [categoryOptions, setCategoryOptions] = useState<string[]>(options);
    // @ts-ignore
    const [list, setList] = useState<IList>(JSON.parse(localStorage.getItem('list')) || []);
    const [filteredList, setFilteredList] = useState<IList>(list);
    const [totalPrice, setTotalPrice] = useState<number>(list.reduce((acc: number, next) => acc + next.equipment.reduce((accum, nextPos) => accum + Number(nextPos.price), 0), 0) || 0);
    const [countCategory, setCountCategory] = useState<string>('all');
    const [totalPos, setTotalPos] = useState<number>(list.reduce((acc: number, next) => acc + next.equipment.length, 0));

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
        setFilteredList(list)
    }, [list])


    return {categoryOptions, setCategoryOptions, list, setList, totalPrice, setTotalPrice, countCategory, setCountCategory, totalPos, setTotalPos, filteredList, setFilteredList}
}