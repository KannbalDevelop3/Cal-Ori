import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import texttito from './assets/images/texto_definicion.png'
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import './assets/styles/video.css'
import videoCar from './assets/video/CAL-ORI_CAPITULO1_frutas_.mp4'
import BotonFixedIndice from 'components/Reutilizable/BotonFixedIndice'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
import HorizontalPage from 'components/Reutilizable/HorizontalPage'
const VideoDefinicion = () => {
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
        if (2 === 2) {
            console.log('Entro a la condición de === 1');
            // Si el índice ya existe en el arreglo y es === 2, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[2 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        }
        else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 2; i++) {
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
        <>
            <HorizontalPage>
                <div className='video__contenido-vid'>
                    <BotonFixedIndice to='/paciente/frutas' />
                    <div className='video__reproducir-cont'>
                        <video controls>
                            <source src='https://bucket-kannbal-ac.s3.amazonaws.com/CAL-ORI_Frutas_new.mp4' type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                        <div className='video__texto-def'>
                            <img src={texttito} loading="lazy" />
                        </div>
                    </div>
                    <div className='video__contenido-principal'>
                        <div className='video__boton-siguiente'>
                            <Link to='/paciente/frutas'><img src={prevBoton} loading="lazy" /></Link>
                        </div>
                        <div className='video__boton-siguiente'>
                            <Link to='/paciente/frutas/procesos' onClick={() => handleArrow()}>
                                <img src={sigBoton} loading="lazy" />
                            </Link>
                        </div>
                    </div>
                </div>
            </HorizontalPage>
        </>
    )
}

export default VideoDefinicion