import { useEffect, useState } from "react";
import Square from "./Square";
import "./index.css";

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(clearState);
  const [isXChance, updateIsXChance] = useState(false);

  function onUserClicked(index) {
    let strings = Array.from(gameState);

    if (strings[index]) return;
    strings[index] = isXChance ? "0" : "X";
    updateIsXChance(!isXChance);
    updateGameState(strings);
  }

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      setTimeout(() => alert(`${winner} 🎉won the Game!`), 0);
      updateGameState(clearState);
    }
    // eslint-disable-next-line
  }, [gameState]);

  return (
    <div className="app-header">
      <p className="heading-text">Tic Tac Toe</p>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          onClick={() => onUserClicked(0)}
          state={gameState[0]}
        />
        <Square
          className="b-bottom-right"
          onClick={() => onUserClicked(1)}
          state={gameState[1]}
        />
        <Square
          className="b-bottom"
          onClick={() => onUserClicked(2)}
          state={gameState[2]}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          onClick={() => onUserClicked(3)}
          state={gameState[3]}
        />
        <Square
          className="b-bottom-right"
          onClick={() => onUserClicked(4)}
          state={gameState[4]}
        />
        <Square
          className="b-bottom"
          onClick={() => onUserClicked(5)}
          state={gameState[5]}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-right"
          onClick={() => onUserClicked(6)}
          state={gameState[6]}
        />
        <Square
          className="b-right"
          onClick={() => onUserClicked(7)}
          state={gameState[7]}
        />
        <Square onClick={() => onUserClicked(8)} state={gameState[8]} />
      </div>
      <button
        className="clear-button"
        onClick={() => updateGameState(clearState)}
      >
        Clear Game
      </button>
    </div>
  );
}

export default App;
