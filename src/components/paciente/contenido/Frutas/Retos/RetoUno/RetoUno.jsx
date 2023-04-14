import React, { useContext, useEffect, useState } from 'react'
import RetoFinishScreen from '../../../../../Reutilizable/retos/RetoFinishScreen'
import RetoMainScreen from '../../../../../Reutilizable/retos/RetoMainScreen'
import FalseAndTrue from './FalseAndTrue'
import './assets/css/styles.css'
import fondoinicio from './assets/images/fondo-start.jpg'
import title from './assets/images/title-start.png'
import btnContinuar from './assets/images/continuar.png'
import fondoins from './assets/images/fondo-instruction.jpg'
import RetoInstruction from '../../../../../Reutilizable/retos/RetoInstruction'
import fondoIns from './assets/images/fondo-instruction.jpg'
import btnComenzar from './assets/images/comenzar.png'
import titleInstruction from './assets/images/title-instruction.png'
import modalfinish from './assets/images/game/modal-finish.png'
import { BotonCerrar } from '../../../../../Reutilizable/retos/EstilosFalseAndTrue'
import ImageLoading from '../../../../../Reutilizable/ImageLoading'
import tache from './assets/images/game/cerrar.png'
import { Link } from 'react-router-dom'
import BackGameRows from 'components/Reutilizable/BackGameRows'
import { CounterContext } from 'context/GlobalProvider'
import LoginService from 'service/LoginService'
import ContestarActividad from 'service/ContestarActividad'
const RetoUno = () => {
    const [stateReto, setStateReto] = useState(0)
    const [str_data, setStrData] = useState(null)
    const { str_email_usu } = useContext(CounterContext)
    const [trofeoGameOneFruta, setTrofeoGameOneFruta] = useState(false);
    const [loading, setLoading] = useState(true);
    const [exite, setExite] = useState(null)
    const actService = new ContestarActividad();
    const rutasig = '/paciente/frutas/pdf';
    const ebook_Frutas = 'ebook_Frutas'
    const rutaPrev = '/paciente/frutas/procesos'
    const changeStateReto = (value) => {
        setStateReto(value)
        if (value === 1) { }
    }
    const traerDatosRetosFrutas = async () => {
        let isMounted = true;
        let data = new URLSearchParams();
        data.append('str_email_usu', str_email_usu);
        data.append('str_id_act', ebook_Frutas);
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
                traerDatosRetosFrutas()
            }
        }, 1500);
        setLoading(false);
    }, [loading, exite])
    useEffect(() => {
        const interval = setInterval(() => {
            // Recorrer el arreglo y actualizar el estado correspondiente si se encuentra un 1
            if (str_data) {
                for (let i = 0; i < 8; i++) {
                    if (i === 3 && str_data[i] === '1') {
                        setTrofeoGameOneFruta(true);
                    }
                }
            }
        }, 1000); // comprobar cada segundo
        return () => clearInterval(interval);
    }, [str_data, trofeoGameOneFruta]);  // volver a ejecutar solo si el arreglo cambia
    useEffect(() => {

    }, [stateReto])
    console.log(trofeoGameOneFruta);
    return (
        <BackGameRows
            visibility={stateReto === 0 &&
                trofeoGameOneFruta ? 'visible' : 'hidden'
            } rutaPrev={rutaPrev} rutaNext={rutasig}>
            {
                stateReto === 0 ?
                    <RetoMainScreen
                        setStart={changeStateReto}
                        backgroundDesktop={fondoinicio}
                        backgroundModalDesktop={title}
                        btnComenzar={btnContinuar}
                        backgroundModal={fondoins}
                        widthModalTree='1000px'
                        heightModalTree='600px'

                    />
                    : stateReto === 1 ?
                        <RetoInstruction
                            backgroundInstruction={fondoIns}
                            btnComenzarReto={btnComenzar}
                            src={titleInstruction}
                            className='reto__instruction'
                            setStartReto={changeStateReto}
                            paddinInlineDesktOne='28rem'
                            paddinInlineDesktTree='36rem'
                            paddinInlineDesktTwo='26rem'

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

export default RetoUno