import React, {useContext} from 'react';
import {AppContext} from "../../context/context";
import {WrapperOut} from "../../styled/Output_list_styles";
import Output_list_ResultTable from "./Output_list_ResultTable";
import Output_list_mainTable from "./Output_list_mainTable";
import {Select} from "../../styled/Input_data_style";


function OutputList() {

    const {list, categoryOptions, sortEquipment} = useContext(AppContext);

    if (list.length === 0) return;

    return (
        <WrapperOut>
            <div>
                <span style={{marginRight: '1rem'}}>Sort by:</span>
                <Select edit onChange={(e) => sortEquipment(e.target.value)}>
                    <option value=""> --- no --- </option>
                    <option value="name">name of position</option>
                    <option value="desc">description of position</option>
                    <option value="option">category of item</option>
                    <option value="price">price</option>
                </Select>
            </div>
            <div>
                <span style={{marginRight: '1rem'}}>Filter by category:</span>
                <Select edit>
                    <option value=""> --- no --- </option>
                    {categoryOptions.map((i, ind) => <option key={ind} value={i}>{i}</option>)}
                </Select>
            </div>
            {list.map((item, index) => {
                // eslint-disable-next-line react/jsx-pascal-case
                if (item.equipment.length !== 0) return <Output_list_mainTable key={index} item={item}/>
                else return null;
            })
            }

            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Output_list_ResultTable/>

        </WrapperOut>
    );
}

export default OutputList;