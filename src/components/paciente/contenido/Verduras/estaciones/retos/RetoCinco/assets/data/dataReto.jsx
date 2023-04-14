import pregunta1 from '../images/game/pregunta-1/pregunta-1.png'
import pregunta2 from '../images/game/pregunta-2/pregunta-2.png'
import pregunta3 from '../images/game/pregunta-3/pregunta-3.png'
import pregunta4 from '../images/game/pregunta-4/pregunta-4.png'
import pregunta5 from '../images/game/pregunta-5/pregunta-5.png'

import f1 from '../images/game/pregunta-1/CIRCULO-FRUTA.png'
import f2 from '../images/game/pregunta-2/CIRCULO-FRUTAS.png'
import f3 from '../images/game/pregunta-3/CIRCULO-FRUTAS.png'
import f4 from '../images/game/pregunta-4/CIRCULO-SALUD.png'
import f5 from '../images/game/pregunta-5/verduras.png'

import opcp11 from '../images/game/pregunta-1/a.png'
import opcp12 from '../images/game/pregunta-1/b.png'
import opcp21 from '../images/game/pregunta-2/a.png'
import opcp22 from '../images/game/pregunta-2/b.png'
import opcp31 from '../images/game/pregunta-3/a.png'
import opcp32 from '../images/game/pregunta-3/b.png'
import opcp41 from '../images/game/pregunta-4/a.png'
import opcp42 from '../images/game/pregunta-4/b.png'
import opcp51 from '../images/game/pregunta-5/a.png'
import opcp52 from '../images/game/pregunta-5/b.png'

import retroC from '../images/game/pregunta-1/bien.png'
import retroC2 from '../images/game/pregunta-2/bien.png'
import retroC3 from '../images/game/pregunta-3/bien.png'
import retroC4 from '../images/game/pregunta-4/bien.png'
import retroC5 from '../images/game/pregunta-5/bien.png'

import retmal1 from '../images/game/pregunta-1/mal.png'
import retmal2 from '../images/game/pregunta-2/mal.png'
import retmal3 from '../images/game/pregunta-3/mal.png'
import retmal4 from '../images/game/pregunta-4/mal.png'
import retmal5 from '../images/game/pregunta-5/mal.png'

import check from '../images/game/PALOMA.png'
import noacert from '../images/game/TACHE.png'

import check2 from '../images/game/PALOMA.png'
import noacert2 from '../images/game/TACHE.png'

import check3 from '../images/game/PALOMA.png'
import noacert3 from '../images/game/TACHE.png'

import check4 from '../images/game/PALOMA.png'
import noacert4 from '../images/game/TACHE.png'

import check5 from '../images/game/PALOMA.png'
import noacert5 from '../images/game/TACHE.png'

const questions = [
    {
        id: 1,
        question: pregunta1,
        fruit: f1,
        answers: [
            { isCorrect: true, answerText: opcp11, acert: check, noAcert: '' },
            { isCorrect: false, answerText: opcp12, acert: '', noAcert: noacert },
        ],
        retroMal: retmal1,
        retroBien: retroC
    },
    {
        id: 2,
        question: pregunta2,
        fruit: f2,
        answers: [
            { isCorrect: false, answerText: opcp21, acert: check2, noAcert: '' },
            { isCorrect: true, answerText: opcp22, acert: '', noAcert: noacert2 },
        ],
        retroMal: retmal2,
        retroBien: retroC2
    },
    {
        id: 3,
        question: pregunta3,
        fruit: f3,
        answers: [
            { isCorrect: false, answerText: opcp31, acert: '', noAcert: noacert3 },
            { isCorrect: true, answerText: opcp32, acert: check3, noAcert: '' },
        ],
        retroMal: retmal3,
        retroBien: retroC3
    },
    {
        id: 4,
        question: pregunta4,
        fruit: f4,
        answers: [
            { isCorrect: true, answerText: opcp41, acert: '', noAcert: noacert4 },
            { isCorrect: false, answerText: opcp42, acert: check4, noAcert: '' },
        ],
        retroMal: retmal4,
        retroBien: retroC4
    },
    {
        id: 5,
        question: pregunta5,
        fruit: f5,
        answers: [
            { isCorrect: true, answerText: opcp51, acert: check5, noAcert: '' },
            { isCorrect: false, answerText: opcp52, acert: '', noAcert: noacert5 },
        ],
        retroMal: retmal5,
        retroBien: retroC5
    },
];
export { questions }