import BackgroundImageT from 'components/Reutilizable/BackgroundImageT'
import BotonFixedIndice from 'components/Reutilizable/BotonFixedIndice'
import SlidePage from 'components/Reutilizable/SlidePage'
import fondopage from '../../../assets/images/fondos/pacypro/fondo-creditos.png'
import imgindice from '../../../assets/images/fondos/pacypro/fruta-creditos.png'
import './assets/styles/conclusiones.css'
import sigBoton from '../../contenido/assets/images/f-der.png'
import prevBoton from '../../contenido/assets/images/f-izq.png'
import { Link } from 'react-router-dom'
const ConclusionesFPro = () => {

  const rutaN = '/profesionales/verduras/creditos'
  const rutaP = '/profesionales/verduras/estacion'
  return (
    <BackgroundImageT backgroundImage={fondopage}>
      <BotonFixedIndice to='/profesionales/frutas' />
      <div className="conclusiones__grid">
        <div className='conclusion__creditos'>
          <h1 className='text_Credit'>Créditos</h1>
          <p className='text_Parrafo'>Dr. Marcos Meneses Mayo</p>
          <p className='text_Parrafo'>Dra. Miriam Magale Santiago Ortiz</p>
          <p className='text_Parrafo'>Dra. Romina David López Guerrero</p>
          <p className='text_Parrafo'>Dra. Andrea Victoria Pacheco Sánchez</p>
          <p className='text_Parrafo'>Universidad Anáhuac México</p>
        </div>
        <div className='conclusion__imagen-end'>
          <img src={imgindice} alt="" />
        </div>
      </div>
      <div className='video__contenido-principal'>
        <div className='video__boton-siguiente'>
          <Link to='/profesionales/frutas/conclusiones'><img src={prevBoton} loading="lazy" /></Link>
        </div>
        <div className='video__boton-siguiente'>
        </div>
      </div>

    </BackgroundImageT>
  )
}

export default ConclusionesFPro