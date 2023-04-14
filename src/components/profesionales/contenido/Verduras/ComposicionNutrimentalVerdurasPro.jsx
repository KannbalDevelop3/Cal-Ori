import React, { useContext, useEffect, useState } from 'react'
import ImageLoading from '../../../Reutilizable/ImageLoading'
import SlidePage from '../../../Reutilizable/SlidePage'
import fondoBack from './assets/images/fondo-white.jpg'
import title from './assets/images/composicion-nutrimental-verduras/TITULO.png'
import subtitle from './assets/images/composicion-nutrimental-verduras/SUBTITULO.png'
import './assets/css/composisionNutrimental.css'
import { menuComposicion } from './assets/data/dataVerdura'
import { CounterContext } from 'context/GlobalProvider'
import ContestarActividad from 'service/ContestarActividad'
const ComposicionNutrimentalVerdurasPro = () => {
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
    const toRoute = '/profesionales/verduras'
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
        if (5 === 5) {
            console.log('Entro a la condición de === 5');
            // Si el índice ya existe en el arreglo y es === 5, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[5 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        }
        else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 5; i++) {
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
    console.log('date: ', date);
    console.log('str_data: ', str_data);
    console.log('int_avance: ', int_avance);
    return (
        <>
            <SlidePage backgroundDesktop={fondoBack}
                rutaPrev='/profesionales/verduras/reto-cuatro'
                rutaNext='/profesionales/verduras/importancia-del-proceso-termico-de-las-verduras'
                to={toRoute}
            >
                <div className="composicion-container">
                    <div className='composicion__titles'>
                        <ImageLoading src={title} width='100%' className='composicion__hortaliza-title' />
                        <ImageLoading src={subtitle} width='40%' />
                    </div>
                    <div className='composicion__contenido-verduras'>
                        {menuComposicion.map(({ id, icon, texto1: { imagen, width, height }, texto2: { imagen2, width2, height2 }, flecha }) => (
                            <div key={id} className='composiciom__contenedor-secundario'>
                                <div className='part-1'>
                                    <ImageLoading src={icon} width='80%' height={height} className='img-icon' />
                                </div>
                                <div className='part-2'>
                                    <ImageLoading src={imagen} width={width} className='img-text-1' />
                                </div>
                                <div className='part-3'>
                                    <ImageLoading src={flecha} width='75%' />
                                </div>
                                <div className='part-4'>
                                    <ImageLoading src={imagen2} width={width2} height={height2} className='img-text-2' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SlidePage>
        </>
    )
}

export default ComposicionNutrimentalVerdurasPro