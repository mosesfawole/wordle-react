import { useState } from "react";
const useWordle = () => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const formatGuess = () => {};
  const addNewGuess = () => {};

  const handleKeyUp = ({ key }) => {
    if (/^[A-Za-z]$\./.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(() => {
          prev;
        });
      }
    }
  };
  return { turn, guesses, history, isCorrect, handleKeyUp };
};

export default useWordle;
