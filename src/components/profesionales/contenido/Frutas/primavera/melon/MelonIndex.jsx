import { FilterContainer } from '../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../Reutilizable/ImageLoading'
import { melon } from './MelonDias'
const MelonIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={melon[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === melon.length - 1 ? (
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

export default MelonIndex