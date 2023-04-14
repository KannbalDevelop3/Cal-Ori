import React, { useContext, useEffect, useState } from 'react'
import './assets/styles/indice.css'
import textoindice from './assets/images/texto_indice.png'
import { menu } from './assets/data/dataFrutas'
import { Link } from 'react-router-dom';
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import imgindice from '../assets/images/image_indice.png'
import BackgroundImageT from '../../../Reutilizable/BackgroundImageT';
import umage from './assets/images/slide-4.png'
import BotonFixedIndice from 'components/Reutilizable/BotonFixedIndice';
import { CounterContext } from 'context/GlobalProvider';
import ContestarActividad from 'service/ContestarActividad';
const IndicePro = () => {
  const [steep, setSteep] = useState(1)
  const [buttons, setButtons] = useState(menu)
  const [str_id_act, setStrIdAct] = useState('ebook_Frutas')
  const [str_id_rol, strIdRol] = useState(1)
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState({})
  const actService = new ContestarActividad();
  const { str_email_usu } = useContext(CounterContext)
  const [vSumar, setvSumar] = useState(0);
  const [int_avance, setStrIntAvance] = useState(0)
  const [str_data, setStrData] = useState(null)
  const [txt_status, setTxtStatus] = useState('')
  const maxAvance = 7;
  const [exite, setExite] = useState(null)
  const [button0Enabled, setButton0Enabled] = useState(false);
  const enviarDatos = async () => {
    let data = new URLSearchParams();
    data.append('str_email_usu', str_email_usu);
    data.append('str_id_rol', str_id_rol);
    data.append('str_id_act', str_id_act);
    data.append('int_avance', int_avance);
    data.append('str_data', '0');
    data.append('txt_status', 'incomplete')
    console.log(actService.crearActivity(data));
    await actService.crearActivity(data).then(response => {
      if (response.data[0]?.exito === '0') {
        console.log('SI', response.data);
      } else {
        console.log('No', response.data);
        traerDatos()
      }
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
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
  const handleClick = (id) => {
    let dataArray
    let cont
    let avanceF
    cont = Number(int_avance) + Number(1)
    avanceF = 'incomplet'
    let valFinal
    if (id === 1) {
      console.log('Entro a la condición de === 1');
      // Si el índice ya existe en el arreglo y es === 1, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
      const newArray = [...str_data];
      newArray[id - 1] = 1;
      valFinal = newArray
      setStrData(newArray);

    } else if (id < str_data.length) {
      console.log('id < str_data.length,Si el índice ya existe en el arreglo, actualizamos su valor a 1');
      // Si el índice ya existe en el arreglo, actualizamos su valor a 1
      const newArray = [...str_data];
      newArray[id - 1] = 1;
      valFinal = newArray
      setStrData(newArray);
    } else {
      console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
      // Si el índice no existe en el arreglo, creamos nuevas posiciones
      const newArray = [...str_data];
      for (let i = str_data.length + 1; i < id; i++) {
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
    let data = new URLSearchParams();
    data.append('str_email_usu', str_email_usu);
    data.append('int_avance', cont);
    data.append('str_id_rol', str_id_rol);
    data.append('str_id_act', str_id_act);
    data.append('str_data', valFinal);
    data.append('txt_status', avanceF)
    actService.crearActivity(data)
  };
  const handleArrow = () => {
    console.log('Click');
    let cont
    let avanceF
    cont = Number(int_avance) + Number(1)
    avanceF = 'incomplet'
    let valFinal
    if (1 === 1) {
      console.log('Entro a la condición de === 1');
      // Si el índice ya existe en el arreglo y es === 1, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
      const newArray = [...str_data];
      newArray[1 - 1] = 1;
      valFinal = newArray
      setStrData(newArray);

    } else if (1 < str_data.length) {
      console.log('1 < str_data.length,Si el índice ya existe en el arreglo, actualizamos su valor a 1');
      // Si el índice ya existe en el arreglo, actualizamos su valor a 1
      const newArray = [...str_data];
      newArray[1 - 1] = 1;
      valFinal = newArray
      setStrData(newArray);
    } else {
      console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
      // Si el índice no existe en el arreglo, creamos nuevas posiciones
      const newArray = [...str_data];
      for (let i = str_data.length + 1; i < 1; i++) {
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
    const index = buttons.findIndex((element) => 1 === 1);
    if (buttons[index].statusFruit === 'disabled') {
      const updatedElements = [...buttons];
      updatedElements[index].status = 'enabled';
      setButtons(updatedElements);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      if (exite === '0') {
        console.log('aaaaaaaaaaaaa');
        enviarDatos()
      } else if (exite !== '') {
        traerDatos()
      }
    }, 1500);
    setLoading(false);
  }, [loading, exite])
  useEffect(() => {
    if (str_data) {
      traerDatos()
    }
  }, [exite])

  useEffect(() => {
    if (str_data) {
      if (buttons[0].status === 'disabled') {
        // Update the status of the next button to enabled
        const updatedButtons = buttons.map((button, index) => {
          if (index === 0) {
            return { ...button, status: 'enabled' };
          }
          return button;
        });
        setButton0Enabled(true)
        setButtons(updatedButtons);
        return
      } else {
        if (button0Enabled === true) {
          const countOnes = str_data.filter(button => button === '1').length;
          const positionsToUnlock = buttons.slice(0, countOnes + 1).map(button => ({ ...button, status: 'enabled' }));
          setButtons(buttons.map((button, index) => positionsToUnlock.find(position => position.id === button.id) || button));
        }
      }
    }
  }, [str_data, button0Enabled, buttons[maxAvance]]);
  return (
    <>
      <BackgroundImageT backgroundImage={umage}>
        <BotonFixedIndice to='/profesionales/frutas' />
        {
          loading ? (<h1>Cargando...</h1>) :
            (
              <div className="indice__grid">
                <div className='indice__padding'>
                  <img src={textoindice} className='indice__title' loading="lazy" />
                  <div className='indice__tema-contenedor'>
                    {buttons.map(({ id, tema, to, status, subtema1, subtema2, subtema3 }) => (
                      <div key={id}>
                        <Link
                          to={`${status === 'enabled' ? to : ''}`}
                          className={status === 'enabled' ? 'indice__links' : 'indice__links-disabled'}
                          onClick={() => handleClick(id)}
                        >
                          <h1 className='indice__tema-titulo'>{id}. <span className={status === 'enabled' ? 'indice__tema-span' : 'indice__tema-span-disabled'}>{tema} <span><ul className='indice__lista'>
                            <li className='listaIndice'>{subtema1}</li>
                            <li className='listaIndice'>{subtema2}</li>
                            <li className='listaIndice'>{subtema3}</li>
                          </ul></span></span></h1>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='indice__imagen-end'>
                  <img src={imgindice} alt="" />
                </div>
              </div>
            )
        }
        <div className='indicee__contenido-principal'>
          <div className='indicee__boton-siguiente'>
            <Link to='/profesionales/menu-fruta-o-verdura'><img src={prevBoton} loading="lazy" /></Link>
          </div>
          <div className='indicee__boton-siguiente'>
            <Link to='video' onClick={() => handleArrow()}>
              <img src={sigBoton} loading="lazy" />
            </Link>
          </div>
        </div>
      </BackgroundImageT>
    </>
  )
}

export default IndicePro