import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { useMediaQuery } from 'react-responsive'
import { Toast } from 'primereact/toast';
import LoginService from '../service/LoginService';
import { types } from '../types/Types';
import logotipo from './assets/images/Logotipo_color.png'
import './assets/css/global.css'
import ContestarActividad from 'service/ContestarActividad';
import logroLock from './assets/images/Logro_bloqueado.png'
import logroUnLock from './assets/images/logro-unlock.png'

import { CounterContext } from 'context/GlobalProvider';
export const PerfilUsuario = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 801px)'
    })
    const loginService = new LoginService();
    const actService = new ContestarActividad();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 432px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const hiddenFileInput = useRef(null);
    const toast = useRef(null);
    const { str_email_usu } = useContext(CounterContext)
    const [str_data, setStrData] = useState(null)
    const [str_dataVerdura, setStrDataVerdura] = useState(null)
    const [trofeoEbookVerdura, setTrofeoEbookVerdura] = useState(false)
    const [trofeoEbookFruta, setTrofeoEbookFruta] = useState(false)
    const [trofeoGameOneVerdura, setTrofeoGameOneVerdura] = useState(false)
    const [trofeoGameTwoVerdura, setTrofeoGameTwoVerdura] = useState(false)
    const [trofeoGameOneFruta, setTrofeoGameOneFruta] = useState(false)
    const [trofeoGameTwoFruta, setTrofeoGameTwoFruta] = useState(false)
    const [loading, setLoading] = useState(true);
    const [exite, setExite] = useState(null)
    const [exiteVerduras, setExiteVerduras] = useState(null)
    const ebook_Frutas = 'ebook_Frutas'
    const ebook_Verduras = 'ebook_Verduras'
    const clickedAddFile = () => {
        hiddenFileInput.current.click();
    };
    const [profilePic, setProfilePic] = useState(user?.imgUsu || null);
    const fileChanged = (e) => {
        const fileUploaded = e.target.files[0];
        if (!fileUploaded) {
            return;
        }
        if (fileUploaded.size >= 10000000) {
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'Por favor seleccione una imagen menor a 10MB'
            });
            return;
        }
        setProfilePic(URL.createObjectURL(fileUploaded));
        getBase64(fileUploaded)
    };
    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            saveImg(reader.result);
        };
        reader.onerror = function (error) {
        };
    }

    const saveImg = (e) => {
        const data = new URLSearchParams();
        data.append('txt_email', user.email)
        data.append('txt_sexo', user.sexo)
        data.append('txt_edad', user.edad)
        data.append('txt_peso', user.peso)
        data.append('txt_altura', user.altura)
        data.append('str_enfermedades', user.enfermedades)
        data.append('img_usu', e)
        loginService.actualizarLogin(data).then(response => {
            if (response.data[0]?.exitotrado === "1") {
                const action = {
                    type: types.register,
                    payload: {
                        imgUsu: e,
                    }
                }
                dispatch(action);
                toast.current.show({
                    severity: 'success',
                    summary: 'Exito',
                    detail: "Se actualizo correctamente"
                });
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: "algo salio mal intente de nuevo"
                });
            }
        }).catch(error => {
            console.log(error);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red' });
        });

    };
    const borrarfoto = () => {
        setProfilePic(null);
        const action = {
            type: types.register,
            payload: {
                imgUsu: null,
            }
        }
        dispatch(action);
    }
    const profilePicStyle = {
        width: "225px",
        height: "225px",
        borderRadius: "140px",
        cursor: "pointer",
        objectFit: "cover",
        backgroundColor: "white",
        position: "relative",
    };
    const goToRegresar = () => {
        navigate('/home')
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
                setExiteVerduras(contestarExiste[0].contestar_existe)
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
                setStrDataVerdura(dataArray);
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
            if (exite !== '' || exiteVerduras !== '') {
                traerDatosRetosFrutas()
                traerDatosRetosVerduras()
            }
        }, 1500);
        setLoading(false);
    }, [loading, exite, exiteVerduras])
    useEffect(() => {
        const interval = setInterval(() => {
            let conteo = 0;
            let sumaFinal = 7
            // Recorrer el arreglo y actualizar el estado correspondiente si se encuentra un 1
            if (str_data) {
                for (let i = 0; i < str_data.length; i++) {
                    if (i === 2 && str_data[i] === '1') {
                        setTrofeoGameOneFruta(true);
                    }
                    if (i === 4 && str_data[i] === '1') {
                        setTrofeoGameTwoFruta(true);
                    }
                    if (str_data[i] === '1') {
                        conteo++;
                    }
                }
                if (sumaFinal === str_data.length) {
                    setTrofeoEbookFruta(true);
                } else {
                    setTrofeoEbookFruta(false);
                }
            }
        }, 1000); // comprobar cada segundo
        return () => clearInterval(interval);
    }, [str_data]);  // volver a ejecutar solo si el arreglo cambia
    useEffect(() => {
        const interval = setInterval(() => {
            let conteo = 0;
            let sumaFinal = 8
            // Recorrer el arreglo y actualizar el estado correspondiente si se encuentra un 1
            if (str_dataVerdura) {
                for (let i = 0; i < str_dataVerdura.length; i++) {
                    if (i === 3 && str_dataVerdura[i] === '1') {
                        setTrofeoGameOneVerdura(true);
                    }
                    if (i === 6 && str_dataVerdura[i] === '1') {
                        setTrofeoGameTwoVerdura(true);
                    }
                    if (str_dataVerdura[i] === '1') {
                        conteo++;
                    }
                }
                if (sumaFinal === str_dataVerdura.length) {
                    setTrofeoEbookVerdura(true);
                } else {
                    setTrofeoEbookVerdura(false);
                }
            }
        }, 1000); // comprobar cada segundo
        return () => clearInterval(interval);
    }, [str_dataVerdura]);  // volver a ejecutar solo si el arreglo cambia
    return (
        <div className='contenedor__back-perfil'>
            <Toast ref={toast} />
            <div className=''>
                <img src={logotipo} onClick={() => navigate("/Home")} loading="lazy" alt="Logo de iniciar sesión" className='left-0 p-2 w-1 cursor-pointer image-nav' />
                <div className='flex relative w-full h-100 left-0 bg-no-repeat bg-cover back__perfil'
                >
                    <div className='flex flex-column w-4 justify-content-center align-items-center' >
                        <img loading="lazy" src={profilePic === null ? "/assets/Perfil_foto.png" : profilePic} alt="" className={profilePic === null ? 'w-7 image-profile' : ''} style={profilePic !== null ? profilePicStyle : { borderColor: 'white' }} />
                        <div className='flex flex-row justify-content-center align-items-center content__profile-buttons'
                            style={isBigScreen ? { bottom: '1%' } : isDesktopOrLaptop ? { bottom: '2%' } : isMobile ? { bottom: '5%' } : isTabletOrMobile ? { bottom: '0%' } : isPortrait ? { bottom: '0%' } : { bottom: '0%' }}>
                            <img loading="lazy" src="/assets/Boton_subir-foto.png" onClick={() => clickedAddFile()} alt="Franja" className='md:w-6 sm:w-2 w-1 md:mr-5 sm:mr-4 mr-2 cursor-pointer' />
                            <img loading="lazy" src="/assets/Boton_borrar.png" onClick={() => borrarfoto()} alt="Franja" className='md:w-6 sm:w-2 w-1 md:ml-5 sm:ml-4 ml-2 cursor-pointer' />
                        </div>
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            accept=".jpg,.png,.jpeg"
                            onChange={fileChanged}
                            style={{ display: "none" }}
                        />
                    </div>
                    <div className='flex flex-column'>
                        <h2 className='profile__text-saludo '>¡HOLA!</h2>
                        <h1 className='profile__text-nombre text-white-alpha-90'>{user.nombre + '\n' + user.apellido}</h1>
                    </div>
                </div>
                <div className='contenedor-trofeos'>
                    <h1 className='text__logros'>Tus logros</h1>
                    {
                        loading ?
                            (
                                <h1>Cargando...</h1>
                            )
                            :
                            (
                                <div className='logros__grid'>
                                    <div className='grid__trofeo'>
                                        <img src={trofeoEbookFruta ? logroUnLock : logroLock} loading="lazy" className={trofeoEbookFruta ? 'trofeo__logro trofeo__hover' : 'trofeo__logro'} />
                                        <h1 className='text__logro'>Ebook de frutas completado</h1>
                                    </div>
                                    <div className='grid__trofeo'>
                                        <img src={trofeoGameOneFruta ? logroUnLock : logroLock} loading="lazy" className={trofeoGameOneFruta ? 'trofeo__logro trofeo__hover' : 'trofeo__logro'} />
                                        <h1 className='text__logro'>Frutas reto uno</h1>
                                    </div>
                                    <div className='grid__trofeo'>
                                        <img src={trofeoGameTwoFruta ? logroUnLock : logroLock} loading="lazy" className={trofeoGameTwoFruta ? 'trofeo__logro trofeo__hover' : 'trofeo__logro'} />
                                        <h1 className='text__logro'>Frutas reto dos</h1>
                                    </div>
                                    <div className='grid__trofeo'>
                                        <img src={trofeoEbookVerdura ? logroUnLock : logroLock} loading="lazy" className={trofeoEbookVerdura ? 'trofeo__logro trofeo__hover' : 'trofeo__logro'} />
                                        <h1 className='text__logro'>Ebook de verduras completado</h1>
                                    </div>
                                    <div className='grid__trofeo'>
                                        <img src={trofeoGameOneVerdura ? logroUnLock : logroLock} loading="lazy" className={trofeoGameOneVerdura ? 'trofeo__logro trofeo__hover' : 'trofeo__logro'} />
                                        <h1 className='text__logro'>Verduras reto uno</h1>
                                    </div>
                                    <div className='grid__trofeo'>
                                        <img src={trofeoGameTwoVerdura ? logroUnLock : logroLock} loading="lazy" className={trofeoGameTwoVerdura ? 'trofeo__logro trofeo__hover' : 'trofeo__logro'} />
                                        <h1 className='text__logro'>Verduras reto dos</h1>
                                    </div>
                                </div>
                            )
                    }
                    <div className='contenedorSalir'>
                        <button onClick={() => goToRegresar()} className='buttonSalirPerfil'>Regresar</button>
                    </div>
                </div>

            </div>
        </div>
    );
};
