import React, { Component } from "react";
import styles from "../styles/base/components/app.module.scss";

export class QuizResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correctCount: 0,
        };
    }
    componentDidMount() {
        this.props.info.questions.forEach((question, i) => {
            question.correctAnswer === this.props.results[i] &&
                this.setState((prev) => ({
                    correctCount: prev.correctCount + 1,
                }));
        });
    }

    render() {
        return (
            <div>
                <h2>{this.props.info.quizName}</h2>
                <p>
                    Result: {this.state.correctCount} /{" "}
                    {this.props.info.questions.length}
                </p>
                <div>
                    {this.props.info.questions.map((question, i) => (
                        <div key={i}>
                            {question.questionText}
                            <ul>
                                {question.answers.map((answer, j) => (
                                    <li
                                        key={j}
                                        className={
                                            this.props.results[i] === answer &&
                                            question.correctAnswer === answer
                                                ? styles.correct
                                                : this.props.results[i] ===
                                                      answer &&
                                                  question.correctAnswer !==
                                                      answer
                                                ? styles.wrong
                                                : ""
                                        }
                                    >
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <button
                    onClick={this.props.tryAgain}
                    className="btn btn-primary m-2"
                >
                    Try again
                </button>
            </div>
        );
    }
}

export default QuizResults;
