import React, { Component } from "react";
import s from "../styles/base/components/app.module.scss";
export class TestQuestion extends Component {
    render() {
        return (
            <div className={s.question}>
                <h2>
                    Question #{this.props.questionId}: {this.props.questionText}
                </h2>
                <div className={s.buttons}>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.props.previousQuestion()}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.props.nextQuestion()}
                    >
                        Next
                    </button>
                    <button
                        className={"btn btn-secondary m-2 " + s.stop}
                        onClick={() => this.props.stopQuiz()}
                    >
                        Stop Quiz
                    </button>
                </div>
                <ul>
                    {this.props.answers.map((answer, index) => (
                        <li key={index}>
                            <input
                                type="radio"
                                id={`answer${index + 1}`}
                                name="answer"
                                value={answer}
                            />
                            <label htmlFor={`answer${index + 1}`}>
                                {answer}
                            </label>
                        </li>
                    ))}
                </ul>
                <button className={s.button}>Submit</button>
            </div>
        );
    }
}

export default TestQuestion;
