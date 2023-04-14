import React, { useContext, useEffect, useState } from 'react'
import Imagen from '../../../Reutilizable/Imagen'
import SlidePage from '../../../Reutilizable/SlidePage'
import pagepa from './assets/images/fondo-white.jpg'
import title from './assets/images/envejecimiento/TITULO.png'
import './assets/css/envejecimiento.css'
import { envejecimientop } from './assets/data/dataVerdura'
import env1 from './assets/images/envejecimiento/IMAGEN1.png'
import env2 from './assets/images/envejecimiento/IMAGEN2.png'
import env3 from './assets/images/envejecimiento/IMAGEN3.png'
import ImageLoading from '../../../Reutilizable/ImageLoading'
import { CounterContext } from 'context/GlobalProvider'
import ContestarActividad from 'service/ContestarActividad'
const Envejecimiento = () => {
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
        if (4 === 4) {
            console.log('Entro a la condición de === 4');
            // Si el índice ya existe en el arreglo y es === 4, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[4 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        }
        else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 4; i++) {
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
        <SlidePage backgroundDesktop={pagepa}
            rutaPrev='/paciente/verduras/clasificacion'
            rutaNext='/paciente/verduras/reto-cuatro'
            handleArrow={handleArrow}
            to={toRoute}
        >
            <div className='env-verdura__contenedor'>
                <div className='tabla-verdura__textos'>
                    <Imagen imagenEf={title} estilo='enve-verdura__title' />
                </div>
                <div className='enve-verdura__contenedor'>
                    <div className='enve-verdur-contain'>
                        <h1 className='enve-ver__text1' >Una vez que se realiza la cosecha de la verdura u hortaliza fresca, está lista para su consumo; pero inicia su proceso de envejecimiento o senescencia.</h1>
                    </div>
                    <div className='enve-verdur-contain'>
                        <ImageLoading className='enve-ver__text2' width='100%' src={env1} />
                    </div>
                    <div className='enve-verdur-contain'>
                        <h1 className='enve-ver__text1' >El envejecimiento es un proceso que conlleva la pérdida paulatina y progresiva de los componentes de materia seca (proteínas, carbohidratos, azúcares, minerales, etc). La conservación en frío retarda este proceso, mientras que la conservación a temperatura ambiente afecta el proceso, ya que existe variación de la temperatura ambiental y humedad.</h1>
                    </div>
                    <div className='enve-verdur-contain'>
                        <ImageLoading className='enve-ver__text2' width='100%' src={env2} />
                    </div>
                    <div className='enve-verdur-contain'>
                        <h1 className='enve-ver__text1' >Los daños de la verdura u hortaliza por mal transporte o daños mecánicos por limpieza en la industria agrícola, hacen que los productos se deterioren más rápido.</h1>
                    </div>
                    <div className='enve-verdur-contain'>
                        <ImageLoading className='enve-ver__text2' width='100%' src={env3} />
                    </div>

                    {/* {
                        envejecimientop.map(({ id, texto, imagen }) => (
                            <div className='enve-ver-flex' key={id}>
                                <h1 className='enve-ver__text1'>{texto}</h1>
                                <Imagen imagenEf={imagen} estilo='enve-ver__text2' />
                            </div>
                        ))
                    } */}
                </div>
            </div>
        </SlidePage>
    )
}

export default Envejecimiento