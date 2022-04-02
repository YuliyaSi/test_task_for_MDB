import React, {useContext} from 'react';
import {AppContext} from "../App";
import {Table, WrapperOut} from "../styled/Output_list_styles";
import {FiDelete} from "react-icons/fi";

function OutputList() {
    const { list, deleteFromList } = useContext(AppContext);

    return (
        <WrapperOut>
            {list.length !== 0 && list.map(item => {
                if (item.equipment.length !== 0) return <Table>
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
                })}
        </WrapperOut>
    );
}

export default OutputList;