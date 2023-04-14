import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Controller, useForm } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import LoginService from '../../service/LoginService';
import { Toast } from 'primereact/toast';
import { types } from '../../types/Types';

export const Step3 = () => {
    const { user, dispatch } = useContext(AuthContext);
    const toast = useRef(null);
    const loginService = new LoginService();
    const navigate = useNavigate();

    const enfermedadesItems = [
        { label: 'Ninguna', value: 'Ninguna' },
        { label: 'Diabetes', value: 'Diabetes' },
        { label: 'Hepatitis A', value: 'Hepatitis A' },
        { label: 'Colesterol', value: 'Colesterol' },
        { label: 'Cetonas', value: 'Cetonas' },
    ];

    const goToStep3DataCollection = (e) => {
        const action = {
            type: types.register,
            payload: {
                ...e
            }
        }
        dispatch(action);
        navigate('/data-collection-step4');

    };

    const { control, formState: { errors }, handleSubmit, } = useForm();

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className='p-error mb-3'>{errors[name].message}</small>
    };

    return (
        <div className='h-screen w-screen dataCollectionBack'>
            <Toast ref={toast} />

            <div className='flex'>
                <img src="/assets/iniciar_sesion_logo.png" alt="Logo de iniciar sesión" className='image__logito' loading="lazy" />
                <div className=' flex flex-wrap md:justify-content-evenly justify-content-center align-items-center row md:w-11 w-12 h-screen'>
                    <img className='w-4 text-calcula' src="/assets/Datos_titulo_2.png" alt="Datos" loading="lazy" />
                    <div className='w-7 h-full back-mano'>
                        <form className="flex flex-column p-3 sm:col-2 absolute-step left-step ma-top-3" onSubmit={handleSubmit(goToStep3DataCollection)}>
                            <h2 className='text-center mt-8 text-pregunta-step' style={{ color: "#43b06f" }}>Pregunta 2/2</h2>
                            <p className='text-center text-welcome' >¿Padeces alguna de estas enfermedades?</p>
                            <Controller name='enfermedades' control={control} rules={{ required: 'Las enfermedades son requeridas' }}
                                render={({ field, fieldState }) => (
                                    <MultiSelect
                                        display='chip'
                                        optionLabel="label"
                                        className={fieldState.invalid ? 'md-5 p-invalid textMultiselect2 borderRad' : 'mb-5 md-5 textMultiselect2 borderRad'}
                                        placeholder='Enfermedades'
                                        options={enfermedadesItems}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.value)}
                                    />
                                )} />
                            {getFormErrorMessage("enfermedades")}
                            <div className='flex justify-content-center align-items-center'>
                                <Button label="Siguiente" type='submit' style={{ background: "#43b06f" }} className="p-button-rounded textMultiselect md:w-8 w-8 p-button-raised" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}