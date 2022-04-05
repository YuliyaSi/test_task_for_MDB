import React, {useContext, useEffect} from 'react';
import {AppContext} from "../context/context";
import {Table, WrapperOut} from "../styled/Output_list_styles";
import {FiDelete, FiEdit2} from "react-icons/fi";
import {Button, Select} from "../styled/Input_data_style";

function OutputList() {

    const {list, totalPrice, totalPos, countCategory, deleteFromList, countPrice, categoryOptions} = useContext(AppContext);

    useEffect(() => {
        countPrice('all')
    }, [list])

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
                            {listItem.name}
                        </td>
                        <td>
                            {listItem.desc}
                        </td>
                        <td>
                            {listItem.option}
                        </td>
                        <td>
                            {listItem.price + '$'}
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
                                {categoryOptions.map((opt, ind) => <option key={ind} value={opt}>{opt}</option>)}
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