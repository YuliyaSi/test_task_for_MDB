import React, {useContext, useEffect} from 'react';
import {AppContext} from "../context/context";
import {Table, WrapperOut} from "../styled/Output_list_styles";
import {Select} from "../styled/Input_data_style";
import Output_list_Row from "./Output_list_Row";

function OutputList() {

    const {list, totalPrice, totalPos, countCategory, countPrice, categoryOptions} = useContext(AppContext);

    useEffect(() => {
        countPrice('all')
    }, [list])

    console.log(list)
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

                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    {item.equipment.map((listItem, ind) => <Output_list_Row key={listItem.name} fullname={item.fullname} equipment={listItem} ind={ind} work={item.work}/>)}

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