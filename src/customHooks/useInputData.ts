import { useState } from "react";
import {THook} from "../types/HooksType";

export const useInputData: THook<Object> = () => {
    const [fullname, setFullname] = useState<string>('');
    const [work, setWork] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [price, setPrice] = useState<number>();
    const [category, setCategory] = useState<string>('');


    return {fullname, setFullname, work, setWork, name, setName, desc, setDesc, price, setPrice, category, setCategory}
}