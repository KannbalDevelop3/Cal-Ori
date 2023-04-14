import BackgroundImageT from 'components/Reutilizable/BackgroundImageT'
import BotonFixedIndice from 'components/Reutilizable/BotonFixedIndice'
import SlidePage from 'components/Reutilizable/SlidePage'
import fondopage from '../../../assets/images/fondos/pacypro/fondo-conclusiones.png'
import imgindice from '../../../assets/images/fondos/pacypro/fruta-conclusiones.png'
import './assets/styles/conclusiones.css'
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
import HorizontalPage from 'components/Reutilizable/HorizontalPage'

const CreditosF = () => {
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
            // Si el arreglo supera las 7 posiciones, eliminamos la primera
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
        <HorizontalPage>
            <BackgroundImageT backgroundImage={fondopage}>
                <BotonFixedIndice to='/paciente/frutas' />
                <div className="conclusiones__grid">
                    <div className='conclusion__creditos'>
                        <h1 className='text_Conslusiones'>Conclusiones</h1>
                        <p className='text_parrafoConclusiones'>• Recuerda consumir 400g entre frutas y verduras al día, para prevenir enfermedades</p>
                        <p className='text_parrafoConclusiones'>• Las frutas maduran y cambian su textura, color y sabor, además de aumentar su contenido de azúcares </p>
                        <p className='text_parrafoConclusiones'>• Procura consumir frutas como el plátano, durazno, naranja y mango antes de su punto máximo de maduración</p>
                        <p className='text_parrafoConclusiones'>• Recuerda que existen distintos métodos de conservación para alargar la vida de anaquel de tus frutas.</p>
                    </div>
                    <div className='conclusion__imagen-end'>
                        <img src={imgindice} alt="" />
                    </div>
                </div>
                <div className='video__contenido-principal'>
                    <div className='video__boton-siguiente'>
                        <Link to='/paciente/frutas/reto-tres'><img src={prevBoton} loading="lazy" /></Link>
                    </div>
                    <div className='video__boton-siguiente'>
                        <Link to='/paciente/frutas/creditos' onClick={() => handleArrow()}>
                            <img src={sigBoton} loading="lazy" />
                        </Link>
                    </div>
                </div>

            </BackgroundImageT>
        </HorizontalPage>
    )
}

export default CreditosF