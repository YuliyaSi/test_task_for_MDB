import {useState} from "react";
import {IEquip, TEditHook} from "../types/HooksType";


export const useEditableFields: TEditHook<IEquip, object> = (equip) => {
    const [editName, setEditName] = useState(equip.name);
    const [editDesc, setEditDesc] = useState(equip.desc);
    const [editOption, setEditOption] = useState(equip.option);
    const [editPrice, setEditPrice] = useState(equip.price);

    return { editName, setEditName, editDesc, setEditDesc, editOption, setEditOption, editPrice, setEditPrice }
}