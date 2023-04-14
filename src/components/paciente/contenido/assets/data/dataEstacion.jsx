import primavera from '../../Frutas/assets/images/primavera.png'
import invierno from '../../Frutas/assets/images/invierno.png'
import verano from '../../Frutas/assets/images/verano.png'
const menuEsatcion = [
    {
        id: 1,
        imagen: invierno,
        disabled: false,
        status: 'disabled',
        to: 'invierno'
    },
    {
        id: 2,
        imagen: primavera,
        disabled: false,
        status: 'disabled',
        to: 'primavera'
    },
    {
        id: 3,
        imagen: verano,
        disabled: false,
        status: 'disabled',
        to: 'verano'
    }
]
export { menuEsatcion }