import BackgroundImageT from 'components/Reutilizable/BackgroundImageT'
import BotonFixedIndice from 'components/Reutilizable/BotonFixedIndice'
import SlidePage from 'components/Reutilizable/SlidePage'
import fondopage from '../../../assets/images/fondos/pacypro/fondo-conclusiones.png'
import imgindice from '../../../assets/images/fondos/pacypro/fruta-conclusiones.png'
import './assets/styles/conclusiones.css'
import './assets/styles/ce.css'
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'

const CreditosFPro = () => {
    const [str_id_act, setStrIdAct] = useState('ebook_Frutas')
    const [str_id_rol, strIdRol] = useState(1)
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState({})
    const actService = new ContestarActividad();
    const { str_email_usu } = useContext(CounterContext)
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
        if (7 === 7) {
            // Si el índice ya existe en el arreglo y es === 6, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
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
    console.log(str_data);
    return (
        <BackgroundImageT backgroundImage={fondopage}>
            <BotonFixedIndice to='/profesionales/frutas' />
            <div className="conclusiones__grid">
                <div className='conclusion__creditos'>
                    <h1 className='text_Conslusiones'>Conclusiones</h1>
                    <p className='text_parrafoConclusionesPro'>• La maduración de las frutas sufre diferentes cambios bioquímicos y biológicos que modifican la firmeza, color, sabor y textura de la fruta. Debido a esto, el contenido de hidratos de carbono aumenta por la hidrólisis del almidón e incrementando en algunas el índice glucémico. Es así que; existen diversas maneras de conservar las frutas y alargar la vida de anaquel del producto. Recordando que: la OMS, recomienda consumir al día 400 g de frutas y/o verduras, y estas acciones, constituyen un factor protector ante el riesgo de desarrollar enfermedades crónico-degenerativas.
                    </p>

                </div>
                <div className='conclusion__imagen-end'>
                    <img src={imgindice} alt="" />
                </div>
            </div>
            <div className='video__contenido-principal'>
                <div className='video__boton-siguiente'>
                    <Link to='/profesionales/frutas/reto-tres'><img src={prevBoton} loading="lazy" /></Link>
                </div>
                <div className='video__boton-siguiente'>
                    <Link to='/profesionales/frutas/creditos' onClick={() => handleArrow()}>
                        <img src={sigBoton} loading="lazy" />
                    </Link>
                </div>
            </div>

        </BackgroundImageT>
    )
}

export default CreditosFPro