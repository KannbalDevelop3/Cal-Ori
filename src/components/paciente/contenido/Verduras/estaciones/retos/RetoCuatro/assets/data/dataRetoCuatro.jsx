import pregunta1 from '../images/game/pregunta-1/pregunta.png'
import pregunta2 from '../images/game/pregunta-2/pregunta.png'
import pregunta3 from '../images/game/pregunta-3/pregunta.png'
import pregunta4 from '../images/game/pregunta-4/pregunta.png'
import pregunta5 from '../images/game/pregunta-5/pregunta.png'
import pregunta6 from '../images/game/pregunta-6/pregunta.png'
import pregunta7 from '../images/game/pregunta-7/pregunta.png'

import c1 from '../images/game/pregunta-1/CIRCULO.png'
import c2 from '../images/game/pregunta-2/CIRCULO.png'
import c3 from '../images/game/pregunta-3/CIRCULO.png'
import c4 from '../images/game/pregunta-4/CIRCULO.png'
import c5 from '../images/game/pregunta-5/CIRCULO.png'
import c6 from '../images/game/pregunta-6/CIRCULO.png'
import c7 from '../images/game/pregunta-7/CIRCULO.png'

import respuesta1 from '../images/game/pregunta-1/respuesta.png'
import respuesta2 from '../images/game/pregunta-2/respuesta.png'
import respuesta3 from '../images/game/pregunta-3/respuesta.png'
import respuesta4 from '../images/game/pregunta-4/respuesta.png'
import respuesta5 from '../images/game/pregunta-5/respuesta.png'
import respuesta6 from '../images/game/pregunta-6/respuesta.png'
import respuesta7 from '../images/game/pregunta-7/respuesta.png'

import retroB1 from '../images/game/pregunta-1/CORRECTO.png'
import retroM1 from '../images/game/pregunta-1/RECUERDA.png'
import retroB2 from '../images/game/pregunta-2/CORRECTO.png'
import retroM2 from '../images/game/pregunta-2/RECUERDA.png'
import retroB3 from '../images/game/pregunta-3/CORRECTO.png'
import retroM3 from '../images/game/pregunta-3/RECUERDA.png'
import retroB4 from '../images/game/pregunta-4/CORRECTO.png'
import retroM4 from '../images/game/pregunta-4/RECUERDA.png'
import retroB5 from '../images/game/pregunta-5/CORRECTO.png'
import retroM5 from '../images/game/pregunta-5/RECUERDA.png'
import retroB6 from '../images/game/pregunta-6/CORRECTO.png'
import retroM6 from '../images/game/pregunta-6/RECUERDA.png'
import retroB7 from '../images/game/pregunta-7/CORRECTO.png'
import retroM7 from '../images/game/pregunta-7/RECUERDA.png'

import v1 from '../images/game/v1.png'
import f1 from '../images/game/f1.png'

import v2 from '../images/game/v2.png'
import f2 from '../images/game/f2.png'

import v3 from '../images/game/v3.png'
import f3 from '../images/game/f3.png'

import v4 from '../images/game/v4.png'
import f4 from '../images/game/f4.png'

import v5 from '../images/game/v5.png'
import f5 from '../images/game/f5.png'

import v6 from '../images/game/v6.png'
import f6 from '../images/game/f6.png'

import v7 from '../images/game/v7.png'
import f7 from '../images/game/f7.png'

import check from '../images/game/PALOMA.png'
import noacert from '../images/game/TACHE.png'

const questions = [
    {
        id: 1,
        question: pregunta1,
        answer: '',
        fruit: c1,
        trueFalse: [
            { isCorrect: true, answerText: v1, acert: check, noAcert: '' },
            { isCorrect: false, answerText: f1, acert: '', noAcert: noacert },
        ],
        retroMal: retroM1,
        retroBien: retroB1
    },
    {
        id: 2,
        question: pregunta2,
        answer: '',
        fruit: c2,
        trueFalse: [
            { isCorrect: false, answerText: v2, acert: '', noAcert: noacert },
            { isCorrect: true, answerText: f2, acert: check, noAcert: '' },
        ],
        retroMal: retroM2,
        retroBien: retroB2
    },
    {
        id: 3,
        question: pregunta3,
        answer: '',
        fruit: c3,
        trueFalse: [
            { isCorrect: false, answerText: v3, acert: '', noAcert: noacert },
            { isCorrect: true, answerText: f3, acert: check, noAcert: '' },
        ],
        retroMal: retroM3,
        retroBien: retroB3
    },
    {
        id: 4,
        question: pregunta4,
        answer: '',
        fruit: c4,
        trueFalse: [
            { isCorrect: true, answerText: v4, acert: check, noAcert: '' },
            { isCorrect: false, answerText: f4, acert: '', noAcert: noacert },
        ],
        retroMal: retroM4,
        retroBien: retroB4
    },
    {
        id: 5,
        question: pregunta5,
        answer: respuesta5,
        fruit: c5,
        trueFalse: [
            { isCorrect: true, answerText: v5, acert: check, noAcert: '' },
            { isCorrect: false, answerText: f5, acert: '', noAcert: noacert },
        ],
        retroMal: retroM5,
        retroBien: retroB5
    },
    {
        id: 6,
        question: pregunta6,
        answer: '',
        fruit: c6,
        trueFalse: [
            { isCorrect: true, answerText: v6, acert: '', noAcert: noacert },
            { isCorrect: false, answerText: f6, acert: check, noAcert: '' },
        ],
        retroMal: retroM6,
        retroBien: retroB6
    },
    {
        id: 7,
        question: pregunta7,
        answer: '',
        fruit: c7,
        trueFalse: [
            { isCorrect: true, answerText: v7, acert: check, noAcert: '' },
            { isCorrect: false, answerText: f7, acert: '', noAcert: noacert },
        ],
        retroMal: retroM7,
        retroBien: retroB7
    }
];

export { questions }



/*

Pregunta 1: v1
Pregunta 2: f1
Pregunta 3: f1
Pregunta 4: v1
Pregunta 5: v1
Pregunta 6: f1
Pregunta 7: v1

*/