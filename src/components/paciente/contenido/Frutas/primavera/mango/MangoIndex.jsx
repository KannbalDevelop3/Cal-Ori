import { FilterContainer } from '../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../Reutilizable/ImageLoading'
import { mangito } from './MangoDias'
const MangoIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={mangito[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === mangito.length - 1 ? (
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

export default MangoIndex