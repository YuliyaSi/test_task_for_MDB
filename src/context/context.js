import React, {createContext} from "react";
import {useCountingFromList} from "../customHooks/useCountingFromList";

export const AppContext = createContext(null);



export const Provider = ({children}) => {
    const value = useCountingFromList();

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

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}