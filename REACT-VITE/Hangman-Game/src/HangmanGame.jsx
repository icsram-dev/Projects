import React, { useEffect, useState } from "react";
import Pictures from "./Pictures";
import Popup from "./Popup";

export default function HangmanGame() {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const fruits = ["apple", "peach", "strawberry", "banana", "pineapple"];

  const [word, setWord] = useState("");
  const [corrects, setCorrects] = useState([]);
  const [fails, setFails] = useState([]);
  const [status, setStatus] = useState("");

  const randomizeWord = () =>
    setWord(fruits[Math.floor(Math.random() * fruits.length)].toUpperCase());

  const reset = () => {
    randomizeWord();
    setCorrects([]);
    setFails([]);
    setStatus("");
  };

  useEffect(() => reset(), []);

  useEffect(() => {
    if (
      corrects.length &&
      word.split("").every((letter) => corrects.includes(letter))
    ) {
      setStatus("win");
    }
  }, [corrects, word]);

  useEffect(() => {
    if (fails.length === 10) {
      setStatus("lost");
    }
  }, [fails]);

  const onGuess = (letter) => {
    if (word.includes(letter)) {
      setCorrects((prev) => [...prev, letter]);
    } else {
      setFails((prev) => [...prev, letter]);
    }
  };

  const maskWord = word
    .split("")
    .map((letter) => (corrects.includes(letter) ? letter : "_"))
    .join("");

  const firstRow = letters.slice(0, 10);
  const secondRow = letters.slice(10, 20);
  const thirdRow = letters.slice(20);

  return (
    <div>
      <p className="mask">{maskWord}</p>
      <div className="hangmanContainer">
        <div>
          <div>
            {firstRow.map((letter, index) => (
              <button
                disabled={corrects.includes(letter) || fails.includes(letter)}
                onClick={() => onGuess(letter)}
                key={index}
              >
                {letter}
              </button>
            ))}
          </div>

          <div>
            {secondRow.map((letter, index) => (
              <button
                disabled={corrects.includes(letter) || fails.includes(letter)}
                onClick={() => onGuess(letter)}
                key={index}
              >
                {letter}
              </button>
            ))}
          </div>

          <div>
            {thirdRow.map((letter, index) => (
              <button
                disabled={corrects.includes(letter) || fails.includes(letter)}
                onClick={() => onGuess(letter)}
                key={index}
              >
                {letter}
              </button>
            ))}
          </div>

          <Pictures fails={fails.length} />
        </div>
        <Popup status={status} word={word} reset={reset} />
      </div>
    </div>
  );
}
