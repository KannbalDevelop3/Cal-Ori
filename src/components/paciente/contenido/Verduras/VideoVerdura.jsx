import React, { useContext, useEffect, useState } from 'react'
import SlidePage from '../../../Reutilizable/SlidePage'
import VideoEf from '../../../Reutilizable/VideoEf'
import './assets/css/videov.css'
import videoo from './assets/video/CAL-ORI_CAPITULO1_frutas_.mp4'
import fondopage from './assets/images/fondo-white.jpg'
import Imagen from '../../../Reutilizable/Imagen'
import imagev from './assets/images/title-video.png'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
const VideoVerdura = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
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
    const toRoute = '/paciente/verduras'
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
            console.log('Entro a la condición de === 2');
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
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    return (
        <SlidePage
            backgroundDesktop={fondopage}
            rutaPrev='/paciente/verduras'
            rutaNext='/paciente/verduras/clasificacion'
            handleArrow={handleArrow}
            to={toRoute}
        >
            <div className='video-verdura__contenedor'>
                <div className='video-verdura__subcontendor'>
                    {
                        windowSize.innerWidth > 1024 && windowSize.innerWidth < 1367 ?
                            <VideoEf src='https://bucket-kannbal-ac.s3.amazonaws.com/Cal-Ori_Verduras_new.mp4' stilovideo='video-verdura__vid' width='700' height='auto' />
                            :
                            windowSize.innerWidth > 1366 ?
                                <VideoEf src='https://bucket-kannbal-ac.s3.amazonaws.com/Cal-Ori_Verduras_new.mp4' stilovideo='video-verdura__vid' width='900' height='auto' />
                                :
                                <VideoEf src='https://bucket-kannbal-ac.s3.amazonaws.com/Cal-Ori_Verduras_new.mp4' stilovideo='video-verdura__vid' width='400' height='auto' />
                    }
                    <Imagen imagenEf={imagev} estilo='video-verdura__title' />
                </div>
            </div>
        </SlidePage>
    )
}

export default VideoVerdura