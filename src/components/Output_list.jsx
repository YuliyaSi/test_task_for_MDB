import React, {useContext} from 'react';
import {AppContext} from "../App";
import {Table, Wrapper} from "../styled/Output_list_styles";
import {FiDelete} from "react-icons/fi";

function OutputList() {
    const { list, deleteFromList } = useContext(AppContext);
    return (
        <Wrapper>
            <Table>
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
                {list.length !== 0 && <tbody>
                {list.map((listItem, ind) => <tr key={listItem.name}>
                    <td>{ind + 1}</td>
                    <td>{listItem.name}</td>
                    <td>{listItem.desc}</td>
                    <td>{listItem.option}</td>
                    <td>{listItem.price}</td>
                    <td><FiDelete onClick={() => deleteFromList(listItem.name)}/></td>
                </tr>)}
                </tbody>}
                <tfoot>
                <tr>
                    <td colSpan={3}>Total:</td>
                    <td colSpan={3}>{list.reduce((acc, next) => acc + Number(next.price), 0)}</td>
                </tr>
                <tr>
                    <td colSpan={3}>Total count:</td>
                    <td colSpan={3}>{list.length}</td>
                </tr>
                </tfoot>
            </Table>
        </Wrapper>
    );
}

export default OutputList;