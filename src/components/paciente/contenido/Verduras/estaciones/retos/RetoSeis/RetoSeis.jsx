import RetoInstruction from 'components/Reutilizable/retos/RetoInstruction'
import RetoMainScreen from 'components/Reutilizable/retos/RetoMainScreen'
import React, { useContext, useEffect, useState } from 'react'
import fondoinicio from './assets/images/inicio/FONDO.jpg'
import title from './assets/images/inicio/title.png'
import btncontinuar from './assets/images/continuar.png'
import fondoinst from './assets/images/game/instrucciones/FONDO.jpg'
import btncomenzar from './assets/images/game/instrucciones/btn.png'
import titleInstruction from './assets/images/game/instrucciones/title.png'

import './assets/css/reto-seis.css'
import MatchColumns from './MatchColums'
import RetoFinishScreen from 'components/Reutilizable/retos/RetoFinishScreen'
import fondofinal from './assets/images/game/FONDO.jpg'
import modalfinish from './assets/images/fin/modal-fin.png'
import { BotonCerrar } from 'components/Reutilizable/retos/EstilosFalseAndTrue'
import ImageLoading from 'components/Reutilizable/ImageLoading'
import tache from './assets/images/fin/BOTON-SALIR.png'
import { Link } from 'react-router-dom'
import BackGameRows from 'components/Reutilizable/BackGameRows'
import { CounterContext } from 'context/GlobalProvider'
import ContestarActividad from 'service/ContestarActividad'
const RetoSeis = () => {
    const [stateReto, setStateReto] = useState(0)
    const [str_data, setStrData] = useState(null)
    const { str_email_usu } = useContext(CounterContext)
    const [trofeoGameOneVerdura, setTrofeoGameOneVerdura] = useState(false);
    const [loading, setLoading] = useState(true);
    const [exite, setExite] = useState(null)
    const actService = new ContestarActividad();
    const ebook_Verduras = 'ebook_Verduras'
    const rutasig = '/paciente/verduras/conclusiones';
    const rutaPrev = '/paciente/verduras/estacion';
    const changeStateReto = (value) => {
        setStateReto(value)
        if (value === 1) {
        }
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
                for (let i = 0; i < 9; i++) {
                    if (i === 8 && str_data[i] === '1') {
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
                        className='reto-seis__inicio'
                        btnComenzar={btncontinuar}
                        marginTopModalTwo='8rem'
                        marginTopModalTree='24rem'
                        marginTopModalFo='15%'
                        marginBottomModalFo='6%'
                        widthU='450px'
                    />
                    : stateReto === 1 ?
                        <RetoInstruction
                            backgroundInstruction={fondoinst}
                            src={titleInstruction}
                            className='reto-seis__instruction'
                            btnComenzarReto={btncomenzar}
                            setStartReto={changeStateReto}
                            paddinInlineDesktOne='28rem'
                            paddinInlineDesktTwo='32rem'
                            paddinInlineDesktTree='36rem'
                            leftInsOne='0'
                            rightInsOne='0'
                            marginInsOne='auto'
                            bottomInsOne='12rem'
                            leftInsTwwo='0'
                            rightInsTwwo='0'
                            marginInsTwwo='auto'
                            bottomInsTwwo='23rem'
                            leftInsTree='0'
                            rightInsTree='0'
                            marginInsTree='auto'
                            bottomInstTree='22rem'
                            leftInsMb='0'
                            rightInsMb='0'
                            marginInsMb='auto'
                            bottomInsMb='25%'
                        />
                        : stateReto === 2 ?
                            <MatchColumns
                                setFinishReto={changeStateReto}
                            />
                            :
                            <RetoFinishScreen
                                backgroundDesktFinal={fondofinal}
                                mostrarOverlay={true}
                                src={modalfinish}
                                className='modal-finish'
                            >
                                <BotonCerrar>
                                    <Link to='/paciente/verduras/conclusiones' className='reset-link-seis'>
                                        <ImageLoading src={tache} />
                                    </Link>
                                </BotonCerrar>
                            </RetoFinishScreen>

            }
        </BackGameRows>
    )
}

export default RetoSeis