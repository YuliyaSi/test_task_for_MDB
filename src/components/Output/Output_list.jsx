import React, {useContext} from 'react';
import {AppContext} from "../../context/context";
import {WrapperOut} from "../../styled/Output_list_styles";
import Output_list_ResultTable from "./Output_list_ResultTable";
import Output_list_mainTable from "./Output_list_mainTable";
import {Select} from "../../styled/Input_data_style";


function OutputList() {

    const { categoryOptions, sortEquipment, filteredList, filterList} = useContext(AppContext);

    if (filteredList.length === 0) return;

    return (
        <WrapperOut>
            <div className="editorsHolder">
                <div>
                    <span>Sort by:</span>
                    <Select edit onChange={(e) => sortEquipment(e.target.value)}>
                        <option value=""> --- no --- </option>
                        <option value="name">name of position</option>
                        <option value="desc">description of position</option>
                        <option value="option">category of item</option>
                        <option value="price">price</option>
                    </Select>
                </div>
                <div>
                    <span>Filter by:</span>
                    <Select edit onChange={e => filterList(e.target.value)}>
                        <option value=""> --- no --- </option>
                        {categoryOptions.map((i, ind) => <option key={ind} value={i}>{i}</option>)}
                    </Select>
                </div>
            </div>

            {filteredList.map((item, index) => {
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