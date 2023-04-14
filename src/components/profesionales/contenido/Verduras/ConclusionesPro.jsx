import SlidePage from 'components/Reutilizable/SlidePage'
import { CounterContext } from 'context/GlobalProvider'
import { useContext, useEffect, useState } from 'react'
import ContestarActividad from 'service/ContestarActividad'
import fondopage from '../../../assets/images/fondos/pacypro/fondo-conclusiones.png'
import circle from '../../../assets/images/fondos/pacypro/verdura-conclusiones.png'
import ImageLoading from 'components/Reutilizable/ImageLoading'
const ConclusionesPro = () => {
    const rutaN = '/profesionales/verduras/creditos'
    const rutaP = '/profesionales/verduras/reto-seis'
    const toRoute = '/profesionales/verduras'
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
            rutaNext={rutaN} rutaPrev={rutaP}
            to={toRoute}
            handleArrow={handleArrow}
        >
            <div className='credit-verdura__grid'>
                <div className='credit-verdura-contenedor-grid-paciente'>
                    <h1 className='credit-text_Credit'>Conclusiones</h1>
                    <p className='text__ConPacientePro'>• Las verduras poseen un alto contenido  vitaminas, minerales y fibra; además de agua, por lo que es una excelente opción incluirlas en la dieta. Su consumo recomendado según la OMS es de  400g o 5 porciones de 80g al día. Se sugiere consumir en fresco o al vapor y evitar cocciones prolongadas; esto conlleva un menor riesgo de desarrollar diabetes, mejorar la microbiota intestinal y el sistema inmunológico, además de prevenir la malnutrición como: desnutrición, sobrepeso y obesidad. Para su conservación se emplean métodos en frío (refrigeración preferentemente) para reducir la pérdida de componentes bioactivos y nutrientes de las verduras que se dan por el proceso de senescencia. </p>

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

export default ConclusionesPro