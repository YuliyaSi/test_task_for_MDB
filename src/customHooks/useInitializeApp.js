import {useEffect, useState} from "react";
import {options} from "../options";

export const useInitializeApp = () => {
    const [categoryOptions, setCategoryOptions] = useState(options);
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
    const [filteredList, setFilteredList] = useState(list);
    const [totalPrice, setTotalPrice] = useState(list.reduce((acc, next) => acc + next.equipment.reduce((accum, nextPos) => accum + Number(nextPos.price), 0), 0) || 0);
    const [countCategory, setCountCategory] = useState('all');
    const [totalPos, setTotalPos] = useState(list.reduce((acc, next) => acc + next.equipment.length, 0));

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
        setFilteredList(list)
    }, [list])


    return {categoryOptions, setCategoryOptions, list, setList, totalPrice, setTotalPrice, countCategory, setCountCategory, totalPos, setTotalPos, filteredList, setFilteredList}
}