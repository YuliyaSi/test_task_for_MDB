import React, {useContext, useState} from 'react';
import {AppContext} from "../../context/context";
import {FiDelete, FiEdit2} from "react-icons/fi";
import {Button, Input, Select} from "../../styled/Input_data_style";
import {useEditableFields} from "../../customHooks/useEditableFields";
import {arraysEqual} from "../../helpers/equalityArrays";
import {MdOutlineFileDownloadDone} from "react-icons/md";
import {capitalizing} from "../../helpers/capitalizing";

function Output_list_Row({ fullname, work, ind, equipment }) {

    const {deleteFromList, updateList, categoryOptions} = useContext(AppContext);
    const { editName, setEditName, editDesc, setEditDesc, editOption, setEditOption, editPrice, setEditPrice } = useEditableFields(equipment)
    const [editMode, setEditMode] = useState(false)

    const editData = (fullname, work, prev_name, prev_desc, prev_option, prev_price, name, desc, option, price) => {
            if (!arraysEqual(Object.values(equipment), [name, desc, option, price])) {
                updateList(fullname, work, prev_name, prev_desc, prev_option, prev_price, name, desc, option, price);
            }
            setEditMode(false)
    }

    return (
                    <tr>
                        <td>{ind + 1}</td>
                        <td>
                            {editMode ? <Input value={editName} onChange={(e) => setEditName(e.target.value)} edit/> : capitalizing(equipment.name)}
                        </td>
                        <td>
                            {editMode ? <Input value={editDesc} onChange={(e) => setEditDesc(e.target.value)} edit/> : capitalizing(equipment.desc)}
                        </td>
                        <td>
                            {editMode ?
                                <Select value={editOption} onChange={(e) => setEditOption(e.target.value)} edit>
                                    {categoryOptions.map((opt, ind) => <option key={ind} value={opt}>{opt}</option>)}
                                </Select> :
                                equipment.option}
                        </td>
                        <td>
                            {editMode ? <Input value={editPrice} onChange={(e) => setEditPrice(e.target.value)} edit/> : equipment.price + '$'}
                        </td>
                        <td className='with_btn'>
                            <Button onClick={() => deleteFromList(fullname, work, equipment.name)}>
                                <FiDelete/>
                            </Button>
                            <Button>
                                {editMode ? <MdOutlineFileDownloadDone onClick={() => editData(fullname, work, equipment.name, equipment.desc, equipment.option, equipment.price, editName, editDesc, editOption, editPrice)}/>
                                    : <FiEdit2 onClick={() => setEditMode(true)}/>
                                }
                            </Button>
                        </td>
                    </tr>
    );
}

export default Output_list_Row;