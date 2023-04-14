import { useState, useEffect } from 'react';
import styled from 'styled-components';
function ExampleId() {
    const [matriz, setMatriz] = useState([]);

    // Generar la matriz inicial de 5x5
    useEffect(() => {
        const matrizInicial = [];
        for (let i = 0; i < 3; i++) {
            const fila = [];
            for (let j = 0; j < 3; j++) {
                fila.push({
                    imagen: `https://picsum.photos/seed/${i}-${j}/200`,
                });
            }
            matrizInicial.push(fila);
        }
        setMatriz(matrizInicial);
    }, []);

    // Cambiar las imágenes aleatoriamente cada 5 segundos
    useEffect(() => {
        const intervalId = setInterval(() => {
            const nuevaMatriz = matriz.map(fila =>
                fila.map(celda => ({
                    ...celda,
                    imagen: `https://picsum.photos/seed/${Math.random()}/200`,
                    fade: true, // Agregar la clase de "fade"
                }))
            );
            setMatriz(nuevaMatriz);
        }, 5000); // intervalo de 5 segundos
        return () => clearInterval(intervalId);
    }, [matriz]);

    // Agregar la clase "fade" a la imagen de cada celda antes de cambiar la imagen
    const handleImageLoad = (filaIndex, celdaIndex) => {
        const nuevaMatriz = matriz.map((fila, i) =>
            fila.map((celda, j) => {
                if (i === filaIndex && j === celdaIndex) {
                    return {
                        ...celda,
                        fade: false, // Remover la clase de "fade"
                    };
                } else {
                    return celda;
                }
            })
        );
        setMatriz(nuevaMatriz);
    };

    return (
        <Container>
            <div className="matriz">
                {matriz.map((fila, i) => (
                    <div key={i} className="fila">
                        {fila.map((celda, j) => (
                            <div key={j} className="celda">
                                <img
                                    className={celda.fade ? 'fade' : ''}
                                    src={celda.imagen}
                                    alt={`Imagen ${i}-${j}`}
                                    onLoad={() => handleImageLoad(i, j)}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Container>
    );
}
export default ExampleId


export const Container = styled.div`
display: grid;
width: 100%;
height: 100vh;
place-items: center;
place-content: center;
.matriz {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fila {
  display: flex;
}

.celda {
  width: 200px;
  height: 200px;
  margin: 5px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 2rem;
  overflow: hidden;
}

.celda img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.5s ease;
  transform:scale(1);
  transition:all 1s;
}
.celda img:hover{
    transform:scale(1.3);

}
.celda img.fade {
  opacity: 0;
}

  
`;
