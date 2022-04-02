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
                equipment: [ {name, desc, option, price} ],
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
        setList(list.map(employee => (employee.fullname === fullname && employee.work === work) ? {...employee, equipment: employee.equipment.filter(item => item.name !== name)} : employee))
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
            deleteFromList,
            fullname, setFullname, work, setWork
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
