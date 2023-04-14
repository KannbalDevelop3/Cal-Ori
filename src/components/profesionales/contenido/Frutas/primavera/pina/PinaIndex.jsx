import { FilterContainer } from '../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../Reutilizable/ImageLoading'
import { pinaa } from './PinaDias'
const PinaIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={pinaa[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === pinaa.length - 1 ? (
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

export default PinaIndex