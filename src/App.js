import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // Set up state
    this.state = {
      scores: [
        {
          id: 1,
          name: "alice",
          score: 1001
        },
        {
          id: 2,
          name: "jeff",
          score: 20
        },
        {
          id: 3,
          name: "stan",
          score: 500
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Scoreboard App</h1>
        <div className="score-container">{this._scoresAsCards()}</div>
      </div>
    );
  }

  _scoresAsCards() {
    const cards = this.state.scores.map(score => {
      return (
        <div key={score.id}>
          <h2>
            Name: {score.name}, Score: {score.score}
          </h2>
          <button
            onClick={() => {
              this._incrementScoreById(score.id);
            }}
          >
            +
          </button>
        </div>
      );
    });
    return cards;
  }

  // Version 1: using .map and manually updating values
  // _incrementScoreById(id) {
  //   // find the player in this.state.scores
  //   // increment the score
  //   const newScores = this.state.scores.map(score => {
  //     if (score.id !== id) {
  //       return score;
  //     } else {
  //       return {
  //         id: score.id,
  //         name: score.name,
  //         score: score.score + 1
  //       };
  //     }
  //   });
  //   // call this.setState
  //   this.setState({
  //     scores: newScores
  //   });
  // }

  // Version 2: using .map and shorthand to copy values from the original
  _incrementScoreById(id) {
    // find player
    // increment score
    const newScores = this.state.scores.map(score => {
      if (score.id !== id) {
        return score;
      } else {
        return {
          ...score,
          score: score.score + 1
        };
      }
    });
    // call setState
    this.setState({
      scores: newScores
    });
  }
}

export default App;
