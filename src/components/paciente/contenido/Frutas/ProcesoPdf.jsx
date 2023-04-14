import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './assets/styles/procesamiento.css'
import titulo from './assets/images/recurso.png'
import ipad from './assets/images/ipad.png'
import pdfmod from './assets/pdf/Infografia_Importancia_del_Procesamiento.pdf'
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import mujerf from './assets/images/imagen_importancia.png'
import ModalPDF from '../../../Reutilizable/ModalPDF'
import ImageLoading from '../../../Reutilizable/ImageLoading'
import infograf from './assets/images/infografia-imagen.jpg'
import BotonFixedIndice from 'components/Reutilizable/BotonFixedIndice'
import ContestarActividad from 'service/ContestarActividad'
import { CounterContext } from 'context/GlobalProvider'
import HorizontalPage from 'components/Reutilizable/HorizontalPage'
const ProcesoPdf = () => {
  const [estadoModal, setestadoModal] = useState(false)
  const [str_id_act, setStrIdAct] = useState('ebook_Frutas')
  const [str_id_rol, strIdRol] = useState(1)
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState({})
  const actService = new ContestarActividad();
  const { str_email_usu } = useContext(CounterContext)
  const [vSumar, setvSumar] = useState(0);
  const [int_avance, setStrIntAvance] = useState(1)
  const [str_data, setStrData] = useState(null)
  const [txt_status, setTxtStatus] = useState('')
  const [exite, setExite] = useState(null)
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
  useEffect(() => {
    setTimeout(() => {
      traerDatos()
    }, 1500);
    setLoading(false);
  }, [loading]);
  const handleArrow = () => {
    console.log('Click');
    let cont
    let avanceF
    cont = Number(int_avance) + Number(1)
    avanceF = 'incomplet'
    let valFinal
    if (4 === 4) {
      console.log('Entro a la condición de === 4');
      // Si el índice ya existe en el arreglo y es === 2, actualizamos su valor a 1 y le quitamos un -1 al arreglo para colocarlo en la posicion exacta
      const newArray = [...str_data];
      newArray[4 - 1] = 1;
      valFinal = newArray
      setStrData(newArray);

    }
    else {
      console.log('else, Si el índice no existe en el arreglo, creamos nuevas posiciones');
      // Si el índice no existe en el arreglo, creamos nuevas posiciones
      const newArray = [...str_data];
      for (let i = str_data.length + 1; i < 4; i++) {
        newArray.push(0);
      }
      newArray.push(1);
      // Si el arreglo supera las 5 posiciones, eliminamos la primera
      if (newArray.length > 6) {
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
  }
  const handleModal = () => {
    setestadoModal(true)
  }
  return (
    <HorizontalPage>
      <div className='procesamiento__menu-pdf'>
        <BotonFixedIndice to='/paciente/frutas' />
        <div className='procesamiento__grid'>
          <div className='procesamiento__titulo'>
            <img src={titulo} loading="lazy" className='proces__imagen' />
          </div>
          <div className='procesamiento__ipad'>
            {/* <a href='https://bucket-kannbal-ac.s3.amazonaws.com/Infograf%C3%ADa_Importancia_del_Procesamiento.pdf' target="blank"> */}
            <img src={ipad} onClick={handleModal} loading="lazy" className='cursor-pointer' />
            {/* </a> */}
          </div>
          <div className='procesamiento__mujer'>
            <img src={mujerf} loading="lazy" />
          </div>
          <ModalPDF estado={estadoModal} cambiarEstado={setestadoModal} mostrarOverlay={true} backgroundDesktop={false} padding='10'>
            <ImageLoading src={infograf} width='100%' height='auto' />
          </ModalPDF>
        </div>
        <div className='procesamiento__contenido-principal'>
          <div className='procesamiento__boton-siguiente'>
            <Link to='/paciente/frutas/reto-uno'><img src={prevBoton} loading="lazy" /></Link>
          </div>
          <div className='procesamiento__boton-siguiente'>
            <Link to='/paciente/frutas/composicion-nutrimental' onClick={() => handleArrow()}>
              <img src={sigBoton} loading="lazy" />
            </Link>
          </div>
        </div>
      </div>
    </HorizontalPage>
  )
}

export default ProcesoPdf