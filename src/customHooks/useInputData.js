import { useState } from "react";


export const useInputData = () => {
    const [fullname, setFullname] = useState('');
    const [work, setWork] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');


    return {fullname, setFullname, work, setWork, name, setName, desc, setDesc, price, setPrice, category, setCategory}
}