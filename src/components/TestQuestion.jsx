import React, { Component } from "react";
import s from "../styles/base/components/app.module.scss";
export class TestQuestion extends Component {
    constructor(props) {
        super(props);
        this.addAnswer = this.addAnswer.bind(this);
        this.state = {
            userAnswers: [],
            time: this.props.time,
        };
        this.addAnswer = this.addAnswer.bind(this);
    }
    addAnswer(e) {
        this.setState((prev) => {
            prev.userAnswers[this.props.questionId - 1] = e.target.value;
            return prev;
        });
    }

    componentDidMount() {
        console.log(`Question #${this.props.questionId} mounted`);
        this.indervalId = setInterval(() => {
            this.setState((prev) => ({ ...prev, time: prev.time - 1 }));
        }, 1000);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.questionId !== this.props.questionId) {
            document.querySelectorAll(".form-check input").forEach((input) => {
                input.checked =
                    this.state.userAnswers[this.props.questionId - 1] ===
                    input.value;
            });
        }
        if (this.state.time <= 0) {
            this.props.stopQuiz(this.state.userAnswers);
        }
    }

    componentWillUnmount() {
        clearInterval(this.indervalId);
    }

    render() {
        return (
            <div className={s.question}>
                <h2>
                    Question #{this.props.questionId}: {this.props.questionText}
                </h2>
                <div className={s.buttons}>
                    <button
                        className={s.button}
                        onClick={() => this.props.previousQuestion()}
                        disabled={this.props.questionId === 1}
                    >
                        Previous
                    </button>
                    <button
                        className={s.button}
                        onClick={() => this.props.nextQuestion()}
                        disabled={this.props.questionId === this.props.count}
                    >
                        Next
                    </button>
                    <button
                        className={s.button + " " + s.stop}
                        onClick={() =>
                            this.props.stopQuiz(this.state.userAnswers)
                        }
                    >
                        Stop Quiz
                    </button>
                </div>
                <ul className="form-check">
                    {this.props.answers.map((answer, index) => (
                        <li key={index}>
                            <input
                                type="radio"
                                id={`answer${index + 1}`}
                                name="answer"
                                value={answer}
                                onChange={this.addAnswer}
                            />
                            <label htmlFor={`answer${index + 1}`}>
                                {answer}
                            </label>
                        </li>
                    ))}
                </ul>
                <progress
                    value={this.state.userAnswers.length}
                    max={this.props.count}
                    style={{ width: "100%" }}
                ></progress>
                <p className="card-text">Time: {this.state.time}</p>
            </div>
        );
    }
}

export default TestQuestion;
