import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../context/context";
import {Table} from "../../styled/Output_list_styles";
import {Select} from "../../styled/Input_data_style";


function Output_list_ResultTable() {

    const { value } = useContext(AppContext);
    const {totalPrice, totalPos, countCategory, categoryOptions, filteredList, setCountCategory, setTotalPrice, setTotalPos} = value;

    const countPrice = (selectedValue) => {
        setCountCategory(selectedValue);

        if (selectedValue === 'all') {
            setTotalPrice(filteredList.reduce((acc, next) => acc + next.equipment.reduce((accum, nextPos) => accum + Number(nextPos.price), 0), 0));
            setTotalPos(filteredList.reduce((acc, next) => acc + next.equipment.length, 0))
        } else {
            const newList = [];
            filteredList.forEach(employee => employee.equipment.forEach(item => newList.push(item)));
            const filterList = newList.filter(item => item.option === selectedValue);
            setTotalPrice(filterList.reduce((acc, next) => acc + Number(next.price), 0))
            setTotalPos(filterList.length);
        }
    }

    useEffect(() => {
        countPrice('all')
    }, [filteredList])

    return (
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
    );
}

export default Output_list_ResultTable;