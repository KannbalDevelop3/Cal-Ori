import React, { useContext, useEffect, useState } from 'react'
import './assets/styles/procesos.css'
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import textitle from './assets/images/texto1_maduracion.png'
import Modal from '../../../Reutilizable/Modal'
import textomaduracion from './assets/images/Texto2_maduración.png'
import textproceso from './assets/images/texto3_maduracion.png'
import { bioquimicos, fisiologicos } from './assets/data/dataFrutas'
import { Link } from 'react-router-dom'
import BotonFixedIndice from 'components/Reutilizable/BotonFixedIndice'
import { CounterContext } from 'context/GlobalProvider'
import ContestarActividad from 'service/ContestarActividad'
import HorizontalPage from 'components/Reutilizable/HorizontalPage'


const Procesos = () => {
    const [estado, setEstado] = useState(false)
    const [estadoModal2, setEstadoModal2] = useState(false)
    const [modalActual, setmodalActual] = useState(0)
    const [modalFisiologico, setModalFisiologico] = useState(0)
    useEffect(() => {
        setmodalActual(modalActual)
    }, [])
    useEffect(() => {
        setModalFisiologico(modalFisiologico)
    }, [])
    function handleAnswerSubmit(e) {
        setEstado(!estado)
    }
    function handleAnswerSubmit2(e) {
        setEstadoModal2(!estadoModal2)
    }
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
        if (3 === 3) {
            console.log('Entro a la condición de === 3');
            // Si el índice ya existe en el arreglo y es === 2, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[3 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        }
        else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 3; i++) {
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
    return (
        <HorizontalPage>
            <div className='procesos__contenedor-pro'>
                <BotonFixedIndice to='/paciente/frutas' />
                <div className='procesos__contenedor-botones'>
                    <div className='processo__titulo-principal'>
                        <div className='procesos__grid'>
                            <img src={textitle} loading="lazy" />
                        </div>
                    </div>
                    <div className='procesos__maduracion'>
                        <img src={textomaduracion} className='proceso__titles' loading="lazy" />
                        <div className='procesos__maduracion-contenedor'>
                            <div className='procesos__center'>
                                {bioquimicos.map(({ id, imagen, disabled }) => (
                                    <div key={id} className='procesos__imagen-boton'>
                                        <button className='procesos__boton-img' loading="lazy" onClick={(e) => { handleAnswerSubmit(setmodalActual(id - 1), e) }} disabled={disabled}><img src={imagen} loading="lazy" /></button>
                                    </div>
                                ))}
                            </div>
                            <Modal estado={estado} cambiarEstado={setEstado}  backgroundDesktop={false} padding='10'>
                                <img className='procesos__imagen-modal' src={bioquimicos[modalActual]?.modal} loading="lazy" />
                            </Modal>
                            <div>
                            </div>
                            <div className='procesos__center'>
                                {fisiologicos.map(({ id, imagen, disabled }) => (
                                    <div key={id} className='procesos__imagen-boton'>
                                        <button type='button' disabled={disabled} className='procesos__boton-img' onClick={(e) => { handleAnswerSubmit2(setModalFisiologico(id - 1), e) }}><img className={``} src={imagen} loading="lazy" /></button>
                                    </div>
                                ))}
                            </div>
                            <Modal estado={estadoModal2} cambiarEstado={setEstadoModal2} backgroundDesktop={false} padding='10'>
                                <img className='procesos__imagen-modal' src={fisiologicos[modalFisiologico]?.modal} loading="lazy" />
                            </Modal>
                        </div>
                    </div>
                    <div className='procesos__etapas'>
                        <img src={textproceso} />
                    </div>
                </div>
                <div className='video__contenido-principal'>
                    <div className='video__boton-siguiente'>
                        <Link to='/paciente/frutas/video'><img src={prevBoton} loading="lazy" /></Link>
                    </div>
                    <div className='video__boton-siguiente'>
                        <Link to='/paciente/frutas/reto-uno' onClick={() => handleArrow()}>
                            <img src={sigBoton} loading="lazy" />
                        </Link>
                    </div>
                </div>
            </div>
        </HorizontalPage>
    )
}

export default Procesos
