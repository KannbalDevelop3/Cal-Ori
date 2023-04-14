import { FilterContainer } from '../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../Reutilizable/ImageLoading'
import { ciruelaa } from './CiruelaDias'

const CiruelaIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={ciruelaa[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === ciruelaa.length - 1 ? (
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

export default CiruelaIndex