import React, {createContext, ReactNode, useEffect, useState} from "react";
import {IContext, IList} from "../types";

export const AppContext = createContext<IContext | null>(null);

interface AppContextProps {
    children?: ReactNode;
}

export const Provider = ({children}: AppContextProps) => {

    // @ts-ignore
    const [list, setList] = useState<IList | []>(JSON.parse(localStorage.getItem('list')) || []);
    const [filteredList, setFilteredList] = useState(list);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
        setFilteredList(list)
    }, [list])

    return (
        <AppContext.Provider value={{list, setList, filteredList, setFilteredList}}>
            {children}
        </AppContext.Provider>
    )
}