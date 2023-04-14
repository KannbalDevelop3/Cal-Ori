import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Frutas/assets/styles/estaciones.css'
import { menuEsatcion } from './assets/data/dataEstacion'
import sigBoton from './assets/images/f-izq.png'
import prevBoton from './assets/images/f-der.png'
import BotonFixedIndice from 'components/Reutilizable/BotonFixedIndice'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
import HorizontalPage from 'components/Reutilizable/HorizontalPage'
const Estaciones = () => {
    const [buttons, setButtons] = useState(menuEsatcion)
    const [str_id_act, setStrIdAct] = useState('ebook_Frutas')
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
    const [frutPrim, setfrutPrim] = useState('')
    const [frutVer, setfruVer] = useState('')
    const [frutInv, setfrutInv] = useState('')
    const [visibilityArrow, setvisibilityArrow] = useState(false)
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
        if (6 === 6) {
            console.log('Entro a la condición de === 6');
            // Si el índice ya existe en el arreglo y es === 2, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[6 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        }
        else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 6; i++) {
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

    const verEstadoDeFrutaInvierno = () => {
        let isMounted = true
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('str_id_act', 'frut_invierno');
        data.append('str_id_rol', str_id_rol);
        actService.existeActivity(data).then(response => {
            if (isMounted) {
                const res = response.data
                const contestarExiste = res;
                console.log(contestarExiste);
                setfrutInv(contestarExiste[0]?.vc_estatus)
            }
        }).catch(error => {
            console.log(error);
        })
        return () => {
            isMounted = false;
        };
    }
    const verEstadoDeFrutaPrimavera = () => {
        let isMounted = true
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('str_id_act', 'frut_prim');
        data.append('str_id_rol', str_id_rol);
        actService.existeActivity(data).then(response => {
            if (isMounted) {
                const res = response.data
                const contestarExiste = res;
                setfrutPrim(contestarExiste[0]?.vc_estatus)
            }
        }).catch(error => {
            console.log(error);
        })
        return () => {
            isMounted = false;
        };
    }
    const verEstadoDeFrutaVer = () => {
        let isMounted = true
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('str_id_act', 'frut_verano');
        data.append('str_id_rol', str_id_rol);
        actService.existeActivity(data).then(response => {
            if (isMounted) {
                const res = response.data
                const contestarExiste = res;
                setfruVer(contestarExiste[0]?.vc_estatus)
            }
        }).catch(error => {
            console.log(error);
        })
        return () => {
            isMounted = false;
        };
    }

    useEffect(() => {
        verEstadoDeFrutaInvierno()
        verEstadoDeFrutaPrimavera()
        verEstadoDeFrutaVer()
    }, [frutInv, frutPrim, frutVer])
    useEffect(() => {
        if (frutInv === 'complete' && frutVer === 'complete' && frutPrim === 'complete') {
            setvisibilityArrow(true)
        }
    }, [frutInv, frutPrim, frutVer])

    return (
        <HorizontalPage>
            <div className='estaciones__contenedor'>
                <BotonFixedIndice to='/paciente/frutas' />
                <div className='estaciones__grid-separador'>
                    <div className='estaciones__menu-estacion'>
                        {buttons.map(({ id, imagen, disabled, to, status }) => (
                            <div className='estaciones__center-div' key={id}>
                                <button className={`estaciones__boton-opt-e`}>
                                    <Link
                                        to={`${disabled === false ? `/paciente/frutas/estacion/${to}` : ''}`}
                                    >
                                        <img
                                            style={{ cursor: disabled === true ? 'no-drop' : 'pointer', opacity: disabled === true ? '0.8' : '1' }}
                                            src={imagen}
                                            loading="lazy" />
                                    </Link>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='estaciones__buton-flecha'>
                        <div className='estaciones__boton-siguiente'>
                            <Link to="/paciente/frutas/reto-dos"><img src={sigBoton} loading="lazy" /></Link>
                        </div>
                        <div className='estaciones__boton-siguiente'>
                            {
                                visibilityArrow === true ?
                                    (
                                        <Link to="/paciente/frutas/reto-tres" onClick={() => handleArrow()}>
                                            <img src={prevBoton} loading="lazy" />
                                        </Link>
                                    )
                                    :
                                    (
                                        ''
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div >
        </HorizontalPage>
    )
}

export default Estaciones