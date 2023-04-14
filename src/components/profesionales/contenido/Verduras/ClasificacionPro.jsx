import React, { useContext, useEffect, useState } from 'react'
import Imagen from '../../../Reutilizable/Imagen'
import SlidePage from '../../../Reutilizable/SlidePage'
import { menuclasificacion } from './assets/data/dataVerdura'
import './assets/css/clasificacion.css'
import './assets/css/hortalizas.css'
import './assets/css/tabla.css'
import fondopa from './assets/images/clasificacion/FONDO.jpg'
import titulop from './assets/images/clasificacion/TITULO.png'
import textpa from './assets/images/clasificacion/TEXTO.png'
import instruction from './assets/images/clasificacion/INSTRUCCIONES.png'
import h1 from './assets/images/hortaliza/1.png'
import h2 from './assets/images/hortaliza/2.png'
import h3 from './assets/images/hortaliza/3.png'
import h4 from './assets/images/hortaliza/4.png'
import h5 from './assets/images/hortaliza/5.png'
import hf1 from './assets/images/hortaliza/1f.png'
import hf2 from './assets/images/hortaliza/2f.png'
import hf3 from './assets/images/hortaliza/3f.png'
import hf4 from './assets/images/hortaliza/4f.png'
import hf5 from './assets/images/hortaliza/5f.png'
import ht1 from './assets/images/hortaliza/1-texto.png'
import ht2 from './assets/images/hortaliza/2-texto.png'
import ht3 from './assets/images/hortaliza/3-texto.png'
import ht4 from './assets/images/hortaliza/4-texto.png'
import ht5 from './assets/images/hortaliza/5-texto.png'
import titule from './assets/images/hortaliza/TITULO.png'
import instruc from './assets/images/hortaliza/INSTRUCCIONES.png'
import circle from './assets/images/hortaliza/IMAGEN-CIRCULO.png'
import title from './assets/images/tabla/TITULO.png'
import instruction2 from './assets/images/tabla/TITULO2.png'
import tablita from './assets/images/tabla/CUADRO-INFO.png'
import ImageLoading from '../../../Reutilizable/ImageLoading'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
import { ButtonRef } from 'components/Reutilizable/BotonReferencia'
import ModalReferencias from 'components/Reutilizable/ModalReferencias'
import TextBibliografia from 'components/Reutilizable/TextoReferencia'

function ClasificacionPro() {
    const [estado, setEstado] = useState(false)
    const [estadod, setEstadod] = useState(false)
    const [estadot, setEstadot] = useState(false)
    const [estadoc, setEstadoc] = useState(false)
    const [estadoci, setEstadoci] = useState(false)
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
        if (3 === 3) {
            console.log('Entro a la condición de === 3');
            // Si el índice ya existe en el arreglo y es === 3, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[3 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        }
        else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 3; i++) {
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
    const paraEdoUno = () => {
        setEstado(true)
        setEstadod(false)
        setEstadot(false)
        setEstadoc(false)
        setEstadoci(false)
    }
    const paraEdoDos = () => {
        setEstado(false)
        setEstadod(true)
        setEstadot(false)
        setEstadoc(false)
        setEstadoci(false)

    }
    const paraEdoTres = () => {
        setEstado(false)
        setEstadod(false)
        setEstadot(true)
        setEstadoc(false)
        setEstadoci(false)

    }
    const paraEdoCuatro = () => {
        setEstado(false)
        setEstadod(false)
        setEstadot(false)
        setEstadoc(true)
        setEstadoci(false)

    }
    const paraEdoCinco = () => {
        setEstado(false)
        setEstadod(false)
        setEstadot(false)
        setEstadoc(false)
        setEstadoci(true)

    }
    const [modal, setModal] = useState(false)
    const [idu, setIdu] = useState('')
    const [animarModal, setAnimarModal] = useState(false)
    const handleModal = () => {
        setModal(true)
        setTimeout(() => {
            setAnimarModal(true)
        }, 600)
    }
    useEffect(() => {
        setIdu(idu)
    }, [idu])
    console.log(idu);
    return (
        <SlidePage backgroundDesktop={fondopa}
            to={toRoute}
            rutaPrev='/profesionales/verduras/definicion'
            rutaNext='/profesionales/verduras/envejecimiento'
            height='auto' positionCF='relative'
            handleArrow={handleArrow}
        >
            <div className='clasificacion-verdura__contenedor'>
                <div className='clasificacion-verdura__textos'>
                    <Imagen imagenEf={titulop} estilo='clasificacion-verdura__title' />
                    <Imagen imagenEf={textpa} estilo='clasificacion-verdura__texto' />
                    <Imagen imagenEf={instruction} estilo='clasificacion-verdura__inst' />
                </div>
                <div className='clasificacion-verdura__seis'>
                    {
                        menuclasificacion.map(({ id, imagen, itext }) => (
                            <div key={id} className='clasificacion-verdura__contendor-ti '>
                                <div className='tooltip'>
                                    <ImageLoading src={imagen} estilo='clasificacion-verdura__hortalizas ' />
                                    <span className='tooltiptext'><img src={itext} loading='lazy' /></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <section className='' >
                <div className='hortalizas-verdura__contenedor'>
                    <div className='hortalizas-verdura__contenedor-textos'>
                        <Imagen imagenEf={titule} estilo='hortalizas-verdura__titulo' />
                        <Imagen imagenEf={instruc} estilo='hortalizas-verdura__inst' />
                    </div>
                    <div className='hortalizas-verdura__iconos-text'>
                        <div className='hortalizas-verdura__cont-img'>
                            <div className='circle-pop'>
                                <Imagen imagenEf={circle} estilo='hortalizas-verdura__img-circle' />
                            </div>
                            <div className='hortalizas-verdura__relative'>
                                <div className='hortalizas-verdura__absoluto'>
                                    <button
                                        className='hortali__hidden hortaliza--buttons'
                                        onClick={() => { paraEdoUno() }}
                                    >
                                        <Imagen imagenEf={estado ? h1 : hf1} estilo={`${estado ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                    </button>
                                </div>
                                <div className='hortalizas-verdura__absoluto'>
                                    <button
                                        className='hortali__hidden hortaliza--buttons'
                                        onClick={() => { paraEdoDos() }}
                                    >
                                        <Imagen imagenEf={estadod ? h2 : hf2} estilo={`${estadod ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                    </button>
                                </div>
                                <div className='hortalizas-verdura__absoluto'>
                                    <button
                                        className='hortali__hidden hortaliza--buttons'
                                        onClick={() => { paraEdoTres() }}
                                    >
                                        <Imagen imagenEf={estadot ? h3 : hf3} estilo={`${estadot ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                    </button>
                                </div>
                                <div className='hortalizas-verdura__absoluto'>
                                    <button
                                        className='hortali__hidden hortaliza--buttons'
                                        onClick={() => { paraEdoCuatro() }}
                                    >
                                        <Imagen imagenEf={estadoc ? h4 : hf4} estilo={`${estadoc ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                    </button>
                                </div>
                                <div className='hortalizas-verdura__absoluto'>
                                    <button
                                        className='hortali__hidden hortaliza--buttons'
                                        onClick={() => { paraEdoCinco() }}
                                    >
                                        <Imagen imagenEf={estadoci ? h5 : hf5} estilo={`${estadoci ? 'hortalizas-verdura__relative-image' : 'hortalizas-verdura__relative-image-none'}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='hortalizas-verdura__center-text'>
                            {
                                estado && (<ImageLoading src={ht1} className='hort-img-t' />)
                            }
                            {
                                estadod && (<ImageLoading src={ht2} className='hort-img-t' />)
                            }
                            {
                                estadot && (
                                    <div>
                                        <ImageLoading src={ht3} className='hort-img-t' />
                                        <ButtonRef
                                            onClick={() => handleModal(setIdu(1))}
                                            position='relative'
                                            bottom='0' bottomA='0' bottomB='0' bottomC='0'
                                            margin='' right='' left='4rem' leftA='20rem' leftB='20rem' leftC='20rem'
                                        />
                                    </div>
                                )
                            }
                            {
                                estadoc && (
                                    <div>
                                        <ImageLoading src={ht4} className='hort-img-t' />
                                        <ButtonRef
                                            onClick={() => handleModal(setIdu(2))}
                                            position='relative'
                                            bottom='0' bottomA='0' bottomB='0' bottomC='0'
                                            margin='' right='' left='4rem' leftA='20rem' leftB='20rem' leftC='20rem'
                                        />
                                    </div>
                                )
                            }
                            {
                                estadoci && (
                                    <div>
                                        <ImageLoading src={ht5} className='hort-img-t' />
                                        <ButtonRef
                                            onClick={() => handleModal(setIdu(3))}
                                            position='relative'
                                            bottom='0' bottomA='0' bottomB='0' bottomC='0'
                                            margin='' right='' left='4rem' leftA='20rem' leftB='20rem' leftC='20rem'
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className='' >
                <div className='tabla-verdura__contenedor'>
                    <div className='tabla-verdura__textos'>
                        <Imagen imagenEf={title} estilo='tabla-verdura__title' />
                        <div className='text-center'>
                            <Imagen imagenEf={instruction2} estilo='tabla-verdura__texto' />
                        </div>
                    </div>
                    <div className='tabla-verdura__tabl'>
                        <Imagen imagenEf={tablita} estilo='tabla-verdura__cnter' />
                    </div>
                </div>
            </section>
            {modal &&
                <ModalReferencias
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    mostrarOverlay={true}
                >
                    {
                        idu === 1 ?
                            <>
                                <TextBibliografia>
                                    1. Aune, D., Giovannucci, E., Boffetta, P., Fadnes, L.T., Keum, N., Norat, T., Greenwood, D.C., et al. 2017. Fruit and vegetable
                                    intake and the risk of cardiovascular disease, total cancer and all-cause mortality: A systematic review and dose-response meta-analysis of prospective studies. International Journal of Epidemiology 46.3: 1029–56. doi. org/10.1093/ije/dyw319
                                </TextBibliografia>
                                <TextBibliografia>
                                    2. Wang, X., Ouyang, Y., Liu, J., Zhu, M., Zhao, G., Bao, W. y Hu, F.B. 2014. Fruit and vegetable consumption and mortality from all causes, cardiovascular disease, and cancer: Systematic review and dose- response meta-analysis of prospective cohort studies. Bmj 349: g4490. doi. org/10.1136/bmj.g4490
                                </TextBibliografia>
                            </>
                            :
                            idu === 2 ?
                                <TextBibliografia>
                                    1. Aune, D., Giovannucci, E., Boffetta, P., Fadnes, L.T., Keum, N., Norat, T., Greenwood, D.C.,
                                    et al. 2017. Fruit and vegetable
                                    intake and the risk of cardiovascular disease, total cancer and all-cause mortality: A systematic review and dose-response meta-analysis of prospective studies. International Journal of Epidemiology 46.3: 1029–56. doi. org/10.1093/ije/dyw319
                                </TextBibliografia>
                                :
                                <>
                                    <TextBibliografia>
                                        1. FAO. 2020. Proyecto de visión y estrategia relativas a la labor de la FAO en materia de nutrición 129.o período de sesiones del Comité del Programa (9-13 de noviembre). FAO, Roma.
                                        <a href="http://www.fao.org/3/nd940es/nd940es.pdf" target="_blank"> http://www.fao.org/3/nd940es/nd940es.pdf</a>.
                                    </TextBibliografia>
                                    <TextBibliografia>
                                        2. Afshin, A., Sur, P.J., Fay, K.A., Cornaby, L., Ferrara, G., Salama, J.S., Mullany, E.C. et al. 2019. Health effects of dietary risks in 195 countries, 1990–2017: A systematic analysis for the Global Burden of Disease Study 2017. The Lancet 393(10184): 1958-72.
                                        <a href="www.thelancet.com/article/S0140-6736(19)30041-8/fulltext" target="_blank"> www.thelancet.com/article/S0140-6736(19)30041-8/fulltext</a>.
                                    </TextBibliografia>
                                </>
                    }
                </ModalReferencias>}
        </SlidePage>
    )
}

export default ClasificacionPro