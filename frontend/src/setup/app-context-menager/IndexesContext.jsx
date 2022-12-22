import React, { createContext, useState } from "react";

export const IndexesContext = createContext(null);

export const IndexesContextProvider = ({ children }) => {
    const [arrayId, setArrayId] = useState([]);

    const value = {
        arrayId,
        setArrayId,
    };

    return (
        <IndexesContext.Provider value={value}>
            {children}
        </IndexesContext.Provider>
    );
};

export default IndexesContext;
