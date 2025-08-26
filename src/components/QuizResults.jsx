import React, { Component } from "react";




export class QuizResults extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>
                    Result: {this.props.result} / {this.props.count}
                </p>
                <button onClick={this.props.tryAgain}>Try again</button>
            </div>
        );
    }
}


export default QuizResults;