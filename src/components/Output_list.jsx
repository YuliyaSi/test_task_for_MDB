import React, {useContext} from 'react';
import {AppContext} from "../App";
import {Table, Wrapper} from "../styled/Output_list_styles";

function OutputList() {
    const { list, deleteFromList } = useContext(AppContext);
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Category</td>
                    <td>Price</td>
                </tr>
                </thead>
                {list.length !== 0 && <tbody>
                {list.map(listItem => <tr key={listItem.name}>
                    <td>{listItem.name}</td>
                    <td>{listItem.desc}</td>
                    <td>{listItem.option}</td>
                    <td>{listItem.price}</td>
                    <td><button onClick={() => deleteFromList(listItem.name)}>Delete</button></td>
                </tr>)}
                </tbody>}
                <tfoot>
                <tr>
                    <td colSpan={3}>Total:</td>
                    <td colSpan={2}>{list.reduce((acc, next) => acc + Number(next.price), 0)}</td>
                </tr>
                </tfoot>
            </Table>
        </Wrapper>
    );
}

export default OutputList;