import { FilterContainer } from '../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../Reutilizable/ImageLoading'
import {platanoo } from './PlatanoDias'
const PlatanoIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={platanoo[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === platanoo.length - 1 ? (
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

export default PlatanoIndex