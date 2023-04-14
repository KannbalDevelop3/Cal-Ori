import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SlidePage from '../../../../Reutilizable/SlidePage'
import { menuEstacionesVerduras } from './assets/data/menumap'
import fondo from './assets/images/estaciones/fondo.png'
import instr from './assets/images/estaciones/INSTRUCCIONES.png'
import './assets/styles/estacionverduras.css'
import ImageLoading from '../../../../Reutilizable/ImageLoading'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
const EstacionesVerdurasPro = () => {
    const [str_id_act, setStrIdAct] = useState('ebook_Verduras')
    const [str_id_rol, strIdRol] = useState(1)
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState({})
    const actService = new ContestarActividad();
    const { str_email_usu } = useContext(CounterContext)
    const [vSumar, setvSumar] = useState(0);
    const [int_avance, setStrIntAvance] = useState(1)
    const [str_data, setStrData] = useState(null)
    const [txt_status, setTxtStatus] = useState('')
    const [exite, setExite] = useState(null)
    const [visibilityArrow, setvisibilityArrow] = useState(false)
    const [stateVerInvierno, setStateVerInvierno] = useState('')
    const [stateVerPrim, setStateVerPrim] = useState('')
    const traerDatos = () => {
        let isMounted = true;
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('str_id_act', str_id_act);
        data.append('str_id_rol', str_id_rol);
        actService.existeActivity(data).then(response => {
            if (isMounted) {
                const res = response.data
                const contestarExiste = res;
                setDate(contestarExiste[0])
                setExite(contestarExiste[0].contestar_existe)
                const dataArray = contestarExiste[0]?.str_saveData?.split(",");
                setStrData(dataArray);
                setStrIntAvance(contestarExiste[0]?.int_avance)
                setTxtStatus(contestarExiste[0]?.vc_estatus)
            }
        }).catch(error => {
            console.log(error);
        })
        return () => {
            isMounted = false;
        };
    }
    useEffect(() => {
        setTimeout(() => {
            traerDatos()
        }, 1500);
        setLoading(false);
    }, [loading]);
    const handleArrow = () => {
        console.log('Click');
        let cont
        let avanceF
        cont = Number(int_avance) + Number(1)
        avanceF = 'incomplet'
        let valFinal
        if (8 === 8) {
            console.log('Entro a la condición de === 8');
            // Si el índice ya existe en el arreglo y es === 8, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[8 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        }
        else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 8; i++) {
                newArray.push(0);
            }
            newArray.push(1);
            // Si el arreglo supera las 5 posiciones, eliminamos la primera
            if (newArray.length > 7) {
                newArray.shift();
            }
            valFinal = newArray
            setStrData(newArray);
        }
        console.log('dentro del clik', valFinal);
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('int_avance', cont);
        data.append('str_id_rol', str_id_rol);
        data.append('str_id_act', str_id_act);
        data.append('str_data', valFinal);
        data.append('txt_status', avanceF)
        actService.crearActivity(data)
    }
    const ruta = '/profesionales/verduras/reto-cinco'
    const rutaNext = '/profesionales/verduras/reto-seis'
    const toRoute = '/profesionales/verduras'


    const verEstadoDeVerdurasInvierno = () => {
        let isMounted = true
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('str_id_act', 'verd_invier');
        data.append('str_id_rol', str_id_rol);
        actService.existeActivity(data).then(response => {
            if (isMounted) {
                const res = response.data
                const contestarExiste = res;
                setStateVerInvierno(contestarExiste[0]?.vc_estatus)
            }
        }).catch(error => {
            console.log(error);
        })
        return () => {
            isMounted = false;
        };
    }
    const verEstadoDeVerdurasPrimavera = () => {
        let isMounted = true
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('str_id_act', 'verd_prim');
        data.append('str_id_rol', str_id_rol);
        actService.existeActivity(data).then(response => {
            if (isMounted) {
                const res = response.data
                const contestarExiste = res;
                setStateVerPrim(contestarExiste[0]?.vc_estatus)
            }
        }).catch(error => {
            console.log(error);
        })
        return () => {
            isMounted = false;
        };
    }
    useEffect(() => {
        verEstadoDeVerdurasInvierno()
        verEstadoDeVerdurasPrimavera()
    }, [stateVerInvierno, stateVerPrim])
    useEffect(() => {
        if (stateVerInvierno === 'complete' && stateVerPrim === 'complete') {
            setvisibilityArrow(true)
        }
    }, [stateVerInvierno, stateVerPrim])
    console.log(stateVerInvierno,stateVerPrim);
    return (
        <>
            <SlidePage
                backgroundDesktop={fondo}
                rutaPrev={ruta}
                rutaNext={rutaNext}
                handleArrow={handleArrow}
                to={toRoute}
                visibility={visibilityArrow === true ? 'visible' : 'hidden'}
            >
                <div className='estaciones-verduras__contenedor'>
                    <div className='estaciones-verduras__menu-estacion'>
                        {menuEstacionesVerduras.map(({ id, imagen, disabled, to }) => (
                            <div className='estaciones-verduras__center-div' key={id}>
                                <button className={`estaciones-verduras__boton-opt-e`}>
                                    <Link to={`${disabled === false ? `/profesionales/verduras/estacion/${to}` : ''}`}>
                                        <img style={{ cursor: disabled === true ? 'no-drop' : 'pointer', opacity: disabled === true ? '0.8' : '1' }} src={imagen} loading="lazy" />
                                    </Link>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </SlidePage>
        </>
    )
}

export default EstacionesVerdurasPro