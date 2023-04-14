import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Controller, useForm } from 'react-hook-form';
import { MultiSelect } from 'primereact/multiselect';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import LoginService from '../../service/LoginService';
import { Toast } from 'primereact/toast';
import { types } from '../../types/Types';

export const Step4 = () => {
    const { user, dispatch } = useContext(AuthContext);
    const toast = useRef(null);
    const loginService = new LoginService();
    const navigate = useNavigate();
    const storedIMC = localStorage.getItem('imc');
    // if (storedIMC) {
    //     setImc(parseFloat(storedIMC)); // Convertir a número si es necesario
    // }
    const temasInteresItems = [
        { label: 'Ninguna', value: 'Ninguna' },
        { label: 'Embarazo', value: 'Embarazo' },
        { label: 'Heridas', value: 'Heridas' },
        { label: 'Infecciones', value: 'Infecciones' },
        { label: 'Cánceres', value: 'Canceres' },
    ];

    const goToStep4DataCollection = (e) => {
        const data = new URLSearchParams();
        data.append('txt_email', user.email)
        data.append('txt_sexo', user.sexo)
        data.append('txt_edad', user.edad)
        data.append('txt_peso', user.peso)
        data.append('txt_altura', user.altura)
        data.append('txt_imc', storedIMC)
        data.append('img_usu', "")
        data.append('txt_enfermedades', JSON.stringify(user.enfermedades))
        data.append('txt_respuestasCuest', JSON.stringify(e.intereses))
        loginService.actualizarLogin(data).then(response => {
            console.log('====================================');
            console.log(response);
            console.log('====================================');
            if (response.data[0]?.exito === "1") {
                toast.current.show({
                    severity: 'success',
                    summary: 'Exito',
                    detail: response.data[0].mensaje
                });
                const action = {
                    type: types.register,
                    payload: {
                        intereses: JSON.stringify(e.intereses),
                        enfermedades: JSON.stringify(user.enfermedades),
                    }
                }
                dispatch(action);
                navigate('/Home');
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: "algo salio mal"
                });
            }
        }).catch(error => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red' });
        });

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
                    <img className='w-4 text-calcula' src="/assets/Tema_de_interes.png" alt="Datos" loading="lazy" />
                    <div className='w-7 h-full back-mano'>
                        <form className="flex flex-column p-3 sm:col-2 absolute-step left-step ma-top-3" onSubmit={handleSubmit(goToStep4DataCollection)}>
                            <h2 className='text-center mt-8 text-pregunta-step' style={{ color: "#43b06f" }}>Pregunta 3/3</h2>
                            <p className='text-center text-welcome' >Selecciona el tema que más te interese</p>
                            <Controller name='intereses' control={control} rules={{ required: 'EL tema de interes es requerido' }}
                                render={({ field, fieldState }) => (
                                    <MultiSelect
                                        display='chip'
                                        optionLabel="label"
                                        className={fieldState.invalid ? 'md-5 p-invalid textMultiselect2 borderRad' : 'mb-5 md-5 textMultiselect2 borderRad'}
                                        placeholder='Temas de interes'
                                        options={temasInteresItems}
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.value)} />
                                )} />
                            {getFormErrorMessage("intereses")}
                            <div className='flex justify-content-center align-items-center'>
                                <Button label="Finalizar" type='submit' style={{ background: "#43b06f" }} className="p-button-rounded textMultiselect md:w-8 w-8 p-button-raised" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}