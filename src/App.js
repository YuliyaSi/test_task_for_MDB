import './App.css';
import InputData from "./components/Input_data/Input_data";
import OutputList from "./components/Output_list/Output_list";
import {createContext, useEffect, useState} from "react";

export const AppContext = createContext(null);

function App() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [option, setOption] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    const addToList = (name, desc, option, price) => {
      setList(prevState => [...prevState, { name, desc, option, price }]);
      setName('');
      setDesc('');
      setPrice('');
      setOption('');
    }

    const deleteFromList = (name) => {
        setList(list.filter(item => item.name !== name))
    }

  return (
      <AppContext.Provider value={{name, setName, desc, setDesc, price, setPrice, option, setOption, list, setList, addToList, deleteFromList}}>
          <div className="App">
              <h1>Hello</h1>
              <div className="container">
                  <InputData/>
                  <OutputList/>
              </div>
          </div>
      </AppContext.Provider>
  );
}

export default App;
