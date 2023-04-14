import { Button } from 'primereact/button'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {

    const navigate = useNavigate();

    const goToStep1DataCollection = () => {
        navigate('/data-collection-step1');
    };

    return (
        <div className='h-screen w-screen relative welcomeBackGround'>
            <div className='flex justify-content-center align-items-center h-screen w-sreen'>
                <div className='col-9 text-center text-white marginBottom__text-welcome cssGrid'>
                    <h2 className='text-bienvenido'>Bienvenido a</h2>
                    <img loading="lazy" src="/assets/Logotipo.png" alt="Logo de iniciar sesión" className='w-3 sm:w-5 md:w-3 regis__logo' />
                    <p className='text-center m-auto md:w-5 sm:w-3 text-welcome' >
                        La webapp que te enseñará... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam assumenda.
                    </p>
                </div>
                <Button label="Comenzar" onClick={() => goToStep1DataCollection()} style={{ background: "#43b06f" }} className=" mr-5 mb-5 p-button-rounded md:w-2 lg:w-2 w-4 p-button-raised btn-stilos-global-login botonComenzar__welcome" />
            </div>
        </div>
    )
}
