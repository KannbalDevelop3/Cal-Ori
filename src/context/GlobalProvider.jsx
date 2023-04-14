import { createContext, useEffect, useState } from 'react';

export const CounterContext = createContext(null);

export function GlobalProvider({ children }) {
    const [str_email_usu, setStrEmailUsu] = useState('');
    let obtValor = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        if (obtValor) {
            setStrEmailUsu(obtValor?.email)
        }
    }, [obtValor])
    return (
        <CounterContext.Provider value={{ str_email_usu, setStrEmailUsu }}>
            {children}
        </CounterContext.Provider>
    );
    }