import { FilterContainer } from '../../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import './assets/styles/zanahoria.css'
import {espinacad } from './EspinacaDias'
const EspinacaIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={espinacad[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === espinacad.length - 1 ? (
                    <FormElement
                        onClick={() => handleComplete(currentIndex)}
                    />
                ) : (
                    <FormElement onClick={() => handleNext(currentIndex)} />
                )}
            </FilterContainer>
        </>
    )
}

export default EspinacaIndex