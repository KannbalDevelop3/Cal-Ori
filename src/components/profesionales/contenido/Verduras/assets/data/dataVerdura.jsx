import c1 from '../images/clasificacion/RAIZ/CIRCULO-RAIZ.png'
import c2 from '../images/clasificacion/TALLO/CIRCULO-TALLO.png'
import c3 from '../images/clasificacion/BULBO/CIRCULO-BULBO.png'
import c4 from '../images/clasificacion/HOJA/CIRCULO-HOJA.png'
import c5 from '../images/clasificacion/FLORES/CIRCULO-FLORES.png'
import c6 from '../images/clasificacion/FRUTOS/CIRCULO-FRUTOS.png'
import t1 from '../images/clasificacion/RAIZ/TEXTO-RAIZ.png'
import t2 from '../images/clasificacion/TALLO/TEXTO-TALLO.png'
import t3 from '../images/clasificacion/BULBO/TEXTO-BULBO.png'
import t4 from '../images/clasificacion/HOJA/TEXTO-HOJA.png'
import t5 from '../images/clasificacion/FLORES/TEXTO-FLORES.png'
import t6 from '../images/clasificacion/FRUTOS/TEXTO-FRUTOS.png'
import e1 from '../images/envejecimiento/TEXTO1.png'
import e2 from '../images/envejecimiento/TEXTO2.png'
import e3 from '../images/envejecimiento/TEXTO3.png'
import et1 from '../images/envejecimiento/IMAGEN1.png'
import et2 from '../images/envejecimiento/IMAGEN2.png'
import et3 from '../images/envejecimiento/IMAGEN3.png'
import icon1 from '../images/composicion-nutrimental-verduras/ICONO1.png'
import tt1 from '../images/composicion-nutrimental-verduras/TEXTO1.png'
import fl1 from '../images/composicion-nutrimental-verduras/FLECHA.png'
import fl2 from '../images/composicion-nutrimental-verduras/izquierda.png'
import tt2 from '../images/composicion-nutrimental-verduras/TEXTO2.png'
import icon2 from '../images/composicion-nutrimental-verduras/ICONO2.png'
import tt3 from '../images/composicion-nutrimental-verduras/TEXTO3.png'
import tt4 from '../images/composicion-nutrimental-verduras/TEXTO4.png'
import icon3 from '../images/composicion-nutrimental-verduras/ICONO3.png'
import tt5 from '../images/composicion-nutrimental-verduras/TEXTO5.png'
import tt6 from '../images/composicion-nutrimental-verduras/TEXTO6.png'
import imaget from '../images/importancia-del-proceso-termico-de-las-verduras/IMAGEN.png'
import titlec from '../images/importancia-del-proceso-termico-de-las-verduras/TITULO2.png'
import parrafo from '../images/importancia-del-proceso-termico-de-las-verduras/TEXTO2.png'
import imaget2 from '../images/importancia-del-proceso-termico-de-las-verduras/IMAGEN1.png'
import titlec2 from '../images/importancia-del-proceso-termico-de-las-verduras/TITULO22.png'
import parrafo2 from '../images/importancia-del-proceso-termico-de-las-verduras/TEXTO22.png'
import imaget3 from '../images/importancia-del-proceso-termico-de-las-verduras/IMAGEN2.png'
import titlec3 from '../images/importancia-del-proceso-termico-de-las-verduras/TITULO3.png'
import parrafo3 from '../images/importancia-del-proceso-termico-de-las-verduras/TEXTO3.png'
import biimg1 from '../images/bioactivos/TEXTO1.png'
import biimg2 from '../images/bioactivos/TEXTO2.png'
import biimg3 from '../images/bioactivos/TEXTO3.png'
const menuverdura = [
    {
        id: 1,
        tema: ' Definición e importancia de las verduras en una alimentación saludable',
        subtema1: '',
        status: 'disabled',
        to: '/profesionales/verduras/definicion'
    },
    {
        id: 2,
        tema: 'Clasificación según su órgano comestible, ciclo de vida y coloración',
        subtema1: '',
        status: 'disabled',
        to: 'clasificacion'
    },
    {
        id: 3,
        tema: 'Proceso de envejecimiento de las hortalizas',
        subtema1: '',
        status: 'disabled',
        to: 'envejecimiento'
    }, {
        id: 4,
        tema: 'Composición nutrimental',
        subtema1: '',
        status: 'disabled',
        to: 'composicion-nutrimental-de-verduras'
    },
    {
        id: 5,
        tema: 'Importancia del proceso térmico',
        status: 'disabled',
        to: 'importancia-del-proceso-termico-de-las-verduras'
    },
    {
        id: 6,
        tema: 'Clasificación general de los componentes bioactivos presentes en las verduras',
        subtema1: '',
        status: 'disabled',
        to: 'bioactivos-presentes-en-las-verduras'
    },
    {
        id: 7,
        tema: 'Ejemplos de verduras por temporada de cosecha:',
        subtema1: 'A) Invierno',
        subtema2: 'B) Primavera ',
        status: 'disabled',
        to: 'estacion'
    },
    {
        id: 8,
        tema: 'Conclusiones',
        subtema1: '',
        status: 'disabled',
        to: 'conclusiones'
    },
    {
        id: 9,
        tema: 'Créditos',
        subtema1: '',
        status: 'disabled',
        to: 'creditos'
    },

]
const menuclasificacion = [
    {
        id: 1,
        imagen: c1,
        itext: t1,
    },
    {
        id: 2,
        imagen: c2,
        itext: t2,
    },
    {
        id: 3,
        imagen: c3,
        itext: t3,
    },
    {
        id: 4,
        imagen: c4,
        itext: t4,
    },
    {
        id: 5,
        imagen: c5,
        itext: t5,
    },
    {
        id: 6,
        imagen: c6,
        itext: t6,
    }
]
const envejecimientop = [
    {
        id: 1,
        texto: 'Una vez que se realiza la cosecha de la verdura u hortaliza fresca, está lista para su consumo; pero inicia su proceso de envejecimiento o senescencia.',
        imagen: et1
    },
    {
        id: 2,
        texto: 'El envejecimiento es un proceso que conlleva la pérdida paulatina y progresiva de los componentes de materia seca (proteínas, carbohidratos, azúcares, minerales, etc). La conservación en frío retarda este proceso, mientras que la conservación a temperatura ambiente afecta el proceso, ya que existe variación de la temperatura ambiental y humedad.', imagen: et2
    },
    {
        id: 3,
        texto: 'Los daños de la verdura u hortaliza por mal transporte o daños mecánicos por limpieza en la industria agrícola, hacen que los productos se deterioren más rápido.',
        imagen: et3
    }
]
const menuComposicion = [
    {
        id: 1,
        icon: icon1,
        texto1: { imagen: tt1, width: '100%', height: 'auto' },
        flecha: fl1,
        texto2: { imagen2: tt2, width2: '85%', height2: 'auto' },
    },
    {
        id: 2,
        icon: icon2,
        texto1: { imagen: tt4, width: '100%', height: 'auto' },
        flecha: fl2,
        texto2: { imagen2: tt3, width2: '80%', height2: 'auto' },
    },
    {
        id: 3,
        icon: icon3,
        texto1: { imagen: tt5, width: '97%', height: 'auto' },
        flecha: fl1,
        texto2: { imagen2: tt6, width2: '75%', height2: 'auto' },
    }
]
const menutermico = [
    {
        id: 1,
        imagen: imaget,
        title: { imagens: titlec, width: '83%' },
        texto: { textI: parrafo, widthI: '90%' }
    },
    {
        id: 2,
        imagen: imaget2,
        title: { imagens: titlec2, width: '61%' },
        texto: { textI: parrafo2, widthI: '98%' }
    },
    {
        id: 3,
        imagen: imaget3,
        title: { imagens: titlec3, width: '71%' },
        texto: { textI: parrafo3, widthI: '98%' }
    }
]
const menuBioactivo = [
    {
        id: 1,
        imagen: { img: biimg1, width: '90%' }

    },
    {
        id: 2,
        imagen: { img: biimg2, width: '90%' }

    },
    {
        id: 3,
        imagen: { img: biimg3, width: '98%' }

    }
]
const menuBioactivoText = [
    {
        id: 1,
        a: '•',
        text:'Los alimentos funcionales presentes en las verduras son consumidos en la dieta diaria, aportan nutrientes y poseen componentes bioactivos con efectos que resultan benéficos para la salud.'

    },
    {
        id: 2,
        a: '•',
        text:'Los componentes bioactivos han sido comercializados y distribuidos como nutracéuticos; los cuales se caracterizan por ser suplementos dietéticos “bioactivos” beneficiosos para la salud que se ingieren en píldoras, pastillas, cápsulas etc.'


    },
    {
        id: 3,
        a: '•',
        text: 'La fibra como un alimento funcional.',
        text2: 'Las verduras contienen fibra soluble e insoluble, que al ser hidrolizada y fermentada por el microbioma intestinal coadyuva en la remisión de procesos inflamatorios a nivel intestinal y mejora la digestión. Por otro lado, se ha asociado con una mejoría en los niveles séricos de hemoglobina glicosilada en pacientes diabéticos. Las recomendaciones internacionales actuales recomiendan un consumo de fibra entre 20-35 g/día, tanto soluble como insoluble para mantener un mejor control glucémico e insulínico; o bien un consumo de 10-14g de fibra dietética por cada 1,000 kcal.'


    }
]

export { menuverdura, menuclasificacion, envejecimientop, menuComposicion, menutermico, menuBioactivo, menuBioactivoText }