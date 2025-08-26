import React, { Component } from "react";
import styles from "../styles/base/components/startQuiz.module.scss";


export class StartQuiz extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <button className="btn btn-primary m-2" onClick={() => this.props.startQuiz()}>Start</button>
            </div>
        );
    }
}


export default StartQuiz;