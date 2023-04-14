import React, { useContext, useEffect, useState } from 'react'
import ImageLoading from '../../../Reutilizable/ImageLoading'
import SlidePage from '../../../Reutilizable/SlidePage'
import './assets/css/bioactivos.css'
import fondoBack from './assets/images/FONDO.png'
import tittle from './assets/images/bioactivos/TITULO.png'
import imagencircle from './assets/images/bioactivos/IMAGEN.png'
import { menuBioactivo } from './assets/data/dataVerdura'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
const BioactivosPresentesVerduras = () => {
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
        if (7 === 7) {
            console.log('Entro a la condición de === 7');
            // Si el índice ya existe en el arreglo y es === 7, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[7 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        }
        else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 7; i++) {
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
            <SlidePage 
            backgroundDesktop={fondoBack} 
            rutaPrev='/paciente/verduras/importancia-del-proceso-termico-de-las-verduras'
             rutaNext='/paciente/verduras/reto-cinco'
             handleArrow={handleArrow}
             to={toRoute}
             >
                <section className='bioactivos-container'>
                    <div className='biactivos__titles'>
                        <ImageLoading src={tittle} width='85%' className='biactivos__title-principal' />
                    </div>
                    <div className='biactivos__contenido '>
                        <div className='biactivo__contenedor-textos'>
                            {
                                menuBioactivo.map(({ id, imagen:{img, width} }) => (
                                    <div key={id}>
                                        <ImageLoading src={img} width={width} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='bioactivos__contenido-imagen'>
                            <ImageLoading src={imagencircle} width='80%' className='biactivos__contenido-imagen-position' />
                        </div>
                    </div>
                </section>
            </SlidePage>
        </>
    )
}

export default BioactivosPresentesVerduras