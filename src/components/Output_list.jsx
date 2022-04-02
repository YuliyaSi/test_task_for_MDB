import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import {Table, WrapperOut} from "../styled/Output_list_styles";
import {FiDelete, FiEdit2} from "react-icons/fi";
import {Button, Select} from "../styled/Input_data_style";

function OutputList() {

    const {list, deleteFromList, countPrice, totalPrice, totalPos, countCategory, setName, setDesc, setPrice, setCategory} = useContext(AppContext);

    const [editMode, setEditMode] = useState(false);

    if (list.length === 0) return;

    return (
        <WrapperOut>
            {list.map((item, index) => {
                if (item.equipment.length !== 0) return <Table key={index}>
                    <caption>
                        <span>{item.fullname} - {item.work}</span>
                    </caption>
                    <thead>
                    <tr>
                        <td>№</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Delete</td>
                    </tr>
                    </thead>
                    <tbody>
                    {item.equipment.map((listItem, ind) => <tr key={listItem.name}>
                        <td>{ind + 1}</td>
                        <td>
                            {editMode ? <input/> : listItem.name}
                        </td>
                        <td>
                            {editMode ? <input/> : listItem.desc}
                        </td>
                        <td>
                            {editMode ? <input/> : listItem.option}
                        </td>
                        <td>
                            {editMode ? <input/> : listItem.price + '$'}
                        </td>
                        <td className='with_btn'>
                            <Button onClick={() => deleteFromList(item.fullname, item.work, listItem.name)}>
                                <FiDelete/>
                            </Button>
                            <Button>
                                <FiEdit2/>
                            </Button>
                        </td>
                    </tr>)}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={3}>Total for {item.fullname}:</td>
                        <td colSpan={3}>{item.equipment.reduce((acc, next) => acc + Number(next.price), 0)}$</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>Total count:</td>
                        <td colSpan={3}>{item.equipment.length}</td>
                    </tr>
                    </tfoot>
                </Table>
                else return null;
            })
            }
            <div>
                <Table>
                    <tbody>
                    <tr>
                        <td className='total' colSpan={3}>
                            Total price:
                            <Select value={countCategory} onChange={(e) => countPrice(e.target.value)}>
                                <option value="all">All</option>
                                <option value="Computers and laptops">Computers and laptops</option>
                                <option value="Monitors">Monitors</option>
                                <option value="Computer accessories">Computer accessories</option>
                                <option value="Computer headphones">Computer headphones</option>
                                <option value="Printers and multifunction devices">Printers and multifunction devices
                                </option>
                                <option value="Software">Software</option>
                                <option value="Office accessorises">Office accessorises</option>
                                <option value="Other accessories">Other accessories</option>
                            </Select>
                        </td>
                        <td colSpan={3}>{totalPrice}$</td>
                    </tr>
                    <tr>
                        <td className='total' colSpan={3}>Total positions:</td>
                        <td colSpan={3}>{totalPos}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </WrapperOut>
    );
}

export default OutputList;