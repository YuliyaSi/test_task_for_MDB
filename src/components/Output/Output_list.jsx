import React, {useContext} from 'react';
import {AppContext} from "../../context/context";
import {WrapperOut} from "../../styled/Output_list_styles";
import Output_list_ResultTable from "./Output_list_ResultTable";
import Output_list_mainTable from "./Output_list_mainTable";


function OutputList() {

    const {list} = useContext(AppContext);

    if (list.length === 0) return;

    return (
        <WrapperOut>
            {list.map((item, index) => {
                // eslint-disable-next-line react/jsx-pascal-case
                if (item.equipment.length !== 0) return <Output_list_mainTable key={index} item={item}/>
                else return null;
            })
            }
            <div>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Output_list_ResultTable/>
            </div>
        </WrapperOut>
    );
}

export default OutputList;