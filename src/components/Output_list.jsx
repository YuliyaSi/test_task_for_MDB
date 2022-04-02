import React, {useContext, useState} from 'react';
import {AppContext} from "../App";
import {Table, WrapperOut} from "../styled/Output_list_styles";
import {FiDelete} from "react-icons/fi";

function OutputList() {

    const { list, deleteFromList, countPrice, totalPrice } = useContext(AppContext);
    const [category, setCategory] = useState('all');

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
                        <td>{listItem.name}</td>
                        <td>{listItem.desc}</td>
                        <td>{listItem.option}</td>
                        <td>{listItem.price}</td>
                        <td><FiDelete onClick={() => deleteFromList(item.fullname, item.work, listItem.name)}/></td>
                    </tr>)}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={3}>Total:</td>
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
                        <td colSpan={3}>Total positions:</td>
                        <td colSpan={3}>{list.reduce((acc, next) => acc + next.equipment.length, 0)}</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            Total price:
                            <select value={category} onChange={(e) => {
                                setCategory(e.target.value)
                                countPrice(e.target.value)
                            }}>
                                <option value="all">All</option>
                                <option value="computers&laptops">Computers and laptops</option>
                                <option value="monitors">Monitors</option>
                                <option value="computer accessories">Computer accessories</option>
                                <option value="computer headphones">Computer headphones</option>
                                <option value="printers&devices ">Printers and multifunction devices</option>
                                <option value="software">Software</option>
                                <option value="office">Office accessorises</option>
                                <option value="Other accessories">Other accessories</option>
                            </select>
                        </td>
                        <td colSpan={3}>{totalPrice}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </WrapperOut>
    );
}

export default OutputList;