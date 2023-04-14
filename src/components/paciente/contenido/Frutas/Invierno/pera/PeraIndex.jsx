import React from "react";
import FormElement from "../../../../../Reutilizable/Form/FormElement";
import { diasPera } from "../assets/data/dataFrutas";
import './css/peraindex.css'

const PeraIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <div className="tejocote__seccion-fruta fade-in-image">
            <img src={diasPera[currentIndex].imagen} className='te__imagen-fruta' loading="lazy"/>
            {currentIndex === diasPera.length - 1 ? (
                <FormElement
                    onClick={() => handleComplete(currentIndex)}
                />
            ) : (
                <FormElement onClick={() => handleNext(currentIndex)} />
            )}
        </div>
    );
};

export default PeraIndex;