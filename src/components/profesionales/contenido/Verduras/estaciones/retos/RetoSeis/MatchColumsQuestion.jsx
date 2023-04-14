import React, { useState, useEffect } from "react";
import useSound from 'use-sound';
import "./assets/css/reto-seis.css";
import ConfettiGif from 'components/Reutilizable/ConfettiGif';

const MatchColumsQuestion = ({
  answer,
  question,
  questionId,
  correctAnswers,
  setCorrectAnswers,
  colorInput
}) => {
  const [acert] = useSound('https://bucket-kannbal-ac.s3.amazonaws.com/correct.mp3');
  const [noAcert] = useSound('https://bucket-kannbal-ac.s3.amazonaws.com/incorrect.mp3');
  const [lifes, setLifes] = useState(2);
  const [disable, setDisable] = useState(false);
  const [animation, setAnimation] = useState("");
  const [confetti, setConfetti] = useState(false);

  const timeout = setTimeout(() => {
    setAnimation("");
  }, 1000);

  const handleChange = (e) => {
    if (e.target.value.toUpperCase() === answer || lifes === 0) {
      //Suena el sonido incorrecto hasta que se ingrese la letra correcta
      if(e.target.value.toUpperCase() === answer){
        acert();
        estadoConfetti()
        setTimeout(() => {
          clearConfetti()
        }, 4000);
      }else{
        noAcert();
      }
      e.target.value = answer;
      setDisable(true);
      let correctAnswersNumber = correctAnswers;
      correctAnswersNumber++;
      setCorrectAnswers(correctAnswersNumber);
    } else {
      noAcert();
      setAnimation("incorrect-seis");
      timeout;
      clearTimeout(timeout);
      setLifes(lifes - 1);
      e.target.value = "";
    }
  };

  const estadoConfetti = () => {
    setConfetti(true)
  }
  const clearConfetti = () => {
      setConfetti(false)
  }
  useEffect(() => {
    setConfetti(confetti)
  }, [confetti]);

  return (
    <label className={`respuesta ${animation}`}>
      {confetti && <ConfettiGif />}
      <input
        type="text"
        name={questionId}
        autoComplete='off'
        id={questionId}
        onChange={handleChange}
        disabled={disable}
        className="input-pregunta"
        style={{backgroundColor: colorInput}}
      />
      <span className="texto-pregunta-pro">{question}</span>
    </label>
  );
};

export default MatchColumsQuestion;
