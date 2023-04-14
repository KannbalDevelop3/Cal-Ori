import { FilterContainer } from '../../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import './assets/styles/zanahoria.css'
import { chiled } from './ChileDias' 
const CalabazaIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={chiled[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === chiled.length - 1 ? (
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