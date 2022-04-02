import InputData from "./components/Input_data";
import OutputList from "./components/Output_list";
import {createContext, useEffect, useState} from "react";
import {Nav, WrapperApp} from "./styled/AppStyle";
import Footer from "./components/Footer";

export const AppContext = createContext(null);

function App() {
    const [fullname, setFullname] = useState('');
    const [work, setWork] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
    const [totalPrice, setTotalPrice] = useState(list.reduce((acc, next) => acc + next.equipment.reduce((accum, nextPos) => accum + Number(nextPos.price), 0), 0) || 0);
    const [countCategory, setCountCategory] = useState('all');
    const [totalPos, setTotalPos] = useState(list.reduce((acc, next) => acc + next.equipment.length, 0));

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const addToList = (fullname, work, name, desc, option, price) => {
        if (list.some(item => item.fullname === fullname && item.work === work)) {
            const employee = list.find(employee => employee.fullname === fullname && employee.work === work);
            employee.equipment.push({name, desc, option, price})
        } else if (name.trim() !== '' && desc.trim() !== '' && Number(price) !== 0 && option.trim() !== '') {
            setList(prevState => [...prevState, {
                fullname,
                work,
                equipment: [{name, desc, option, price}],
            }]);
        } else {
            alert('Fill all poles');
        }
        setName('');
        setDesc('');
        setPrice('');
        setCategory('');
    }

    const deleteFromList = (fullname, work, name) => {
        const newList = list.map(employee => (employee.fullname === fullname && employee.work === work) ? {
            ...employee,
            equipment: employee.equipment.filter(item => item.name !== name)
        } : employee);
        setList(newList.filter(employee => employee.equipment.length !== 0));
    }

    const countPrice = (value) => {
        setCountCategory(value);
        if (value === 'all') {
            setTotalPrice(list.reduce((acc, next) => acc + next.equipment.reduce((accum, nextPos) => accum + Number(nextPos.price), 0), 0));
            setTotalPos(list.reduce((acc, next) => acc + next.equipment.length, 0))
        } else {
            const newList = [];
            list.forEach(employee => employee.equipment.forEach(item => newList.push(item)));
            const filteredList = newList.filter(item => item.option === value);
            setTotalPrice(filteredList.reduce((acc, next) => acc + Number(next.price), 0))
            setTotalPos(filteredList.length);
        }

    }

    return (
        <AppContext.Provider value={{
            name, setName,
            desc, setDesc,
            price, setPrice,
            category, setCategory,
            list, setList,
            fullname, setFullname,
            work, setWork,
            totalPrice, countCategory, totalPos,
            addToList,
            deleteFromList,
            countPrice,

        }}>
            <Nav>
                <h1>Web application for calculating the costs of equipment</h1>
            </Nav>
            <WrapperApp>
                <InputData/>
                <OutputList/>
            </WrapperApp>
            <Footer/>
        </AppContext.Provider>
    );
}

export default App;
