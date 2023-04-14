import React from "react";
import FormElement from "../../../../../Reutilizable/Form/FormElement";
import { diasGuayaba } from "../assets/data/dataFrutas";
import './css/guayabaindex.css'

const GuayabaIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <div className="tejocote__seccion-fruta fade-in-image">
            <img src={diasGuayaba[currentIndex].imagen} className='te__imagen-fruta' loading="lazy" />
            {currentIndex === diasGuayaba.length - 1 ? (
                <FormElement
                    onClick={() => handleComplete(currentIndex)}
                />
            ) : (
                <FormElement onClick={() => handleNext(currentIndex)} />
            )}
        </div>
    );
};

export default GuayabaIndex;