import ImageLoading from 'components/Reutilizable/ImageLoading'
import SlidePage from 'components/Reutilizable/SlidePage'
import { CounterContext } from 'context/GlobalProvider'
import { useContext, useEffect, useState } from 'react'
import ContestarActividad from 'service/ContestarActividad'
import fondopage from '../../../assets/images/fondos/pacypro/fondo-conclusiones.png'
import circle from '../../../assets/images/fondos/pacypro/verdura-conclusiones.png'
import './assets/css/conclusioness.css'
const Conclusiones = () => {
    const rutaN = '/paciente/verduras/creditos'
    const rutaP = '/paciente/verduras/reto-seis'
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
            for (let i = str_data.length + 1; i < 8; i++) {
                newArray.push(0);
            }
            newArray.push(1);
            // Si el arreglo supera las 7 posiciones, eliminamos la primera
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
    }

    return (
        <SlidePage
            backgroundDesktop={fondopage}
            rutaNext={rutaN}
            rutaPrev={rutaP}
            handleArrow={handleArrow}
            to={toRoute}
        >
            <div className='credit-verdura__grid'>
                <div className='credit-verdura-contenedor-grid-paciente'>
                    <h1 className='credit-text_Credit'>Conclusiones</h1>
                    <div className="over">
                        <p className='text__ConPaciente'>• La ingesta recomendada diaria de verduras es de: 400 g o 5 porciones de 80 g cada 1 al día. </p>
                        <p className='text__ConPaciente'>• Se sugiere el consumo de verduras en fresco o al vapor y evitar cocciones prolongadas.</p>
                        <p className='text__ConPaciente'>• Las verduras se pueden considerar alimentos funcionales ya que aportan nutrientes, antioxidantes y otros componentes que resultan benéficos para la salud.</p>
                        <p className='text__ConPaciente'>• El envejecimiento de las verduras conlleva la pérdida de nutrientes y su descomposición.</p>
                        <p className='text__ConPaciente'>• Recuerda, la conservación en frío (Refrigeración) retarda el proceso de envejecimiento. </p>
                        <p className='text__ConPaciente'>• Durante el proceso de envejecimiento se modifica: su textura, coloración (presencia de manchas), incrementan la concentración de azúcares y disminuyen la cantidad de fibra.</p>
                    </div>
                </div>
                <div className='credit-verdura__imagen-end'>
                    <div className='credit-verdura__img-circle'>
                        <ImageLoading src={circle} loading='lazy' />
                    </div>
                </div>
            </div>

        </SlidePage>
    )
}

export default Conclusiones