import React, {useContext, useRef} from 'react';
import {AppContext} from "../../context/context";
import {WrapperOut} from "../../styled/Output_list_styles";
import Output_list_ResultTable from "./Output_list_ResultTable";
import Output_list_mainTable from "./Output_list_mainTable";
import {Button, Select} from "../../styled/Input_data_style";
import html2PDF from 'jspdf-html2canvas';


function OutputList() {
    const { categoryOptions, sortEquipment, filteredList, filterList} = useContext(AppContext);
    const exportedPdf = useRef();

    const downloadFunc = () => {
        html2PDF(exportedPdf.current, {
            jsPDF: {
                format: 'a4',
            },
            imageType: 'image/jpeg',
            output: 'calculating_result.pdf'
        });
    }

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

            <div ref={exportedPdf} style={{padding: '1rem 2rem'}}>
                {filteredList.map((item, index) => {
                    // eslint-disable-next-line react/jsx-pascal-case
                    if (item.equipment.length !== 0) return <Output_list_mainTable key={index} item={item}/>
                    else return null;
                })
                }

                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Output_list_ResultTable/>
            </div>

            <div className='buttons'>
                <Button onClick={downloadFunc}>Download result table</Button>
                <Button><a href="https://github.com/YuliyaSi/test_task_for_MDB" target={'_blank'} rel="noreferrer">Go to Source Code</a></Button>
            </div>

        </WrapperOut>
    );
}

export default OutputList;