import React, { useContext, useEffect, useRef, useState } from 'react'
import SlidePage from '../../../Reutilizable/SlidePage'
import './assets/css/indiceverdura.css'
import fondopage from './assets/images/FONDO.png'
import Imagen from '../../../Reutilizable/Imagen'
import indicee from './assets/images/TITULO.png'
import indicee2 from './assets/images/texto_indice.png'
import indiceintruccion from './assets/images/INTRUCCIONES.png'
import circle from './assets/images/CIRCULO-VERDURAS.png'
import { menuverdura } from './assets/data/dataVerdura'
import { Link } from 'react-router-dom'
import ImageLoading from '../../../Reutilizable/ImageLoading'
import { AuthContext } from 'auth/AuthContext'
import ContestarActividad from 'service/ContestarActividad'
import ActivityContext from 'context/ActivityProvider'
import axios from 'axios'
import { CounterContext, GlobalProvider } from 'context/GlobalProvider'
const IndiceVerdurasPro = () => {
    const { submitActivityCrear, submitActivityExiste } = useContext(ActivityContext)
    const { user } = useContext(AuthContext);
    const [buttons, setButtons] = useState(menuverdura)
    const [str_id_act, setStrIdAct] = useState('ebook_Verduras')
    const [str_id_rol, strIdRol] = useState(1)
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState({})
    const actService = new ContestarActividad();
    const { str_email_usu } = useContext(CounterContext)
    const [vSumar, setvSumar] = useState(0);
    const [int_avance, setStrIntAvance] = useState(0)
    const [str_data, setStrData] = useState(null)
    const [txt_status, setTxtStatus] = useState('')
    const maxAvance = 9;
    const [exite, setExite] = useState(null)
    const [button0Enabled, setButton0Enabled] = useState(false);
    const toRoute = '/profesionales/verduras'
    const enviarDatos = async () => {
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('str_id_rol', str_id_rol);
        data.append('str_id_act', str_id_act);
        data.append('int_avance', int_avance);
        data.append('str_data', [0]);
        data.append('txt_status', 'incomplete')
        console.log(actService.crearActivity(data));
        await actService.crearActivity(data).then(response => {
            if (response.data[0]?.exito === '0') {
                console.log('SI', response.data);
                traerDatos()
            } else {
                console.log('No', response.data);
                traerDatos()
            }
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
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
    const handleClick = (id) => {
        let dataArray
        let cont
        let avanceF
        cont = Number(int_avance) + Number(1)
        avanceF = 'incomplet'
        let valFinal
        if (id === 1) {
            console.log('Entro a la condición de === 1');
            // Si el índice ya existe en el arreglo y es === 1, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[id - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        } else if (id < str_data.length) {
            console.log('id < str_data.length,Si el índice ya existe en el arreglo, actualizamos su valor a 1');
            // Si el índice ya existe en el arreglo, actualizamos su valor a 1
            const newArray = [...str_data];
            newArray[id - 1] = 1;
            valFinal = newArray
            setStrData(newArray);
        } else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < id; i++) {
                newArray.push(0);
            }
            newArray.push(1);
            // Si el arreglo supera las 5 posiciones, eliminamos la primera
            if (newArray.length > 6) {
                newArray.shift();
            }
            valFinal = newArray
            setStrData(newArray);
        }
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('int_avance', cont);
        data.append('str_id_rol', str_id_rol);
        data.append('str_id_act', str_id_act);
        data.append('str_data', valFinal);
        data.append('txt_status', avanceF)
        actService.crearActivity(data)
    };
    const handleArrow = () => {
        console.log('Click');
        let cont
        let avanceF
        cont = Number(int_avance) + Number(1)
        avanceF = 'incomplet'
        let valFinal
        if (1 === 1) {
            console.log('Entro a la condición de === 1');
            // Si el índice ya existe en el arreglo y es === 1, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[1 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        } else if (1 < str_data.length) {
            console.log('1 < str_data.length,Si el índice ya existe en el arreglo, actualizamos su valor a 1');
            // Si el índice ya existe en el arreglo, actualizamos su valor a 1
            const newArray = [...str_data];
            newArray[1 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);
        } else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 1; i++) {
                newArray.push(0);
            }
            newArray.push(1);
            // Si el arreglo supera las 5 posiciones, eliminamos la primera
            if (newArray.length > 8) {
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
        const index = buttons.findIndex((element) => 1 === 1);
        if (buttons[index].statusFruit === 'disabled') {
            const updatedElements = [...buttons];
            updatedElements[index].status = 'enabled';
            setButtons(updatedElements);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            if (exite === '0') {
                console.log('aaaaaaaaaaaaa');
                enviarDatos()
            } else if (exite !== '') {
                traerDatos()
            }
        }, 1500);
        setLoading(false);
    }, [loading, exite])
    useEffect(() => {
        if (str_data) {
            traerDatos()
        }
    }, [exite])
    useEffect(() => {
        if (str_data) {
            if (buttons[0].status === 'disabled') {
                // Update the status of the next button to enabled
                const updatedButtons = buttons.map((button, index) => {
                    if (index === 0) {
                        return { ...button, status: 'enabled' };
                    }
                    return button;
                });
                setButton0Enabled(true)
                setButtons(updatedButtons);
                return
            } else {
                if (button0Enabled === true) {
                    const countOnes = str_data.filter(button => button === '1').length;
                    const positionsToUnlock = buttons.slice(0, countOnes + 1).map(button => ({ ...button, status: 'enabled' }));
                    setButtons(buttons.map((button, index) => positionsToUnlock.find(position => position.id === button.id) || button));
                }
            }
        }
    }, [str_data, button0Enabled, buttons[maxAvance]]);
    return (
        <>
            <SlidePage
                to={toRoute}
                backgroundDesktop={fondopage}
                rutaNext='definicion'
                rutaPrev='/profesionales/menu-fruta-o-verdura'
                handleArrow={handleArrow}
            >
                {
                    loading ? (
                        <h1>Cargando</h1>
                    ) :
                        (
                            <div className='indice-verdura__grid'>
                                <div className='indice-verdura-contenedor-grid'>
                                    <ImageLoading src={indicee2} width='100%' className='indice-verdura__title' />
                                    <div className='indice-verdura__tema-contenedor'>
                                        {
                                            buttons.map(({ id, to, tema, subtema1, subtema2, status }) => (
                                                <Link key={id}
                                                    to={`${status === 'enabled' ? to : ''}`}
                                                    className={status === 'enabled' ? 'indice__links' : 'indice__links-disabled'}
                                                    onClick={() => { handleClick(id) }}
                                                >
                                                    <h1 className='indice-verdura__tema-titulo'>{id}. <span className={status === 'enabled' ? 'indice-verdura__tema-span' : 'indice-verdura__tema-span-disabled'}>{tema} <span><ul className='indice-verdura__lista'>
                                                        <li className='listaIndice'>{subtema1}</li>
                                                        <li className='listaIndice'>{subtema2}</li>
                                                    </ul></span></span></h1>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='indice-verdura__imagen-end'>
                                    <div className='indice-verdura__img-circle'>
                                        <ImageLoading src={circle} loading='lazy' />
                                    </div>
                                </div>
                            </div>
                        )
                }
            </SlidePage>
        </>
    )
}

export default IndiceVerdurasPro
