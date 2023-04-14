import React, { createContext, useState } from 'react'
import clienteAxios from 'config/clienteAxios';
const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
    const [dataE, setDataE] = useState({})
    const [dataActivityVerify, setDataActivityVerify] = useState({})
    const [cargando, setCargando] = useState(true)
    const submitActivityExiste = async (data) => {
        setCargando(true)
        try {
            const config = {
                headers: {
                    'Authorization': 'Basic YWRtaW4uREVWLlNvZnRoZWFsdGg6czBwb3J0My1TMGZ0aDM0bDc=',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
            await clienteAxios.post(`control_contestar.php?action=existe_contestar/`, data, config)
            setDataE(data)
        } catch (error) {
            console.log(error);
        }
        finally {
            setCargando(false)
        }
    }
    const submitActivityCrear = async (data) => {
        setCargando(true)
        try {
            const config = {
                headers: {
                    'Authorization': 'Basic YWRtaW4uREVWLlNvZnRoZWFsdGg6czBwb3J0My1TMGZ0aDM0bDc=',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
            await clienteAxios.post(`control_contestar.php?action=crear_contestar/`, { data }, config)
            setDataE(data)
        } catch (error) {
            console.log(error);
        }
        finally {
            setCargando(false)
        }
    }
    return (
        <ActivityContext.Provider
            value={{ dataE, dataActivityVerify, setDataE, cargando, setCargando, submitActivityCrear, submitActivityExiste }}
        >
            {children}
        </ActivityContext.Provider>
    )
}
export { ActivityProvider }
export default ActivityContext