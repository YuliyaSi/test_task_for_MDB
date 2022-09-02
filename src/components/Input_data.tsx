import React, {ChangeEvent, useContext, useState} from 'react';
import {AppContext} from "../context/context";
import {Button, Input, Select, Wrapper} from "../styled/Input_data_style";
import {useInputData} from "../customHooks/useInputData";
import {setToLowerCase} from "../helpers/setToLowerCase";
import {useCountingFromList} from "../customHooks/useCountingFromList";
import {IList} from "../types";

function InputData() {
    const [
        fullname,
        setFullname,
        work,
        setWork,
        name,
        setName,
        desc,
        setDesc,
        price,
        setPrice,
        category,
        setCategory,
    ] = useInputData();

    const [ categoryOptions, setCategoryOptions ]  = useCountingFromList();

    const { list, setList } = useContext(AppContext);

    const [customOption, setCustomOption] = useState('');

    const addOptionAndCleanInput = (newCategory: string) => {
        if (newCategory.trim()) {
            setCategoryOptions(prevState => [...prevState, newCategory]);
            setCustomOption('')
        }
    }

    const addToList = (fullname: string, work: string, name: string, desc: string, option: string, price: number | undefined) => {
        if (list.some((item: { fullname: string; work: string; }) => setToLowerCase(item.fullname) === setToLowerCase(fullname) && setToLowerCase(item.work) === setToLowerCase(work))) {
            setList((prevState: IList) => [...prevState.map(listItem => {
                if (setToLowerCase(listItem.fullname) === setToLowerCase(fullname) &&
                    setToLowerCase(listItem.work) === setToLowerCase(work)) {
                    return {
                        ...listItem, equipment: [...listItem.equipment, { name, desc, option, price: Number(price) }]
                    };
                } else return listItem;
            })])
        } else if (fullname.trim() !== '' && work.trim() !== '' && name.trim() !== '' && desc.trim() !== '' && Number(price) !== 0 && option.trim() !== '') {
            setList((prevState: IList) => [...prevState, {
                fullname,
                work,
                equipment: [{name, desc, option, price: Number(price)}],
            }]);
        } else {
            alert('Some field is empty!');
        }

        setName('');
        setDesc('');
        setPrice('');
        setCategory('');
    }


    return (
        <Wrapper>
            <div>
                <p>Full name of employee</p>
                <Input
                    placeholder={'e.g: Jan Kowalski'}
                    value={fullname}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setFullname(e.target.value)}
                />
            </div>
            <div>
                <p>Position held</p>
                <Input
                    placeholder={'e.g: junior frontend developer'}
                    value={work}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setWork(e.target.value)}
                />
            </div>
            <div>
                <p>Name of position</p>
                <Input
                    placeholder={'e.g: processor, keyboard, table, chair, etc.'}
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
            </div>
            <div>
                <p>Brand and model</p>
                <Input
                    placeholder={'e.g: intel core i5-10400f'}
                    value={desc}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)}
                />
            </div>
            <div>
                <p>Category of item</p>
                <Input placeholder={'Set custom category and choose it from the list'}
                       value={customOption}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setCustomOption(e.target.value)}
                       onBlur={() => addOptionAndCleanInput(customOption)}
                />
                <Select value={category} onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)}>
                    <option value="">--- choose category ---</option>
                    {categoryOptions.map((opt, ind) => <option key={ind} value={opt}>{opt}</option>)}
                </Select>
            </div>
            <div>
                <p>Price:</p>
                <Input
                    placeholder={'$'}
                    value={price}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(parseInt(e.target.value))}
                />
            </div>
            <Button onClick={() => addToList(fullname, work, name, desc, category, Number(price))}>Add to the list</Button>
        </Wrapper>
    );
}

export default InputData;