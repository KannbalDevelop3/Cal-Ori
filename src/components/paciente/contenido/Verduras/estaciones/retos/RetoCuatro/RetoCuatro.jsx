import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RetoFinishScreen from '../../../../../../Reutilizable/retos/RetoFinishScreen'
import RetoMainScreen from '../../../../../../Reutilizable/retos/RetoMainScreen'
import FalseAndTrue from './FalseAndTrueCuatro'
import './assets/css/styles-reto-cuatro.css'
import fondoinicio from './assets/images/intro/FONDO.jpg'
import title from './assets/images/intro/importancia_verduras.png'
import fondoins from './assets/images/instrucciones/FONDO.jpg'
import RetoInstruction from '../../../../../../Reutilizable/retos/RetoInstruction'
import titleInstruction from './assets/images/instrucciones/instrucciones.png'
import modalfinish from './assets/images/cierre/TERMINASTE.png'
import { BotonCerrar } from '../../../../../../Reutilizable/retos/EstilosFalseAndTrue'
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import tache from './assets/images/game/BOTON-SALIR.png'
import btnComenzar from './assets/images/instrucciones/BOTON-COMENZAR.png'
import btnContinuar from '../gral/continuar.png'
import { CounterContext } from 'context/GlobalProvider'
import ContestarActividad from 'service/ContestarActividad'
import BackGameRows from 'components/Reutilizable/BackGameRows'


export const RetoCuatro = () => {
    const [stateReto, setStateReto] = useState(0)
    const [str_data, setStrData] = useState(null)
    const { str_email_usu } = useContext(CounterContext)
    const [trofeoGameOneVerdura, setTrofeoGameOneVerdura] = useState(false);
    const [loading, setLoading] = useState(true);
    const [exite, setExite] = useState(null)
    const actService = new ContestarActividad();
    const ebook_Verduras = 'ebook_Verduras'
    const changeStateReto = (value) => {
        setStateReto(value)
        if (value === 1) { }
    }
    const traerDatosRetosVerduras = async () => {
        let isMounted = true;
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('str_id_act', ebook_Verduras);
        data.append('str_id_rol', 1);
        await actService.existeActivity(data).then(response => {
            if (isMounted) {
                const res = response.data
                const contestarExiste = res;
                setExite(contestarExiste[0].contestar_existe)
                const dataArray = contestarExiste[0]?.str_saveData?.split(",");
                setStrData(dataArray);
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
            if (exite !== '') {
                traerDatosRetosVerduras()
            }
        }, 1500);
        setLoading(false);
    }, [loading, exite])
    useEffect(() => {
        const interval = setInterval(() => {
            // Recorrer el arreglo y actualizar el estado correspondiente si se encuentra un 1
            if (str_data) {
                for (let i = 0; i < 8; i++) {
                    if (i === 4 && str_data[i] === '1') {
                        setTrofeoGameOneVerdura(true);
                    }
                }
            }
        }, 1000); // comprobar cada segundo
        return () => clearInterval(interval);
    }, [str_data, trofeoGameOneVerdura]);  // volver a ejecutar solo si el arreglo cambia
    useEffect(() => {
    }, [stateReto])
    const rutasig = '/paciente/verduras/composicion-nutrimental-de-verduras';
    const rutaPrev = '/paciente/verduras/envejecimiento'
    console.log(stateReto, trofeoGameOneVerdura);
    return (
        <BackGameRows
            visibility={stateReto === 0 &&
                trofeoGameOneVerdura ? 'visible' : 'hidden'
            } rutaPrev={rutaPrev} rutaNext={rutasig}
        >
            {
                stateReto === 0 ?
                    <RetoMainScreen
                        setStart={changeStateReto}
                        backgroundDesktop={fondoinicio}
                        backgroundModalDesktop={title}
                        btnComenzar={btnContinuar}
                        marginTopModalTwo='10rem'
                        heightModalTree='600px'
                        marginTopModalTree='13rem'
                        marginTopModalFo='8rem'
                    />
                    : stateReto === 1 ?
                        <RetoInstruction
                            backgroundInstruction={fondoins}
                            btnComenzarReto={btnComenzar}
                            src={titleInstruction}
                            className='reto__cuatro__instruction-four'
                            setStartReto={changeStateReto}
                            paddinInlineDesktTwo='28.5rem'
                            paddinInlineDesktOne='29rem'
                            paddinInlineDeskt='16rem'
                            marginIns='auto'
                            leftIns='0'
                            rightIns='0'
                            bottomIns='10rem'
                            bottomInsOne='20rem'
                            paddinInlineDesktTree='41rem'
                            bottomInstTree='25rem'
                            bottomInsTwwo='27rem'
                        />
                        : stateReto === 2 ?
                            <FalseAndTrue
                                setFinishReto={changeStateReto}
                            />
                            :
                            <RetoFinishScreen
                                backgroundDesktFinal={fondoinicio}
                                mostrarOverlay={true}
                                src={modalfinish}
                                className='reto__modal-finish'
                            >
                                <BotonCerrar >
                                    <Link to={rutasig} className='reset-link' >
                                        <ImageLoading src={tache} />
                                    </Link>
                                </BotonCerrar>
                            </RetoFinishScreen>
            }
        </BackGameRows>
    )
}