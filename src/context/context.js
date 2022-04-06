import {createContext} from "react";
import {useInitializeApp} from "../customHooks/useInitializeApp";
import {setToLowerCase} from "../helpers/setToLowerCase";

export const AppContext = createContext(null);

export const Provider = ({children}) => {
    let value = useInitializeApp();

    value.addToList = (fullname, work, name, desc, option, price) => {
        if (value.list.some(item => setToLowerCase(item.fullname) === setToLowerCase(fullname) && setToLowerCase(item.work) === setToLowerCase(work))) {
            const employee = value.list.find(employee => setToLowerCase(employee.fullname) === setToLowerCase(fullname) && setToLowerCase(employee.work) === setToLowerCase(work));
            employee.equipment.push({name, desc, option, price})
            value.setList(value.list)
        } else if (name.trim() !== '' && desc.trim() !== '' && Number(price) !== 0 && option.trim() !== '') {
            value.setList(prevState => [...prevState, {
                fullname,
                work,
                equipment: [{name, desc, option, price}],
            }]);
        } else {
            alert('Fill all poles');
        }
        value.countPrice('all')
        value.setName('');
        value.setDesc('');
        value.setPrice('');
        value.setCategory('');
    }

    value.updateList = (fullname, work, prev_name, prev_desc, prev_option, prev_price, name, desc, option, price) => {
        value.setList(prevState => [...prevState.map(listItem => {
            if (setToLowerCase(listItem.fullname) === setToLowerCase(fullname) &&
                setToLowerCase(listItem.work) === setToLowerCase(work)) {
                return {
                    ...listItem, equipment: listItem.equipment.map(item => {
                        if (setToLowerCase(item.name) === setToLowerCase(prev_name) &&
                            setToLowerCase(item.desc) === setToLowerCase(prev_desc) &&
                            setToLowerCase(item.option) === setToLowerCase(prev_option) &&
                            item.price === prev_price) {
                            return {name, desc, option, price};
                        } else return item;
                    })
                };
            } else return listItem;
        })])
    }

    value.deleteFromList = (fullname, work, name) => {
        const newList = value.list.map(employee => (employee.fullname === fullname && employee.work === work) ? {
            ...employee,
            equipment: employee.equipment.filter(item => item.name !== name)
        } : employee).filter(employee => employee.equipment.length !== 0);

        value.setList(newList);
        value.countPrice('all')

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

    value.addCategoryOption = (newCategory) => {
        if (newCategory.trim()) value.setCategoryOptions(prevState => [...prevState, newCategory]);
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}