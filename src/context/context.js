import React, {createContext} from "react";
import {useCountingFromList} from "../customHooks/useCountingFromList";

export const AppContext = createContext(null);



export const Provider = ({children}) => {
    const value = useCountingFromList();

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}