import { FilterContainer } from '../../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import './assets/styles/zanahoria.css'
import { calabazad } from './CalabazaDias'
const CalabazaIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={calabazad[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === calabazad.length - 1 ? (
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

export default CalabazaIndex