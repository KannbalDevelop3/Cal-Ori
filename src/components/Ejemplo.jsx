// import React, { useEffect, useState } from 'react';

// function Ejemplo() {
//   const [buttons, setButtons] = useState([
//     { id: 1, status: 'disabled' },
//     { id: 2, status: 'disabled' },
//     { id: 3, status: 'disabled' },
//     { id: 4, status: 'disabled' },
//     { id: 5, status: 'disabled' },
//   ]);
//   const [myArray, setMyArray] = useState([0]);
//   useEffect(() => {
//     if (buttons[0].status === 'disabled') {
//       // Update the status of the next button to enabled
//       const updatedButtons = buttons.map((button, index) => {
//         if (index === 0) {
//           return { ...button, status: 'enabled' };
//         }
//         return button;
//       });
//       setButtons(updatedButtons);
//     }
//   }, [])

//   const handleButtonClick = (buttonIndex) => {
//     console.log('click update');
//     // Check if the clicked button is the last button in the array
//     if (buttonIndex === buttons.length - 1) {
//       return (console.log('Termino'));
//     }
//     // Check if the current button is enabled
//     if (buttons[buttonIndex].status === 'enabled') {
//       // Update the status of the next button to enabled
//       const updatedButtons = buttons.map((button, index) => {
//         if (index === buttonIndex + 1) {
//           return { ...button, status: 'enabled' };
//         }
//         return button;
//       });

//       setButtons(updatedButtons);
//     }
//   };
//   const handleClick = (id) => {
//     let valFinal
//     if (id < myArray.length) {
//       // Si el índice ya existe en el arreglo, actualizamos su valor a 1
//       const newArray = [...myArray];
//       newArray[id] = 1;
//       valFinal = newArray
//       setMyArray(newArray);
//     } else {
//       // Si el índice no existe en el arreglo, creamos nuevas posiciones
//       const newArray = [...myArray];
//       for (let i = myArray.length; i < id; i++) {
//         newArray.push(0);
//       }
//       newArray.push(1);
//       // Si el arreglo supera las 5 posiciones, eliminamos la primera
//       if (newArray.length > 5) {
//         newArray.shift();
//       }
//       valFinal = newArray
//       setMyArray(newArray);
//     }
//     console.log('dentro del clik', valFinal);
//   };
//   useEffect(() => {
//     setMyArray(myArray)
//   }, [myArray])
//   console.log(myArray);
//   return (
//     <div>
//       {buttons.map((button, index) => (
//         <button
//           key={button.id}
//           onClick={() => {handleClick(index) }}
//           // disabled={button.status === 'disabled'}
//         >
//           Button {button.id}
//         </button>
//       ))}
//     </div>
//   );
// }
// export default Ejemplo;


import React, { useState } from 'react'

const Ejemplo = () => {
  const [arrayA, setArrayA] = useState(['1','0','0','0','0','0']);
  const [arrayB, setArrayB] = useState([
    { id: 1, status: 'disabled' },
    { id: 2, status: 'disabled' },
    { id: 3, status: 'disabled' },
    { id: 4, status: 'disabled' },
    { id: 5, status: 'disabled' },
    { id: 6, status: 'disabled' },
  ]);
  const updateArrayB = useCallback(() => {
    const updatedArrayB = arrayB.map((element, index) => {
      if (index === 0 || arrayA[index - 1] !== '1') {
        return element;
      }
      return { status: 'enabled' };
    });
    setArrayB(updatedArrayB);
  }, [arrayA, arrayB]);
  return (
    <div>Ejemplo</div>
  )
}

export default Ejemplo