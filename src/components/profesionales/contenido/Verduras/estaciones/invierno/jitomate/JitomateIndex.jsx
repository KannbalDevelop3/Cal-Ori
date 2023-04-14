import { FilterContainer } from '../../../../../../Reutilizable/EstilosDiasComponents'
import FormElement from '../../../../../../Reutilizable/Form/FormElement'
import ImageLoading from '../../../../../../Reutilizable/ImageLoading'
import './assets/styles/zanahoria.css'
import { jitomated } from './JitomateDias'
const JitomateIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <>
            <FilterContainer>
                <ImageLoading src={jitomated[currentIndex].imagen} width='97%' className='zana' />
                {currentIndex === jitomated.length - 1 ? (
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

export default JitomateIndex