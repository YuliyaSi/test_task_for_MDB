import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../context/context";
import {Table} from "../../styled/Output_list_styles";
import {Select} from "../../styled/Input_data_style";


function Output_list_ResultTable() {

    const { totalPrice, totalPos, countCategory, countPrice, categoryOptions, list } = useContext(AppContext);

    useEffect(() => {
        countPrice('all')
    }, [list])

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