const Imagen = ({ imagenEf, estilo }) => {
    return (
        <img src={imagenEf} className={`${estilo}`}/>
    )
}

export default Imagen