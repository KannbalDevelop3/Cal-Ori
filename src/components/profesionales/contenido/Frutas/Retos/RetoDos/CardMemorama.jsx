import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import backReto from './assets/images/game/front-tarjet.png'

function CardMemorama({ id, src, pokemon, flipCard, number, unflippedCards, disabledCards }) {
    const [isFlipped, setIsFlipped] = useState(false)
    const [hasEvent, setHasEvent] = useState(true)
    useEffect(() => {
        if (unflippedCards.includes(number)) {
            setTimeout(() => setIsFlipped(false), 700)
        }
    }, [unflippedCards])
    useEffect(() => {
        if (disabledCards.includes(number)) {
            setHasEvent(false)
        }
    }, [disabledCards])
    const handleClick = e => {
        const value = flipCard(pokemon, number)
        if (value !== 0) {
            setIsFlipped(!isFlipped)
        }
    }
    return (
        <div className='cardReto'>
            <ReactCardFlip isFlipped={isFlipped}>
                <img src={backReto} className='card-image' alt='backFace' onClick={hasEvent ? handleClick : null} />
                <img src={src} className='card-image' alt='frontFace' onClick={hasEvent ? handleClick : null} />
            </ReactCardFlip>
        </div>
    )
}

export default CardMemorama
