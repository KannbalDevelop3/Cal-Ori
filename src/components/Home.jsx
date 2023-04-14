import React, { useState, useContext, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import logitpocolor from './assets/images/Logotipo_color.png'
import doctores from './assets/images/Imagen_PS.png'
import paciente from './assets/images/Imagen_pacientes.png'
import botonPaciente from './assets/images/Boton_pacientes.png'
import botonDoctores from './assets/images/Boton_PS.png'
import './assets/css/global.css'
import { CounterContext } from 'context/GlobalProvider';
import NavBar from './Reutilizable/NavBar';
import Modal from './Reutilizable/Modal';
export const Home = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [isViewModal, setIsViewModal] = useState(true);
    const [profilePic] = useState(user?.imgUsu || null);
    const { str_email_usu, setStrEmailUsu } = useContext(CounterContext)
    useEffect(() => {
        let obtValor = JSON.parse(localStorage.getItem('isViewModal'))
        if (obtValor === false) {
            setIsViewModal(obtValor)
        } else {
            setIsViewModal(true)
        }
    }, [isViewModal])

    const renderFooter = () => <Button label="Entendido" onClick={() => setIsViewModal(false)} autoFocus style={{ background: "#43b06f" }} className="p-button-rounded md:w-4 w-6 p-button-raised btn-stilos-global-login" />
    const renderHeader = () => <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-2 absolute ' style={{ right: '40%', top: '5%' }} />

    const goToUserProfile = () => {
        navigate('/user-profile');
    }
    const goToUserPAciente = () => {
        navigate('/paciente');
    }
    const goToUserProfesionales = () => {
        navigate('/profesionales')
    }
    const cerrarSesion = () => {
        localStorage.removeItem('user')
        setStrEmailUsu({})
        navigate('/');
    }
    const cerrarModalHome = () => {
        setIsViewModal(false)
        localStorage.setItem('isViewModal', JSON.stringify(false));
    }

    const profilePicStyle = {
        width: "80px",
        height: "80px",
        borderRadius: "140px",
        cursor: "pointer",
        objectFit: "cover",
        backgroundColor: "white",
        position: "absolute",
        zIndex: "5",
        right: '5%',
    };
    return (
        <div className='homeBackGorund'>
            <NavBar handeClickModal={cerrarSesion} />
            <div className="p-3">
                <div className='w-12 flex flex-wrap justify-content-between bg-blue'>
                    <img src={logitpocolor} alt="Logo de iniciar sesión" className='w-1 logito__home' loading="lazy" />
                    <div>
                    </div>
                    {/* <img loading="lazy" onClick={() => goToUserProfile()} src={profilePic === null ? "/assets/Perfil_foto.png" : profilePic}
                        alt="Logo de iniciar sesión"
                        className={profilePic === null ? 'cursor-pointer z-5 logito__perfilUser' : ''}
                        style={profilePic !== null ? profilePicStyle : { right: '5%', width: "5%" }} />
                    <button onClick={modalSesion} className='button__cerrar-sesion'><span className='cerrar-sesion__span'>Cerrar Sesión</span></button> */}
                </div>
                <p className='text-welcome-ebook'>Selecciona un eBook</p>
                <div className='absolute flex justify-content-evenly h-screen w-screen top-0 left-0 flex-column-mobile'>
                    <div className='w-6 flex flex-column justify-content-center align-items-center'>
                        <img onClick={() => goToUserProfesionales()} src={doctores} className=' w-6 cursor-pointer image-ebook__profesionales' loading="lazy" />
                        <img onClick={() => goToUserProfesionales()} src={botonDoctores} alt='' className='w-3 cursor-pointer button-ebook__profesionales' loading="lazy" />
                    </div>
                    <div className='w-6 flex flex-column justify-content-center align-items-center'>
                        <img loading="lazy" onClick={() => goToUserPAciente()} src={paciente} className='w-6 cursor-pointer home__paciente-btn image-ebook__profesionales' alt="" />
                        <img loading="lazy" onClick={() => goToUserPAciente()} src={botonPaciente} alt='' className='w-3 cursor-pointer button-ebook__profesionales' />
                    </div>
                </div>
            </div>
            <Modal
                mostrarOverlay='rgba(0, 0, 0, 0.85)'
                estado={isViewModal}
                cambiarEstado={cerrarModalHome}
                width='500px' height='550px'
                widthMob='390px' heightMob='600px'
                widthTree='700px' heightTree='700px'
                top='3rem' right='26%' topMob='-2rem'
                topTree='8%'
                rightTree='27%'
            >
                <div className='containerModalHome'>
                    <div className='containerLogoHome'>
                        <img src={logitpocolor} alt="" />
                    </div>
                    <div className='containerTextoHome'>
                        <div className='containerTextosHome'>
                            <p className='textModalHome'>Sabemos que te gusta cuidar de tu salud y en especial de tu alimentación.</p>
                            <p className='textModalHome'>Estamos conscientes de que quizá eres experto en el tema de frutas y verduras o tal vez apenas estás aprendiendo sobre ellas. Es por esto que hemos diseñado 2 ebooks:</p>
                        </div>
                        <div className='containerTextosHome'>
                            <p className='textGreenHome'>Uno de profesionales de la salud</p>
                            <p className='textGreenHome'>Y otro para pacientes</p>
                        </div>
                        <div className='containerTextosHome'>
                            <p className='textModalHome'>En ambos conocerás la importancia del consumo de las frutas y verduras...</p>
                        </div>
                    </div>
                    <div className='containerBotonHome'>
                        <button onClick={() => cerrarModalHome()} className='buttonEntendididoHome'>Entendido</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
