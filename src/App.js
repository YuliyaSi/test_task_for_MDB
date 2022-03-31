import InputData from "./components/Input_data";
import OutputList from "./components/Output_list";
import {createContext, useEffect, useState} from "react";
import {Nav, Wrapper} from "./styled/AppStyle";

export const AppContext = createContext(null);

function App() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const addToList = (name, desc, option, price) => {
        if (name.trim() !== '' && desc.trim() !== '' && Number(price) !== 0 && option.trim() !== '') {
            setList(prevState => [...prevState, {name, desc, option, price}]);
        } else {
            alert('Fill all poles');
        }
        setName('');
        setDesc('');
        setPrice('');
        setCategory('');
    }

    const deleteFromList = (name) => {
        setList(list.filter(item => item.name !== name))
    }

    return (
        <AppContext.Provider value={{
            name,
            setName,
            desc,
            setDesc,
            price,
            setPrice,
            category,
            setCategory,
            list,
            setList,
            addToList,
            deleteFromList
        }}>
            <Nav>
                <h1>Web application for calculating the costs of equipment</h1>
            </Nav>
            <Wrapper>
                <InputData/>
                <OutputList/>
            </Wrapper>
        </AppContext.Provider>
    );
}

export default App;
