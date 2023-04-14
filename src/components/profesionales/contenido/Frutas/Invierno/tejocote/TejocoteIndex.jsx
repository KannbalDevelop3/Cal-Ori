import React from "react";
import styled from "styled-components";
import FormElement from "../../../../../Reutilizable/Form/FormElement";
import { diasTejocote } from "../assets/data/dataFrutas";
import './css/tejocoteindex.css'

const TecojoteIndex = ({ currentIndex, handleNext, handleComplete }) => {
    return (
        <div className="tejocote__seccion-fruta">
            <img src={diasTejocote[currentIndex].imagen} className='te__imagen-fruta' loading="lazy" />
            {currentIndex === diasTejocote.length - 1 ? (
                <FormElement
                    onClick={() => handleComplete(currentIndex)}
                />
            ) : (
                <FormElement onClick={() => handleNext(currentIndex)} />
            )}
        </div>
    );
};

export default TecojoteIndex;