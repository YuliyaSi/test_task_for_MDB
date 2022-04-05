import {createContext} from "react";
import {useInitializeApp} from "../customHooks/useInitializeApp";

export const AppContext = createContext(null);

export const Provider = ({children}) => {
    let value = useInitializeApp();

    value.addToList = (fullname, work, name, desc, option, price) => {
        if (value.list.some(item => item.fullname === fullname && item.work === work)) {
            const employee = value.list.find(employee => employee.fullname === fullname && employee.work === work);
            employee.equipment.push({name, desc, option, price})
        } else if (name.trim() !== '' && desc.trim() !== '' && Number(price) !== 0 && option.trim() !== '') {
            value.setList(prevState => [...prevState, {
                fullname,
                work,
                equipment: [{name, desc, option, price}],
            }]);
        } else {
            alert('Fill all poles');
        }
        value.setName('');
        value.setDesc('');
        value.setPrice('');
        value.setCategory('');

    }

    value.deleteFromList = (fullname, work, name) => {
        const newList = value.list.map(employee => (employee.fullname === fullname && employee.work === work) ? {
            ...employee,
            equipment: employee.equipment.filter(item => item.name !== name)
        } : employee).filter(employee => employee.equipment.length !== 0);

        value.setList(newList);
    }

    value.countPrice = (selectedValue) => {
        value.setCountCategory(selectedValue);

        if (selectedValue === 'all') {
            value.setTotalPrice(value.list.reduce((acc, next) => acc + next.equipment.reduce((accum, nextPos) => accum + Number(nextPos.price), 0), 0));
            value.setTotalPos(value.list.reduce((acc, next) => acc + next.equipment.length, 0))
        } else {
            const newList = [];
            value.list.forEach(employee => employee.equipment.forEach(item => newList.push(item)));
            const filteredList = newList.filter(item => item.option === selectedValue);
            value.setTotalPrice(filteredList.reduce((acc, next) => acc + Number(next.price), 0))
            value.setTotalPos(filteredList.length);
        }

    }

  return (
      <AppContext.Provider value={value}>
          {children}
      </AppContext.Provider>
  )
}