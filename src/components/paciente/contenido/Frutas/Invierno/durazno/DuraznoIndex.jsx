import React from "react";
import FormElement from "../../../../../Reutilizable/Form/FormElement";
import { diasDurazno } from "../assets/data/dataFrutas";
import './css/duraznoindex.css'

const DuraznoIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <div className="tejocote__seccion-fruta fade-in-image">
            <img src={diasDurazno[currentIndex].imagen} className='te__imagen-fruta' loading="lazy" />
            {currentIndex === diasDurazno.length - 1 ? (
                <FormElement
                    onClick={() => handleComplete(currentIndex)}
                />
            ) : (
                <FormElement onClick={() => handleNext(currentIndex)} />
            )}
        </div>
    );
};

export default DuraznoIndex;