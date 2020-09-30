import React, { Component } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Container from "./components/Container";
import Result from "./components/Result";

class App extends Component {
  state = {
    questions: [],
    score: 0,
    responses: 0
  };

  getQuestions = () => {
    Questions().then(question => {
      this.setState({
        questions: question
      });
    });
  };

  checkAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  };

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="App">
        <h1>How I Met Your Mother Trivia</h1>
        {this.state.questions.length > 0 &&
          this.state.responses < 5 &&
          this.state.questions.map(({ question, answers, correct, id }) => (
            <Container
              question={question}
              options={answers}
              key={id}
              selected={answer => this.checkAnswer(answer, correct)}
            />
          ))}
        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
    );
  }
}

export default App;
