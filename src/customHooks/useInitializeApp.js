import {useEffect, useState} from "react";

export const useInitializeApp = () => {
    const [fullname, setFullname] = useState('');
    const [work, setWork] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
    const [totalPrice, setTotalPrice] = useState(list.reduce((acc, next) => acc + next.equipment.reduce((accum, nextPos) => accum + Number(nextPos.price), 0), 0) || 0);
    const [countCategory, setCountCategory] = useState('all');
    const [totalPos, setTotalPos] = useState(list.reduce((acc, next) => acc + next.equipment.length, 0));

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])


    return {fullname, setFullname, work, setWork, name, setName, desc, setDesc, price, setPrice, category, setCategory, list, setList, totalPrice, setTotalPrice, countCategory, setCountCategory, totalPos, setTotalPos}
}