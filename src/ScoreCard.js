import React from "react";

function ScoreCard(props) {
  return (
    <div className="card">
      <h2>
        Name: {props.name}, Score: {props.score}
      </h2>
      <button
        onClick={() => {
          props.handleInc(props.id);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.handleDec(props.id);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          props.handleReset(props.id);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ScoreCard;
