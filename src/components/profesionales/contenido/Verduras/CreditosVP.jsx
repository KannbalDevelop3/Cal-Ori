import SlidePage from 'components/Reutilizable/SlidePage'
import fondopage from '../../../assets/images/fondos/pacypro/fondo-creditos.png'
import circle from '../../../assets/images/fondos/pacypro/verdura-creditos.png'
import ImageLoading from 'components/Reutilizable/ImageLoading'
const CreditosVP = () => {
    const rutaP = '/profesionales/verduras/conclusiones'
    const toRoute = '/profesionales/verduras'
    return (
        <SlidePage backgroundDesktop={fondopage} rutaPrev={rutaP} visibility='hidden' to={toRoute} >
            <div className='credit-verdura__grid'>
                <div className='credit-verdura-contenedor-grid'>
                    <h1 className='credit-text_Credit'>Créditos</h1>
                    <p className='credit-text_Parrafo'>Dr. Marcos Meneses Mayo</p>
                    <p className='credit-text_Parrafo'>Dra. Miriam Magale Santiago Ortiz</p>
                    <p className='credit-text_Parrafo'>Dra. Genoveva Vanessa Gloria Abad</p>
                    <p className='credit-text_Parrafo'>Universidad Anáhuac México </p>

                </div>
                <div className='credit-verdura__imagen-end'>
                    <div className='credit-verdura__img-circle'>
                        <ImageLoading src={circle} loading='lazy' />
                    </div>
                </div>
            </div>
        </SlidePage>
    )
}

export default CreditosVP