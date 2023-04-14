import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuVerduraOFruta from '../../../../../Reutilizable/MenuVerduraOFruta'
import { menuVerduras } from './assets/data/OptVErdurasInvierno'
import './assets/styles/primaveraverduras.css'
import fondoBack from './assets/images/menu/FONDO.jpg'
import fondoCocina from './assets/images/menu/IMAGEN.jpg'
import instruction from './assets/images/menu/INSTRUCCIONES.png'
import titleEstacion from './assets/images/menu/TITULO.png'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
import { AuthContext } from 'auth/AuthContext'

const PrimaveraVerduraPro = () => {
  const ruta = '/profesionales/verduras/estacion';
  const [buttons, setButtons] = useState(menuVerduras)
  const [str_id_act, setStrIdAct] = useState('verd_prim')
  const [str_id_rol, strIdRol] = useState(1)
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState({})
  const actService = new ContestarActividad();
  const { str_email_usu } = useContext(CounterContext)
  const [int_avance, setStrIntAvance] = useState(0)
  const [str_data, setStrData] = useState(null)
  const [txt_status, setTxtStatus] = useState('')
  const [exite, setExite] = useState(null)
  const enviarDatos = async () => {
    let data = new URLSearchParams();
    data.append('str_email_usu', str_email_usu);
    data.append('str_id_rol', 1);
    data.append('str_id_act', str_id_act);
    data.append('int_avance', 1);
    data.append('str_data', '0');
    data.append('txt_status', 'incomplete')
    console.log(actService.crearActivity(data));
    await actService.crearActivity(data).then(response => {
      if (response.data[0]?.exito === '0') {
        console.log('SI', response.data);
      } else {
        console.log('No', response.data);
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
        setStrData(dataArray); //
      }
    }).catch(error => {
      console.log(error);
    })
    return () => {
      isMounted = false;
    };
  }
  const handleButtonClick = (id) => {
    console.log('Click', id);
    let cont
    let avanceF
    let count = 0;
    let complete = true;
    cont = Number(int_avance) + Number(1)
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
      if (newArray.length > 5) {
        newArray.shift();
      }
      valFinal = newArray
      setStrData(newArray);
    }
    for (let i = 0; i < str_data.length; i++) {
      if (str_data[i] === '0') {
        complete = false;
        break;
      }
    }
    if (complete) {
      avanceF = "complete";
    }
    else {
      avanceF = "incomplete"
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
    const index = buttons.findIndex((element) => element.id === id);
    if (buttons[index].statusFruit === 'disabled') {
      const updatedElements = [...buttons];
      updatedElements[index].statusFruit = 'enabled';
      setButtons(updatedElements);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      traerDatos()
    }, 1500);
    setLoading(false);
  }, [loading]);
  useEffect(() => {
    if (exite === '0') {
      enviarDatos()
    } else {
      traerDatos()
    }
  }, [exite])

  useEffect(() => {
    if (str_data) {
      str_data.map((value, index) => {
        if (value === '1') {
          const objIndex = buttons.findIndex(obj => obj.id === index + 1);
          if (objIndex !== -1) {
            const newArrayB = [...buttons];
            newArrayB[objIndex].statusFruit = 'enabled';
            setButtons(newArrayB);
          }
        }
      });
    }
  }, [str_data]);
  return (
    <MenuVerduraOFruta
      backgroundDesktop={fondoBack} backgroundCocina={fondoCocina}
      titleInstruction={instruction} titleEstacion={titleEstacion}
      width1='85%' width2='50%' className='' rutaPrev={ruta} left=''>
      <div className='primavera-verduras__menu-estacion'>
        {buttons.map(({ id, imagen, disabled, to, statusFruit }) => (
          <div className='primavera-verduras__center-div' key={id}>
            <button className={`primavera-verduras__boton-opt-e`}>
              <Link
                to={`${disabled === false ? `/profesionales/verduras/estacion/primavera/${to}` : ''}`}
                onClick={() => { handleButtonClick(id) }}
              >
                <img
                  className={statusFruit === 'disabled' ? 'boxShadowAnimate' : 'boxShadowAnimate-enabled'}
                  style={{ cursor: disabled === true ? 'no-drop' : 'pointer', opacity: disabled === true ? '0.8' : '1' }}
                  src={imagen}
                  loading="lazy" />
              </Link>
            </button>
          </div>
        ))}
      </div>
    </MenuVerduraOFruta>
  )
}

export default PrimaveraVerduraPro