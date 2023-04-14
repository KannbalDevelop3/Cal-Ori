import React, { useContext, useEffect, useState } from 'react'
import RetoFinishScreen from 'components/Reutilizable/retos/RetoFinishScreen'
import RetoMainScreen from 'components/Reutilizable/retos/RetoMainScreen'
import FalseAndTrue from './FalseAndTrue'
import './assets/css/styles.css'
import fondoinicio from './assets/images/fondo-start.jpg'
import title from './assets/images/title-start.png'
import btnContinuar from './assets/images/continuar.png'
import fondoins from './assets/images/fondo-instruction.jpg'
import fondoIns from './assets/images/fondo-instruction.jpg'
import titleInstruction from './assets/images/title-instruction.png'
import RetoInstruction from 'components/Reutilizable/retos/RetoInstruction'
import btnComenzar from './assets/images/comenzar.png'

import modalfinish from './assets/images/game/modal-finish.png'
import { BotonCerrar } from 'components/Reutilizable/retos/EstilosFalseAndTrue'
import ImageLoading from 'components/Reutilizable/ImageLoading'
import tache from './assets/images/game/cerrar.png'
import { Link } from 'react-router-dom'
import { CounterContext } from 'context/GlobalProvider'
import ContestarActividad from 'service/ContestarActividad'
import BackGameRows from 'components/Reutilizable/BackGameRows'

const RetoCincoPro = () => {
    const [stateReto, setStateReto] = useState(0)
    const [str_data, setStrData] = useState(null)
    const { str_email_usu } = useContext(CounterContext)
    const [trofeoGameOneVerdura, setTrofeoGameOneVerdura] = useState(false);
    const [loading, setLoading] = useState(true);
    const [exite, setExite] = useState(null)
    const actService = new ContestarActividad();
    const ebook_Verduras = 'ebook_Verduras'
    const rutasig = '/profesionales/verduras/estacion';
    const rutaPrev = '/profesionales/verduras/bioactivos-presentes-en-las-verduras';
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
                    if (i === 7 && str_data[i] === '1') {
                        setTrofeoGameOneVerdura(true);
                    }
                }
            }
        }, 1000); // comprobar cada segundo
        return () => clearInterval(interval);
    }, [str_data, trofeoGameOneVerdura]);  // volver a ejecutar solo si el arreglo cambia
    useEffect(() => {
    }, [stateReto])
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
                        marginTopModalFo="10rem"
                        marginTopModalTree="5rem"
                        heightModalTree="60rem"
                        btnComenzar={btnContinuar}
                        backgroundModal={fondoins}
                        bottomInsTwo='15rem'

                    />
                    : stateReto === 1 ?
                        <RetoInstruction
                            backgroundInstruction={fondoIns}
                            btnComenzarReto={btnComenzar}
                            src={titleInstruction}
                            className='reto__instruction-cinco'
                            setStartReto={changeStateReto}

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

export default RetoCincoPro