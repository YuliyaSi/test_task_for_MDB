import {useState} from "react";

export const useEditableFields = (equip) => {
    const [editName, setEditName] = useState(equip.name);
    const [editDesc, setEditDesc] = useState(equip.desc);
    const [editOption, setEditOption] = useState(equip.option);
    const [editPrice, setEditPrice] = useState(equip.price);

    return { editName, setEditName, editDesc, setEditDesc, editOption, setEditOption, editPrice, setEditPrice }
}