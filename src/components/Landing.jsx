import { useEffect, useState } from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import Usuario from '../service/Usuario';
import accederg from './assets/images/Boton_accede_gratis.png'
import videob from './assets/images/Boton_ver_video.png'
import btnSesionn from './assets/images/btnSesion.png'
import './assets/css/global.css'
import Modal from './Reutilizable/Modal';
export const Landing = () => {
    const [modal, setModal] = useState(false)
    let navigate = useNavigate();
    const userService = new Usuario();
    useEffect(() => {
        let data = {
            'action': 'fetch_single'
        }
        userService.usuarioGetAll(data)
        //eslint-disable-next-line
    }, []);

    const goToLogin = () => {
        navigate('/login');
    }

    const goToRegister = () => {
        navigate('/registro');
    }
    const modalVideo = () => {
        setModal(!modal)
    }

    return (
        <div
            className='landingBackground'
        >
            <div className="flex flex-column">
                <div className="flex justify-content-end">
                    <Button label="Iniciar sesión" onClick={() => goToLogin()} className="m-2 visibleEscritorio btn-stilos-glables p-button-text p-button-rounded p-button-secondary p-button-raised text-white " />
                </div>
                <div className="flex justify-content-center mt-4">
                    <img src="/assets/Logotipo.png" alt="Logo de iniciar sesión" className='landing__logotipo' loading="lazy" />
                </div>
                <div className="flex flex-column align-items-center justify-content-center text-white ma-top">
                    <h2 className="landing__texto-uno">¡Aprende sobre las frutas y verduras y cómo escogerlas para comer bien y vivir genial!</h2>
                    {/* <h2 className="landing__texto-dos"> </h2> */}
                </div>
                <div className="flex flex-row flexColumn align-items-center justify-content-center ma-top-2">
                    <button className="landing__btn-acceder" onClick={() => goToRegister()}>
                        {/* onClick={() => goToRegister()} */}
                        <img src={accederg} loading="lazy" />
                    </button>
                    <button className=" landing__btn-video" onClick={modalVideo} >
                        <img src={videob} loading="lazy" />
                    </button>
                    <button className=" landing__btn-iniciar-sesion" onClick={() => goToLogin()} >
                        <img src={btnSesionn} loading="lazy" />
                    </button>
                </div>
            </div>
            <Modal
                estado={modal}
                cambiarEstado={setModal}
                mostrarOverlay='rgb(255 255 255 / 90%);'
                topMob='0%'
                rightMob='5%'
                widthMob='400px'
            >
                <video controls className='videoHome'>
                    <source src='https://bucket-kannbal-ac.s3.amazonaws.com/Cal-Ori-Home.mp4' type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </Modal>
        </div>
    )
}
