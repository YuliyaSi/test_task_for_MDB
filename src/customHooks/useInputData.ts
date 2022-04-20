import { useState } from "react";

export const useInputData = () => {
    const [fullname, setFullname] = useState<string>('');
    const [work, setWork] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [price, setPrice] = useState<number | string>('');
    const [category, setCategory] = useState<string>('');


    return [fullname, setFullname, work, setWork, name, setName, desc, setDesc, price, setPrice, category, setCategory] as const;
}