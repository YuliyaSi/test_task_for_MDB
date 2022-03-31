import React, {useContext} from 'react';
import {AppContext} from "../../App";

function OutputList() {
    const { list, deleteFromList } = useContext(AppContext);
    return (
        <div style={{backgroundColor: '#bbac67', width: '40%', height: '100vh'}}>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Option</td>
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
                    <td>Total:</td>
                    <td>{list.reduce((acc, next) => acc + Number(next.price), 0)}</td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default OutputList;