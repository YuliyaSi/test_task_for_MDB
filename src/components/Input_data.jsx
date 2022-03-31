import React, {useContext} from 'react';
import {AppContext} from "../App";
import {Button, Input, Select, Wrapper} from "../styled/Input_dataStyle";

function InputData() {

    const {name, setName, desc, setDesc, price, setPrice, option, setOption, addToList} = useContext(AppContext);

    return (
        <Wrapper>
            <Input
                placeholder={'Name of position'}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                placeholder={'Description of position'}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            /><br/>
            <Select value={option} onChange={(e) => setOption(e.target.value)}>
                <option value="1">Lorem ipsum dolor sit amet.</option>
                <option value="2">Lorem ipsum dolor sit amet.</option>
                <option value="3">Lorem ipsum dolor sit amet.</option>
                <option value="4">Lorem ipsum dolor sit amet.</option>
                <option value="5">Lorem ipsum dolor sit amet.</option>
            </Select><br/>
            <Input
                placeholder={'Price'}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            /><br/>
            <Button onClick={() => addToList(name, desc, option, price)}>Add to the list</Button>
        </Wrapper>
    );
}

export default InputData;