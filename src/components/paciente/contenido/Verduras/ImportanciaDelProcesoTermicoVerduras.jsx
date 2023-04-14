
import ImageLoading from '../../../Reutilizable/ImageLoading'
import SlidePage from '../../../Reutilizable/SlidePage'
import './assets/css/importanciaProcesoTermico.css'
import fondoBack from './assets/images/fondo-white.jpg'
import title from './assets/images/importancia-del-proceso-termico-de-las-verduras/TITULO.png'
import subtitle from './assets/images/importancia-del-proceso-termico-de-las-verduras/TEXTO1.png'
import { menutermico } from './assets/data/dataVerdura'
import { useContext, useEffect, useState } from 'react'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
const ImportanciaDelProcesoTermicoVerduras = () => {
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
        if (6 === 6) {
            console.log('Entro a la condición de === 6');
            // Si el índice ya existe en el arreglo y es === 6, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
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
    return (
        <>
            <SlidePage 
            backgroundDesktop={fondoBack}
             rutaPrev='/paciente/verduras/composicion-nutrimental-de-verduras'
              rutaNext='/paciente/verduras/bioactivos-presentes-en-las-verduras' height='auto' 
              positionCF='relative'
              handleArrow={handleArrow}
              to={toRoute}
               >
                <div className='importancia-container'>
                    <div className='importancia__contenido-titles'>
                        <ImageLoading src={title} width='90%' className='importancia__title-princiapal'/>
                        <ImageLoading src={subtitle} width='85%' className='mt-6' />
                    </div>
                    <div className='composicion__contenido-tree'>
                        {menutermico.map(({ id, imagen, texto: {textI, widthI}, title: { imagens, width } }) => (
                            <div className='importancia__contenido-coccion' key={id}>
                                <div className='importancia__contenido-coccion-part-1'>
                                    <ImageLoading src={imagen} width='100%' />
                                </div>
                                <div className='importancia__contenido-coccion-part-2'>
                                    <ImageLoading src={imagens} width={width} />
                                    <ImageLoading src={textI} width={widthI} className='mt-5' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SlidePage>
        </>
    )
}

export default ImportanciaDelProcesoTermicoVerduras