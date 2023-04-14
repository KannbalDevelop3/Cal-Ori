import React, { useContext, useEffect, useState } from 'react'
import ImageLoading from '../../../Reutilizable/ImageLoading'
import SlidePage from '../../../Reutilizable/SlidePage'
import './assets/css/bioactivos.css'
import fondoBack from './assets/images/FONDO.png'
import tittle from './assets/images/bioactivos/TITULO.png'
import imagencircle from './assets/images/bioactivos/IMAGEN.png'
import { menuBioactivo, menuBioactivoText } from './assets/data/dataVerdura'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
import { ButtonRef } from 'components/Reutilizable/BotonReferencia'
import ModalReferencias from 'components/Reutilizable/ModalReferencias'
import TextBibliografia from 'components/Reutilizable/TextoReferencia'
const BioactivosPresentesVerdurasPro = () => {
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
    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    const handleModal = () => {
        setModal(true)
        setTimeout(() => {
            setAnimarModal(true)
        }, 600)
    }
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

    return (
        <>
            <SlidePage
                to={toRoute}
                backgroundDesktop={fondoBack}
                rutaPrev='/profesionales/verduras/importancia-del-proceso-termico-de-las-verduras'
                rutaNext='/profesionales/verduras/reto-cinco'
                handleArrow={handleArrow}
            >
                <section className='bioactivos-container'>
                    <div className='biactivos__titles'>
                        <ImageLoading src={tittle} width='85%' className='biactivos__title-principal' />
                    </div>
                    <div className='biactivos__contenido '>
                        <div className='biactivo__contenedor-textos'>
                            {
                                menuBioactivoText.map(({ id, text, text2, a }) => (
                                    <div key={id} className='contenedor-textos__grid'>
                                        <h1 className='boactivo__text'>{a}<span className='grid__span'>{text}</span></h1>
                                        <h1 className='boactivo__text'>&nbsp;{ } <span className='grid__span2'>{text2}</span></h1>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='bioactivos__contenido-imagen'>
                            <ImageLoading src={imagencircle} width='80%' className='biactivos__contenido-imagen-position' />
                        </div>
                    </div>
                </section>
                <ButtonRef
                    onClick={handleModal}
                />
                {
                    modal &&
                    <ModalReferencias
                        setModal={setModal}
                        animarModal={animarModal}
                        setAnimarModal={setAnimarModal}
                        mostrarOverlay={true}
                    >
                        <TextBibliografia>1. Nuha A. y cols; on behalf of the American Diabetes Association, Summary of Revisions: Standards of Care in Diabetes—2023. Diabetes Care 1 January 2023; 46 (Supplement_1): S5–S9.</TextBibliografia>
                        <TextBibliografia>2. Klimenko, N.S., Tyakht, A.V., Popenko, A.S., Vasiliev, A.S., Altukhov, I.A., Ischenko, D.S., Shashkova, T.I., et al. 2018. Microbiome responses to an uncontrolled short- term diet intervention in the frame of the Citizen Science Project. Nutrients 8;10(5):576. pubmed.ncbi.nlm.nih. gov/29738477/</TextBibliografia>
                        <TextBibliografia>3. Meza-Ortiz CJ, Martínez-Vázquez SE, Yamamoto-Furusho JK. Asociación del consumo de fibra dietética con la actividad de la colitis ulcerosa crónica idiopática. Estudio exploratorio en población mexicana. Gac Med Mex [Internet]. 2022;158(1). Disponible en: http://dx.doi.org/10.24875/gmm.21000457</TextBibliografia>
                    </ModalReferencias>
                }
            </SlidePage>
        </>
    )
}

export default BioactivosPresentesVerdurasPro