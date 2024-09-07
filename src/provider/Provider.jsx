import React, { createContext, useState } from 'react';

// create context
export const AppContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState(null);

    const value = {
        user,
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;