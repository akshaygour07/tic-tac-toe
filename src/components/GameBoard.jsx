export default function GameBoard({ onSelect, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelect(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleBoardButton(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//       const newBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
//       newBoard[rowIndex][colIndex] = activePlayerSymbol;
//       return newBoard;
//     });
//     onSelect();
//   }
