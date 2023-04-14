import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import { Controller, useForm } from "react-hook-form";
import LoginService from '../service/LoginService';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { useContext, useRef } from 'react';
import { types } from '../types/Types';
import { AuthContext } from '../auth/AuthContext';
import lofotipo from './assets/images/Logotipo_color.png'
import formmano from './assets/images/Formulario_mano.png'
import './assets/css/global.css'

export const Login = () => {
    const toast = useRef(null);
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const goToSHome = () => {
        navigate('/home');
    };

    const goToRegistro = () => {
        navigate('/registro');
    };

    const loginService = new LoginService();

    const sesion = (e) => {
        let data = new URLSearchParams();
        data.append('txt_email_usu', e.correo);
        data.append('txt_password', e.password);
        loginService.login(data).then(response => {
            console.log(response.data[0].iniciar_sesion);
            if (response.data[0].iniciar_sesion === "1") {
                const action = {
                    type: types.login,
                    payload: {
                        idUsuario: response.data[0].id_usuario,
                        nombre: response.data[0].vc_nombre,
                        apellido: response.data[0].vc_apellido,
                        email: response.data[0].vc_emaill,
                        sexo: response.data[0].vc_sexo,
                        edad: response.data[0].int_edad,
                        peso: response.data[0].vc_peso,
                        altura: response.data[0].vc_altura,
                        enfermedades: response.data[0].vc_enfermedades,
                        rol: response.data[0].vc_rol,
                        imgUsu: response.data[0].img_foto,
                    }
                }
                dispatch(action);
                goToSHome();
            } else {
                toast.current.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Usuario o contraseña incorrectos'
                });
            }
        }).catch(error => {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error de red' });
        });
        //goToSHome();
    };
    const { control, formState: { errors }, handleSubmit, } = useForm();

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className='p-error mb-5'>{errors[name].message}</small>
    };

    return (
        <>
            <Toast ref={toast} />
            <div className='h-screen w-screen loginBackGround'>
                <div className='col-12 px-3 login-res' >
                    <Card className='fadeinleft animation-duration-1000 m-8  text-center shadow-8 opacity-80 md:col-5 sm:col-12 card-login'
                        style={{ borderRadius: '5%' }}>
                        <div className='flex'>
                            <img src={lofotipo} alt="Logo de iniciar sesión" className='w-4 m-auto sm:col-12' loading="lazy" />
                        </div>
                        <form className="flex flex-column p-3 sm:col-12 " onSubmit={handleSubmit(sesion)}>
                            <Controller name='correo' control={control} rules={{ required: 'El correo es requerido' }}
                                render={({ field, fieldState }) => (
                                    <InputText
                                        className={fieldState.invalid ? 'opacity-100 md-5 p-invalid text-input-login borderRad' : 'mb-5 md-5 opacity-100 text-input-login borderRad'}
                                        placeholder='Ingresa tu correo electrónico'
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)} />
                                )} />
                            {getFormErrorMessage("correo")}
                            <Controller name='password' control={control} rules={{ required: "El password es requerido" }}
                                render={({ field, fieldState }) => (
                                    <Password
                                        className={fieldState.invalid ? 'p-password p-invalid md-5 opacity-100 text-input-login borderRad' : 'p-password mb-5 md-5 opacity-100 text-input-login borderRad'}
                                        toggleMask
                                        feedback={false}
                                        placeholder='Ingresa tu contraseña'
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)}
                                    />
                                )} />
                            {getFormErrorMessage("password")}
                            <p className='text-right font-italic opacity-100 text-input-login text-center-login-flex'>¿Olvidaste tu contraseña?</p>
                            <div className='flex justify-content-center align-items-center'>
                                <Button label="Iniciar sesión" type="submit" style={{ background: "#43b06f" }} className=" p-button-rounded col-6 p-button-raised opacity-100 btn-stilos-global-login" />
                            </div>
                        </form>
                    </Card>
                    <div className="flex col-sm-12">
                        <div className='md:col-6 sm:col-12 opacity-100 '>
                            <h3 onClick={() => goToRegistro()} className='text-white text-center font-semibold cursor-pointer' >¿No tienes una cuenta? Regisrate</h3>
                        </div>
                        <div className='md:col-6 sm:col-12 opacity-100 '>
                            <img src={formmano} className='login__mano-log ' loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
