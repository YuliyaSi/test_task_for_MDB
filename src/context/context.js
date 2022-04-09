import {createContext} from "react";
import {useInitializeApp} from "../customHooks/useInitializeApp";
import {setToLowerCase} from "../helpers/setToLowerCase";
import {sortArraysByField} from "../helpers/sortArraysByField";

export const AppContext = createContext(null);

export const Provider = ({children}) => {
    let value = useInitializeApp();

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
                            return {name, desc, option, price: Number(price)};
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
            value.setTotalPrice(value.filteredList.reduce((acc, next) => acc + next.equipment.reduce((accum, nextPos) => accum + Number(nextPos.price), 0), 0));
            value.setTotalPos(value.filteredList.reduce((acc, next) => acc + next.equipment.length, 0))
        } else {
            const newList = [];
            value.filteredList.forEach(employee => employee.equipment.forEach(item => newList.push(item)));
            const filterList = newList.filter(item => item.option === selectedValue);
            value.setTotalPrice(filterList.reduce((acc, next) => acc + Number(next.price), 0))
            value.setTotalPos(filterList.length);
        }

    }

    value.addCategoryOption = (newCategory) => (newCategory.trim()) ? value.setCategoryOptions(prevState => [...prevState, newCategory]) : null

    value.sortEquipment = (sortValue) => value.setList(value.list.map(item => ({...item, equipment: item.equipment.sort(sortArraysByField(sortValue))})));


    value.filterList = (filter) => (filter) ?
        value.setFilteredList(value.list.map(item => ({ ...item, equipment: item.equipment.filter(value1 => value1.option === filter)
    }))) :
        value.setFilteredList(value.list)


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}