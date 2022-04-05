import React, {useContext, useState} from 'react';
import {AppContext} from "../context/context";
import {Button, Input, Select, Wrapper} from "../styled/Input_data_style";

function InputData() {
    const {
        categoryOptions,
        addCategoryOption,
        name,
        setName,
        desc,
        setDesc,
        price,
        setPrice,
        category,
        setCategory,
        fullname,
        setFullname,
        work,
        setWork, addToList
    } = useContext(AppContext);

    const [customOption, setCustomOption] = useState('');

    const addOptionAndCleanInput = (value) => {
        addCategoryOption(value);
        setCustomOption('')
    }


    return (
        <Wrapper>
            <div>
                <p>Full name of employee</p>
                <Input
                    placeholder={'e.g: Jan Kowalski'}
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value.toUpperCase())}
                />
            </div>
            <div>
                <p>Position held</p>
                <Input
                    placeholder={'e.g: junior frontend developer'}
                    value={work}
                    onChange={(e) => setWork(e.target.value.toUpperCase())}
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
                <Input placeholder={'Set custom category'}
                       value={customOption}
                       onChange={(e) => setCustomOption(e.target.value)}
                       onBlur={() => addOptionAndCleanInput(customOption)}
                />
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">--- choose category ---</option>
                    {categoryOptions.map((opt, ind) => <option key={ind} value={opt}>{opt}</option>)}
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