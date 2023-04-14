import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

export function GlobalProvider({ children }) {
    const cerrarSesionAuth = () => {
        localStorage.removeItem('user')
    }
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    );
}