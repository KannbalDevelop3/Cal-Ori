import { Button } from 'primereact/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Step1 = () => {

    const navigate = useNavigate();

    const goToStep2DataCollection = () => {
        navigate('/data-collection-step2');
    };


    return (
        <div className='h-screen w-screen dataCollectionBack'>
            <div className='md:col-3 mx-3 text-center p-5 sm:col-12 font-medium text-center'>
                <h1 className='m-0 p-3 font-normal text-center textRecuerda'>Recuerda que</h1>
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='w-9 m-auto' loading="lazy" />
                <p className='text-welcomeData'>Es una webapp de nutrición y su prioridad es tu salud.</p>
                <p className='text-welcomeData'>Antes de iniciar te invitamos a responder 3 preguntas.</p>
                <Button label="Avanzar" onClick={() => goToStep2DataCollection()} style={{ background: "#43b06f" }} className="p-button-rounded w-6 p-button-raised m-5 btn-stilos-global-login " />

            </div>
            <img src="/assets/Datos_doctor.png" className='w-4 imagenDotor bottom-0' alt="Doctor Datos" loading="lazy" />

        </div>
    )
};