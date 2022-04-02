import React, {useContext} from 'react';
import {AppContext} from "../App";
import {Button, Input, Select, Wrapper} from "../styled/Input_data_style";

function InputData() {

    const {name, setName, desc, setDesc, price, setPrice, category, setCategory, addToList, fullname, setFullname, work, setWork} = useContext(AppContext);

    return (
        <Wrapper>
            <div>
                <p>Full name of employee</p>
                <Input
                    placeholder={'e.g: Jan Kowalski'}
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
            </div>
            <div>
                <p>Position held</p>
                <Input
                    placeholder={'e.g: junior frontend developer'}
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                />
            </div>
            <div>
                <p>Name of position</p>
                <Input
                    placeholder={'e.g: processor, keyboard, table, chair, etc.'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <p>Brand and model</p>
                <Input
                    placeholder={'e.g: intel core i5-10400f'}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            <div>
                <p>Category of item</p>
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
            </div>
            <div>
                <p>Price:</p>
                <Input
                    placeholder={'$'}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <Button onClick={() => addToList(fullname, work, name, desc, category, price)}>Add to the list</Button>
        </Wrapper>
    );
}

export default InputData;