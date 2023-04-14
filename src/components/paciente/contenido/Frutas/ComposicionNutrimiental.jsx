import React, { useContext, useEffect, useState } from 'react'
import './assets/styles/composicion.css'
import recurso from './assets/images/recurso-doctor.png'
import puntoazul from './assets/images/Recurso-azul.png'
import puntorosa from './assets/images//Recurso-rosa.png'
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import textC from './assets/images/texto_composicion.png'
import { Link } from 'react-router-dom'
import BotonFixedIndice from 'components/Reutilizable/BotonFixedIndice'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
import HorizontalPage from 'components/Reutilizable/HorizontalPage'

const ComposicionNutrimiental = () => {
    const [mostrarOcultar, setMostrarOcultar] = useState(false)
    const [mostrarOcultar2, setMostrarOcultar2] = useState(false)
    const [mostrarOcultar3, setMostrarOcultar3] = useState(false)
    const [mostrarOcultar4, setMostrarOcultar4] = useState(false)
    const [mostrarOcultar5, setMostrarOcultar5] = useState(false)
    const [mostrarOcultar6, setMostrarOcultar6] = useState(false)
    const [mostrarOcultar7, setMostrarOcultar7] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [str_id_act, setStrIdAct] = useState('ebook_Frutas')
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


    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    useEffect(() => {
        const obtenerEstado = () => {
            const estadoP = JSON.parse(localStorage.getItem('estado') ?? mostrarOcultar)
            setMostrarOcultar(estadoP)
        }
        obtenerEstado()
    }, [])

    useEffect(() => {
        localStorage.setItem('estado', JSON.stringify(mostrarOcultar))
    }, [mostrarOcultar])

    useEffect(() => {
        const obtenerEstado2 = () => {
            const estadoP2 = JSON.parse(localStorage.getItem('estado2') ?? mostrarOcultar2)
            setMostrarOcultar2(estadoP2)
        }
        obtenerEstado2()
    }, [])

    useEffect(() => {
        localStorage.setItem('estado2', JSON.stringify(mostrarOcultar2))
    }, [mostrarOcultar2])

    useEffect(() => {
        const obtenerEstado3 = () => {
            const estadoP3 = JSON.parse(localStorage.getItem('estado3') ?? mostrarOcultar3)
            setMostrarOcultar3(estadoP3)
        }
        obtenerEstado3()
    }, [])

    useEffect(() => {
        localStorage.setItem('estado3', JSON.stringify(mostrarOcultar3))
    }, [mostrarOcultar3])

    useEffect(() => {
        const obtenerEstado4 = () => {
            const estadoP4 = JSON.parse(localStorage.getItem('estado4') ?? mostrarOcultar4)
            setMostrarOcultar4(estadoP4)
        }
        obtenerEstado4()
    }, [])

    useEffect(() => {
        localStorage.setItem('estado4', JSON.stringify(mostrarOcultar4))
    }, [mostrarOcultar4])

    useEffect(() => {
        const obtenerEstado5 = () => {
            const estadoP5 = JSON.parse(localStorage.getItem('estado5') ?? mostrarOcultar5)
            setMostrarOcultar5(estadoP5)
        }
        obtenerEstado5()
    }, [])

    useEffect(() => {
        localStorage.setItem('estado5', JSON.stringify(mostrarOcultar5))
    }, [mostrarOcultar5])

    useEffect(() => {
        const obtenerEstado6 = () => {
            const estadoP6 = JSON.parse(localStorage.getItem('estado6') ?? mostrarOcultar6)
            setMostrarOcultar6(estadoP6)
        }
        obtenerEstado6()
    }, [])

    useEffect(() => {
        localStorage.setItem('estado6', JSON.stringify(mostrarOcultar6))
    }, [mostrarOcultar6])

    useEffect(() => {
        const obtenerEstado7 = () => {
            const estadoP7 = JSON.parse(localStorage.getItem('estado7') ?? mostrarOcultar7)
            setMostrarOcultar7(estadoP7)
        }
        obtenerEstado7()
    }, [])

    useEffect(() => {
        localStorage.setItem('estado7', JSON.stringify(mostrarOcultar7))
    }, [mostrarOcultar7])


    const mostrarTexto = () => {
        setMostrarOcultar(true)
    }
    const mostrarTexto2 = () => {
        setMostrarOcultar2(true)
    }
    const mostrarTexto3 = () => {
        setMostrarOcultar3(true)
    }
    const mostrarTexto4 = () => {
        setMostrarOcultar4(true)
    }
    const mostrarTexto5 = () => {
        setMostrarOcultar5(true)
    }
    const mostrarTexto6 = () => {
        setMostrarOcultar6(true)
    }
    const mostrarTexto7 = () => {
        setMostrarOcultar7(true)
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
        if (5 === 5) {
            console.log('Entro a la condición de === 5');
            // Si el índice ya existe en el arreglo y es === 2, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
            const newArray = [...str_data];
            newArray[5 - 1] = 1;
            valFinal = newArray
            setStrData(newArray);

        }
        else {
            console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
            // Si el índice no existe en el arreglo, creamos nuevas posiciones
            const newArray = [...str_data];
            for (let i = str_data.length + 1; i < 5; i++) {
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
        <HorizontalPage>
            <div className='composicion__contenedor'>
                <BotonFixedIndice to='/paciente/frutas' />
                <div className='composicion__grid-container'>
                    <div className='composicion__texto-composicion'>
                        <img src={textC} loading="lazy" />
                    </div>
                    <div className='composicion__table-container'>
                        {
                            windowSize.innerHeight < 500 ?
                                <table className='mt-4'>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={7} className='responsive__fila-doctor'>
                                                <div className='' >
                                                    <img src={recurso} className='responsive__doctor' loading="lazy" />
                                                </div>
                                            </td>
                                            <td className='responsive__fila-puntos'>
                                                <img className={mostrarOcultar ? `responsive__puntos pt__1` : `animates responsive__puntos pt__1a`} src={mostrarOcultar ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto()} />
                                            </td>
                                            <td className='responsive__fila-textos'>
                                                <div className="responsive-fila-textos-centrar">
                                                    {mostrarOcultar ? (<h1 className='imagen__tt-1'>Las frutas son una fuente importante de hidratos de carbono.<span className='imagen__tt-1-part1'>-Monosacáridos: glucosa y fructosa</span><span className='imagen__tt-1-part1'>--Disacáridos: sacarosa</span></h1>) : null}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='responsive__fila-puntos'>
                                                <img className={mostrarOcultar2 ? `responsive__puntos pt__2` : `animates responsive__puntos pt__2a`} src={mostrarOcultar2 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto2()} />
                                            </td>
                                            <td className='responsive__fila-textos'>
                                                <div className="responsive-fila-textos-centrar">
                                                    {mostrarOcultar2 ? (<h1 className='imagen__tt-1'>Poseen un alto contenido de agua (80-95%).</h1>) : null}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='responsive__fila-puntos'>
                                                <img className={mostrarOcultar3 ? `responsive__puntos pt__3` : `animates responsive__puntos pt__3a`} src={mostrarOcultar3 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto3()} />
                                            </td>
                                            <td className='responsive__fila-textos'>
                                                <div className="responsive-fila-textos-centrar">
                                                    {mostrarOcultar3 ? (<h1 className='imagen__tt-1'>Aportan fibra alimentaria de tipo: <span className='imagen__tt-1-part1'>Soluble: pectina, gomas y mucílagos.</span> <span className='imagen__tt-1-part2'>Insoluble: hemicelulosa, celulosa y lignina.</span></h1>) : null}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='responsive__fila-puntos'>
                                                <img className={mostrarOcultar4 ? `responsive__puntos pt__4` : `animates responsive__puntos pt__4a`} src={mostrarOcultar4 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto4()} />
                                            </td>
                                            <td className='responsive__fila-textos'>
                                                <div className="responsive-fila-textos-centrar">
                                                    {mostrarOcultar4 ? (<h1 className='imagen__tt-1'>Vitaminas A, C, B1, B2, B6 y ácido fólico.</h1>) : null}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='responsive__fila-puntos'>
                                                <img className={mostrarOcultar5 ? `responsive__puntos pt__5` : `animates responsive__puntos pt__5a`} src={mostrarOcultar5 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto5()} />
                                            </td>
                                            <td className='responsive__fila-textos'>
                                                <div className="responsive-fila-textos-centrar">
                                                    {mostrarOcultar5 ? (<h1 className='imagen__tt-1'>Minerales: potasio, hierro, calcio, magnesio y zinc.</h1>) : null}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='responsive__fila-puntos'>
                                                <img className={mostrarOcultar6 ? `responsive__puntos pt__6` : `animates responsive__puntos pt__6a`} src={mostrarOcultar6 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto6()} />
                                            </td>
                                            <td className='responsive__fila-textos'>
                                                <div className="responsive-fila-textos-centrar">
                                                    {mostrarOcultar6 ? (<h1 className='imagen__tt-1'>Antioxidantes: flavonoides y selenio.</h1>) : null}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='responsive__fila-puntos'>
                                                <img className={mostrarOcultar7 ? `responsive__puntos pt__7` : `animates responsive__puntos pt__7a`} src={mostrarOcultar7 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto7()} />
                                            </td>
                                            <td className='responsive__fila-textos'>
                                                <div className="responsive-fila-textos-centrar">
                                                    {mostrarOcultar7 ? (<h1 className='imagen__tt-1'>Y en menor cantidad lípidos y proteínas.</h1>) : null}
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                :
                                <div className='composicion__contenedor-doctor'>
                                    <div className='composicion__doctor_1'>
                                        <img src={recurso} className='composicion__imagen-doctor' loading="lazy" />
                                    </div>
                                    <div className='composicion__doctor_2'>
                                        <div className='doctor__boton'>
                                            <img className={mostrarOcultar ? 'doctor__btn-azul btn__estado-1' : 'doctor__btn-azul btn__estado-1 animates'}
                                                src={mostrarOcultar ? puntorosa : puntoazul}
                                                loading="lazy"
                                                onClick={() => mostrarTexto()}
                                            />
                                        </div>
                                        <div className='doctor__boton'>
                                            <img className={mostrarOcultar2 ? 'doctor__btn-azul btn__estado-2' : 'doctor__btn-azul btn__estado-2 animates'} src={mostrarOcultar2 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto2()} />
                                        </div>
                                        <div className='doctor__boton'>
                                            <img className={mostrarOcultar3 ? 'doctor__btn-azul btn__estado-3' : 'doctor__btn-azul btn__estado-3 animates'} src={mostrarOcultar3 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto3()} />
                                        </div>
                                        <div className='doctor__boton'>
                                            <img className={mostrarOcultar4 ? 'doctor__btn-azul btn__estado-4' : 'doctor__btn-azul btn__estado-4 animates'} src={mostrarOcultar4 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto4()} />
                                        </div>
                                        <div className='doctor__boton'>
                                            <img className={mostrarOcultar5 ? 'doctor__btn-azul btn__estado-5' : 'doctor__btn-azul btn__estado-5 animates'} src={mostrarOcultar5 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto5()} />
                                        </div>
                                        <div className='doctor__boton'>
                                            <img className={mostrarOcultar6 ? 'doctor__btn-azul btn__estado-6' : 'doctor__btn-azul btn__estado-6 animates'} src={mostrarOcultar6 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto6()} />
                                        </div>
                                        <div className='doctor__boton'>
                                            <img className={mostrarOcultar7 ? 'doctor__btn-azul btn__estado-7' : 'doctor__btn-azul btn__estado-7 animates'} src={mostrarOcultar7 ? puntorosa : puntoazul} loading="lazy" onClick={() => mostrarTexto7()} />
                                        </div>
                                    </div>
                                    <div className='composicion__doctor_3'>
                                        <div className='composicion__cont-texto'>
                                            {mostrarOcultar ?
                                                (<h1 className='composicion__texto-nutrimental'>Las frutas son una fuente importante de hidratos de carbono.<span className='composicion__texto-nutrimental-part-1'></span> Podemos encontrar de los siguientes tipos:<span className='composicion__texto-nutrimental-part-2'>-Monosacáridos: glucosa y fructosa</span><span className='composicion__texto-nutrimental-part-2'>-Disacáridos: sacarosa</span></h1>) : null}
                                        </div>
                                        <div className='composicion__cont-texto'>
                                            {mostrarOcultar2 ?
                                                (<h1 className='composicion__texto-nutrimental'>Poseen un alto contenido de agua (80-95%).</h1>) : null}
                                        </div>
                                        <div className='composicion__cont-texto'>
                                            {mostrarOcultar3 ?
                                                (<h1 className='composicion__texto-nutrimental'>Aportan fibra alimentaria de tipo: <span className='composicion__texto-nutrimental-part-1'>Soluble: pectina, gomas y mucílagos.</span> <span className='composicion__texto-nutrimental-part-2'>Insoluble: hemicelulosa, celulosa y lignina.</span></h1>) : null}
                                        </div>
                                        <div className='composicion__cont-texto'>
                                            {mostrarOcultar4 ?
                                                (<h1 className='composicion__texto-nutrimental'>Vitaminas A, C, B1, B2, B6 y ácido fólico.</h1>) : null}
                                        </div>
                                        <div className='composicion__cont-texto'>
                                            {mostrarOcultar5 ?
                                                (<h1 className='composicion__texto-nutrimental'>Minerales: potasio, hierro, calcio, magnesio y zinc.</h1>) : null}
                                        </div>
                                        <div className='composicion__cont-texto'>
                                            {mostrarOcultar6 ?
                                                (<h1 className='composicion__texto-nutrimental'>Antioxidantes: flavonoides y selenio.</h1>) : null}
                                        </div>
                                        <div className='composicion__cont-texto'>
                                            {mostrarOcultar7 ?
                                                (<h1 className='composicion__texto-nutrimental'>Y en menor cantidad lípidos y proteínas.</h1>) : null}
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className='video__contenido-principal'>
                    <div className='video__boton-siguiente'>
                        <Link to='/paciente/frutas/pdf'><img src={prevBoton} loading="lazy" /></Link>
                    </div>
                    <div className='video__boton-siguiente'>
                        <Link to='/paciente/frutas/reto-dos' onClick={() => handleArrow()}>
                            <img src={sigBoton} />
                        </Link>
                    </div>
                </div>
            </div>
        </HorizontalPage>
    )
}

export default ComposicionNutrimiental