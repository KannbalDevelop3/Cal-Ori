import pera from '../images/pera.png'
import guayaba from '../images/guayaba.png'
import naranja from '../images/naranja.png'
import tejocote from '../images/tejocote.png'
import durazno from '../images/durazno.png'

import tdia1 from '../../tejocote/images/dia-1.png'
import tdia2 from '../../tejocote/images/dia-2.png'
import tdia3 from '../../tejocote/images/dia-3.png'
import tdia4 from '../../tejocote/images/dia-4.png'
import tdia5 from '../../tejocote/images/dia-5.png'
import tdia6 from '../../tejocote/images/dia-6.png'
import tdia7 from '../../tejocote/images/dia-7.png'

import pdia1 from '../../pera/images/dia-1.png'
import pdia2 from '../../pera/images/dia-2.png'
import pdia3 from '../../pera/images/dia-3.png'
import pdia4 from '../../pera/images/dia-4.png'
import pdia5 from '../../pera/images/dia-5.png'
import pdia6 from '../../pera/images/dia-6.png'
import pdia7 from '../../pera/images/dia-7.png'

import ddia1 from '../../durazno/images/dia-1.png'
import ddia2 from '../../durazno/images/dia-2.png'
import ddia3 from '../../durazno/images/dia-3.png'
import ddia4 from '../../durazno/images/dia-4.png'
import ddia5 from '../../durazno/images/dia-5.png'
import ddia6 from '../../durazno/images/dia-6.png'
import ddia7 from '../../durazno/images/dia-7.png'

import gdia1 from '../../guayaba/images/dia-1.png'
import gdia2 from '../../guayaba/images/dia-2.png'
import gdia3 from '../../guayaba/images/dia-3.png'
import gdia4 from '../../guayaba/images/dia-4.png'
import gdia5 from '../../guayaba/images/dia-5.png'
import gdia6 from '../../guayaba/images/dia-6.png'
import gdia7 from '../../guayaba/images/dia-7.png'

import ndia1 from '../../naranja/images/dia-1.png'
import ndia2 from '../../naranja/images/dia-2.png'
import ndia3 from '../../naranja/images/dia-3.png'
import ndia4 from '../../naranja/images/dia-4.png'
import ndia5 from '../../naranja/images/dia-5.png'
import ndia6 from '../../naranja/images/dia-6.png'
import ndia7 from '../../naranja/images/dia-7.png'
const menuFrutas = [
    {
        id: 1,
        imagen: pera,
        statusF: 'disabled',
        to: 'pera'
    },
    {
        id: 2,
        imagen: guayaba,
        statusF: 'disabled',
        to: 'guayaba'
    },
    {
        id: 3,
        imagen: naranja,
        statusF: 'disabled',
        to: 'naranja'
    },
    {
        id: 4,
        imagen: tejocote,
        statusF: 'disabled',
        to: 'tejocote'
    },
    {
        id: 5,
        imagen: durazno,
        statusF: 'disabled',
        to: 'durazno'
    }
]
const diasFrutas = [
    { id: 1, dia: 'primero', titulo: 'Día 1' },
    { id: 2, dia: 'segundo', titulo: 'Día 2' },
    { id: 3, dia: 'tercero', titulo: 'Día 3' },
    { id: 4, dia: 'cuatro', titulo: 'Día 4' },
    { id: 5, dia: 'quinto', titulo: 'Día 5' },
    { id: 6, dia: 'sexto', titulo: 'Día 6' },
    { id: 7, dia: 'septimo', titulo: 'Día 7' },
]
const diasTejocote = [
    { id: 1, imagen: tdia1 },
    { id: 2, imagen: tdia2 },
    { id: 3, imagen: tdia3 },
    { id: 4, imagen: tdia4 },
    { id: 5, imagen: tdia5 },
    { id: 6, imagen: tdia6 },
    { id: 7, imagen: tdia7 },
]
const diasPera = [
    { id: 1, imagen: pdia1 },
    { id: 2, imagen: pdia2 },
    { id: 3, imagen: pdia3 },
    { id: 4, imagen: pdia4 },
    { id: 5, imagen: pdia5 },
    { id: 6, imagen: pdia6 },
    { id: 7, imagen: pdia7 },
]
const diasDurazno = [
    { id: 1, imagen: ddia1 },
    { id: 2, imagen: ddia2 },
    { id: 3, imagen: ddia3 },
    { id: 4, imagen: ddia4 },
    { id: 5, imagen: ddia5 },
    { id: 6, imagen: ddia6 },
    { id: 7, imagen: ddia7 },
]
const diasGuayaba = [
    { id: 1, imagen: gdia1 },
    { id: 2, imagen: gdia2 },
    { id: 3, imagen: gdia3 },
    { id: 4, imagen: gdia4 },
    { id: 5, imagen: gdia5 },
    { id: 6, imagen: gdia6 },
    { id: 7, imagen: gdia7 },
]
const diasNaranja = [
    { id: 1, imagen: ndia1 },
    { id: 2, imagen: ndia2 },
    { id: 3, imagen: ndia3 },
    { id: 4, imagen: ndia4 },
    { id: 5, imagen: ndia5 },
    { id: 6, imagen: ndia6 },
    { id: 7, imagen: ndia7 },
]
export { menuFrutas, diasFrutas, diasTejocote, diasPera, diasDurazno, diasNaranja, diasGuayaba }