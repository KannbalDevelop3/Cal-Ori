import React from "react";
import FormElement from "../../../../../Reutilizable/Form/FormElement";
import { diasNaranja } from "../assets/data/dataFrutas";
import './css/naranjaindex.css'

const NaranjaIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <div className="tejocote__seccion-fruta">
            <img src={diasNaranja[currentIndex].imagen} className='te__imagen-fruta' loading="lazy" />
            {currentIndex === diasNaranja.length - 1 ? (
                <FormElement
                    onClick={() => handleComplete(currentIndex)}
                />
            ) : (
                <FormElement onClick={() => handleNext(currentIndex)} />
            )}
        </div>
    );
};

export default NaranjaIndex;