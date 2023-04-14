import olor from '../images/olor.png'
import nutrientes from '../images/nutrientes.png'
import textura from '../images/textura.png'
import color from '../images/color.png'
import modalcolor from '../images/modal-color.png'
import modalnutrientes from '../images/modal-nutrientes.png'
import modalolor from '../images/modal-olor.png'
import modaTesxtura from '../images/modal_textura.png'
const menu = [
    {
        id: 1,
        tema: 'Definición, clasificación e importancia de las frutas en la alimentación',
        subtema1: '',
        status: 'disabled',
        to: 'video'
    },
    {
        id: 2,
        tema: 'Proceso de maduración de las frutas',
        subtema1: '',
        status: 'disabled',
        to: 'procesos'
    },
    {
        id: 3,
        tema: 'Importancia del procesamiento industrial de las frutas',
        subtema1: '',
        status: 'disabled',
        to: 'pdf'
    }, {
        id: 4,
        tema: 'Composición nutrimental de las frutas',
        subtema1: '',
        status: 'disabled',
        to: 'composicion-nutrimental'
    },
    {
        id: 5,
        tema: 'Ejemplos de frutas por temporada de cosecha',
        subtema1: 'A) Primavera',
        subtema2: 'B) Verano',
        subtema3: 'C) Invierno',
        status: 'disabled',
        to: 'estacion'
    },
    {
        id: 6,
        tema: 'Conclusiones',
        subtema1: '',
        status: 'disabled',
        to: 'conclusiones'
    },
    {
        id: 7,
        tema: 'Créditos',
        subtema1: '',
        status: 'disabled',
        to: 'creditos'
    }
]
const bioquimicos = [
    {
        id: 1,
        imagen: color,
        disabled: false,
        modal: modalcolor,
    },
    {
        id: 2,
        imagen: nutrientes,
        disabled: false,
        modal: modalnutrientes,
    }
];

const fisiologicos = [
    {
        id: 1,
        imagen: olor,
        disabled: false,
        modal: modalolor
    },
    {
        id: 2,
        imagen: textura,
        disabled: false,
        modal: modaTesxtura
    }
];

export { bioquimicos, fisiologicos, menu }