import React from 'react';
import {Table} from "../../styled/Output_list_styles";
import Output_list_Row from "./Output_list_Row";
import {capitalizing} from "../../helpers/capitalizing";


function Output_list_mainTable({item}) {
    const {fullname, work, equipment} = item;

    return (
        <Table>
            <caption>
                <span>{capitalizing(fullname)} - {capitalizing(work)}</span>
            </caption>
            <thead>
            <tr>
                <td>№</td>
                <td>Name</td>
                <td>Description</td>
                <td>Category</td>
                <td>Price</td>
                <td>Edit</td>
            </tr>
            </thead>
            <tbody>

            {equipment.map((listItem, ind) =>
                // eslint-disable-next-line react/jsx-pascal-case
                <Output_list_Row key={listItem.name} fullname={item.fullname} equipment={listItem} ind={ind}
                                 work={item.work}/>)}

            </tbody>

            <tfoot>
            <tr>
                <td colSpan={3}>Total for {capitalizing(fullname)}:</td>
                <td colSpan={3}>{equipment.reduce((acc, next) => acc + Number(next.price), 0)}$</td>
            </tr>
            <tr>
                <td colSpan={3}>Total count:</td>
                <td colSpan={3}>{equipment.length}</td>
            </tr>
            </tfoot>
        </Table>

    );
}

export default Output_list_mainTable;