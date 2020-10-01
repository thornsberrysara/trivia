import React from "react";

const Result = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">Score: {score} / 10</div>
    <div className="play-again">
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
    </div>
  </div>
);

export default Result;
