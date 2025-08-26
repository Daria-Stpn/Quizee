import React, { Component } from "react";
import styles from "../styles/base/components/startPage.module.scss";


export class StartPage extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <h1>Choose your quiz</h1>
                <div className={styles.cards}>
                    {this.props.quizes.map((quiz, i) => (
                        <div key={i} className={styles.card}>
                            <h3>{quiz.quizName}</h3>
                            <p>{quiz.quizDescription}</p>
                            <button
                                className="btn btn-primary m-2"
                                onClick={() => this.props.chooseQuiz(i)}
                            >
                                Start
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


export default StartPage;