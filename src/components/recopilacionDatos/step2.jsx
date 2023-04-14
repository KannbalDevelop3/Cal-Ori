import { InputNumber } from 'primereact/inputnumber';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Controller, useForm } from 'react-hook-form';
import { types } from '../../types/Types';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import '../assets/css/global.css'

export const Step2 = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [imc, setImc] = useState(null);
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const alturaRef = useRef(null);
    const pesoRef = useRef(null);

    const sexoItems = [
        { label: 'Hombre', value: 'Hombre' },
        { label: 'Mujer', value: 'Mujer' },
    ];

    const goToStep3DataCollection = (e) => {
        console.log(e);
        const action = {
            type: types.register,
            payload: {
                ...e
            }
        }
        dispatch(action);
        navigate('/data-collection-step3');
    };
    useEffect(() => {
        if (peso > 0 && altura > 0) {
            const calculoIMC = peso / Math.pow(altura / 100, 2);
            const roundedIMC = Math.round(calculoIMC * 100 + Number.EPSILON) / 100;
            setImc(roundedIMC.toFixed(1));
            // Guardar IMC en localStorage
            localStorage.setItem('imc', roundedIMC.toFixed(1));
        }
    }, [peso, altura]);

    const { control, formState: { errors }, handleSubmit, } = useForm();

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className='p-error mb-1'>{errors[name].message}</small>
    };


    return (
        <div className='h-screen w-screen dataCollectionBack'>

            <div className='flex'>
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='image__logito' loading="lazy" />
                <div className=' flex flex-wrap md:justify-content-evenly justify-content-center align-items-center row md:w-11 w-12 h-screen'>
                    <img className='w-4 mt-8 text-calcula' src="/assets/Datos_titulo_1.png" alt="Datos" loading="lazy" />
                    <div className='w-7 h-full back-mano'>
                        <form className="flex flex-column p-3 sm:col-2 absolute-step left-step ma-top-3"
                            onSubmit={handleSubmit(goToStep3DataCollection)}

                        >
                            <h2 className='text-center mt-8 text-pregunta-step' style={{ color: "#43b06f" }}>Pregunta 1/2</h2>
                            <Controller name='edad' control={control} rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <InputNumber
                                        className={fieldState.invalid ? 'md-5 p-invalid mb-2 text-input-login borderRad' : 'mb-2 md-5 text-input-login borderRad'}
                                        placeholder='Edad'
                                        value={field.value}
                                        onValueChange={(e) => field.onChange(e.value)}
                                        suffix=" años"
                                        useGrouping={false}
                                    />
                                )} />
                            {getFormErrorMessage("edad")}
                            <Controller name='sexo' control={control} rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <Dropdown
                                        optionLabel="label"
                                        className={fieldState.invalid ? 'md-5 p-invalid mb-2 text-input-login borderRad ' : 'mb-2 md-5 text-input-login borderRad'}
                                        placeholder='Sexo'
                                        options={sexoItems}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.value)} />
                                )} />
                            {getFormErrorMessage("sexo")}

                            <Controller name='peso' control={control} rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <InputNumber className={fieldState.invalid ? 'md-5 p-invalid mb-2 text-input-login borderRad' : 'mb-2 md-5 text-input-login borderRad'}
                                        placeholder='Peso' value={field.value}
                                        mode="decimal"
                                        minFractionDigits={1}
                                        maxFractionDigits={1}
                                        max={600}
                                        onValueChange={(e) => { field.onChange(e.value); setPeso(e.value) }}
                                        ref={pesoRef}
                                        suffix=" Kg" />
                                )} />
                            {getFormErrorMessage("peso")}
                            <Controller name='altura' control={control} rules={{ required: true }}
                                render={({ field, fieldState }) => (
                                    <InputNumber
                                        className={fieldState.invalid ? 'md-5 p-invalid mb-2 text-input-login borderRad' : 'mb-2 md-5 text-input-login borderRad'}
                                        placeholder='Altura'
                                        value={field.value}
                                        minFractionDigits={1}
                                        maxFractionDigits={1}
                                        onValueChange={(e) => { field.onChange(e.value); setAltura(e.value) }}
                                        ref={alturaRef}
                                        suffix=" cm" />
                                )} />
                            {getFormErrorMessage("altura")}
                            <h3 className='text-center text-blue-900 textIMC'>{imc !== null ? `Tu IMC es: ${imc}` : 'Esperando datos...'}</h3>
                            <div className='flex justify-content-center align-items-center'>
                                <Button
                                    label="Siguiente"
                                    type='submit'
                                    style={{ background: "#43b06f" }}
                                    className="p-button-rounded md:w-8 md:text-xl button-siguiente w-4 p-button-raised justify-content-center align-items-center" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
