import { FilterContainer } from '../../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import { zanahoriad } from './Dias'
import './assets/styles/zanahoria.css'
const ZanahoriaIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={zanahoriad[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === zanahoriad.length - 1 ? (
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

export default ZanahoriaIndex