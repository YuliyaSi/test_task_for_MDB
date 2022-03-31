import React, {useContext} from 'react';
import {AppContext} from "../App";
import {Button, Input, Select, Wrapper} from "../styled/Input_data_style";

function InputData() {

    const {name, setName, desc, setDesc, price, setPrice, category, setCategory, addToList} = useContext(AppContext);

    return (
        <Wrapper>
            <label>
                Name of position
                <Input
                    placeholder={'processor, keyboard, table, char, etc.'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Brand and model
                <Input
                    placeholder={'exp.: intel core i5-10400f'}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </label>
            <br/>
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">--- choose category ---</option>
                <option value="computers&laptops">Computers and laptops</option>
                <option value="monitors">Monitors</option>
                <option value="computer accessories">Computer accessories</option>
                <option value="computer headphones">Computer headphones</option>
                <option value="printers&devices ">Printers and multifunction devices</option>
                <option value="software">Software</option>
                <option value="office">Office accessorises</option>
                <option value="Other accessories">Other accessories</option>
            </Select>
            <br/>
            <Input
                placeholder={'Price'}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            /><br/>
            <Button onClick={() => addToList(name, desc, category, price)}>Add to the list</Button>
        </Wrapper>
    );
}

export default InputData;