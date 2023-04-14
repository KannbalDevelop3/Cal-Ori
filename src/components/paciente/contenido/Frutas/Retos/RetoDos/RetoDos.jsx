import RetoInstruction from 'components/Reutilizable/retos/RetoInstruction'
import RetoMainScreen from 'components/Reutilizable/retos/RetoMainScreen'
import React, { useContext, useEffect, useState } from 'react'
import fondoinicio from './assets/images/inicio/FONDO.jpg'
import title from './assets/images/inicio/title.png'
import btncontinuar from './assets/images/continuar.png'
import fondoinst from './assets/images/game/instrucciones/FONDO.jpg'
import btncomenzar from './assets/images/game/instrucciones/btn.png'
import titleInstruction from './assets/images/game/instrucciones/title.png'
import './assets/css/reto-dos.css'
import Memorama from './Memorama'
import RetoFinishScreen from 'components/Reutilizable/retos/RetoFinishScreen'
import fondofinal from './assets/images/game/FONDO.jpg'
import modalfinish from './assets/images/fin/modal-fin.png'
import { BotonCerrar } from 'components/Reutilizable/retos/EstilosFalseAndTrue'
import ImageLoading from 'components/Reutilizable/ImageLoading'
import tache from './assets/images/fin/BOTON-SALIR.png'
import { Link } from 'react-router-dom'
import { CounterContext } from 'context/GlobalProvider'
import ContestarActividad from 'service/ContestarActividad'
import BackGameRows from 'components/Reutilizable/BackGameRows'
const RetoDos = () => {
    const [stateReto, setStateReto] = useState(0)
    const [str_data, setStrData] = useState(null)
    const { str_email_usu } = useContext(CounterContext)
    const [trofeoGameTwoFruta, setTrofeoGameTwoFruta] = useState(false);
    const [loading, setLoading] = useState(true);
    const [exite, setExite] = useState(null)
    const actService = new ContestarActividad();
    const rutasig = '/paciente/frutas/estacion';
    const ebook_Frutas = 'ebook_Frutas'
    const rutaPrev = '/paciente/frutas/composicion-nutrimental'
    const changeStateReto = (value) => {
        setStateReto(value)
        if (value === 1) {
        }
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
                    if (i === 5 && str_data[i] === '1') {
                        setTrofeoGameTwoFruta(true);
                    }
                }
            }
        }, 1000); // comprobar cada segundo
        return () => clearInterval(interval);
    }, [str_data, trofeoGameTwoFruta]);  // volver a ejecutar solo si el arreglo cambia
    useEffect(() => {
    }, [stateReto])
    console.log(trofeoGameTwoFruta);
    return (
        <BackGameRows
            visibility={stateReto === 0 &&
                trofeoGameTwoFruta ? 'visible' : 'hidden'
            } rutaPrev={rutaPrev} rutaNext={rutasig}
        >
            {stateReto === 0 ?
                <RetoMainScreen
                    setStart={changeStateReto}
                    backgroundDesktop={fondoinicio}
                    backgroundModalDesktop={title}
                    btnComenzar={btncontinuar}
                    marginTopModalTwo='15rem'
                    bottomInsOne='9rem'
                    marginTopModalFo='20rem'
                    bottomInsTwo='12rem'
                    marginTopModalTree='20rem'
                />
                : stateReto === 1 ?
                    <RetoInstruction
                        backgroundInstruction={fondoinst}
                        src={titleInstruction}
                        btnComenzarReto={btncomenzar}
                        className='reto-dos__instruction-two'
                        setStartReto={changeStateReto}
                        leftInsOne='0'
                        rightInsOne='0'
                        marginInsOne='auto'
                        bottomInsOne='12rem'
                        leftInsTwwo='0'
                        rightInsTwwo='0'
                        marginInsTwwo='auto'
                        bottomInsTwwo='20rem'
                        paddinInlineDesktTwo='30rem'
                    />
                    : stateReto === 2 ?
                        <Memorama
                            setFinishReto={changeStateReto}
                        />
                        :
                        <RetoFinishScreen
                            backgroundDesktFinal={fondofinal}
                            mostrarOverlay={true}
                            src={modalfinish}
                            className='reto__modal-finish'
                        >
                            <BotonCerrar>
                                <Link to='/paciente/frutas/estacion' className='reset-link'>
                                    <ImageLoading src={tache} />
                                </Link>
                            </BotonCerrar>
                        </RetoFinishScreen>
            }
        </BackGameRows>
    )
}

export default RetoDos