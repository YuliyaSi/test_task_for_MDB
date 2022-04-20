import React, {createContext, useEffect, useState} from "react";

export const AppContext = createContext(null);

export const Provider = ({children}) => {

    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
    const [filteredList, setFilteredList] = useState(list);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
        setFilteredList(list)
    }, [list])

    const value = { list, setList, setFilteredList, filteredList }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}