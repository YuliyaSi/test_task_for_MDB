import React, {useContext} from 'react';
import {AppContext} from "../../App";

function InputData() {
    const {name, setName, desc, setDesc, price, setPrice, option, setOption, addToList} = useContext(AppContext);

    return (
        <div style={{backgroundColor: '#4d8870', width: '40%', height: '100vh'}}>
            <input
                type={'text'}
                placeholder={'Name of position'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input
                type={'text'}
                placeholder={'Description of position'}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            /><br/>
            <select value={option} onChange={(e) => setOption(e.target.value)}>
                <option value="1">Lorem ipsum dolor sit amet.</option>
                <option value="2">Lorem ipsum dolor sit amet.</option>
                <option value="3">Lorem ipsum dolor sit amet.</option>
                <option value="4">Lorem ipsum dolor sit amet.</option>
                <option value="5">Lorem ipsum dolor sit amet.</option>
            </select><br/>
            <input
                type="text"
                placeholder={'Price'}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={() => addToList(name, desc, option, price)}>Add to the list</button>
        </div>
    );
}

export default InputData;