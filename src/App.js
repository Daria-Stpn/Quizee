import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TestQuestion from "./components/TestQuestion.jsx";
import StartQuiz from "./components/StartQuiz.jsx";
import QuizResults from "./components/QuizResults.jsx";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuizStarted: false,
            questionNumber: 0,
            userAnswers: [],
            showResults: false,
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.stopQuiz = this.stopQuiz.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
    }

    startQuiz() {
        this.setState({
            isQuizStarted: true,
        });
    }

    nextQuestion() {
        if (this.state.questionNumber !== this.quiz1.questions.length - 1) {
            this.setState({
                questionNumber: this.state.questionNumber + 1,
            });
        }
    }

    previousQuestion() {
        if (this.state.questionNumber > 0) {
            this.setState({
                questionNumber: this.state.questionNumber - 1,
            });
        }
    }

    tryAgain() {
        this.setState({
            isQuizStarted: false,
            questionNumber: 0,
            userAnswers: [],
            showResults: false,
        });
    }

    stopQuiz(answers) {
        this.setState({
            isQuizStarted: false,
            userAnswers: answers,
            showResults: true,
        });
    }

    quiz1 = {
        quizName: "HTML test",
        quizDescription: "Test your HTML knowledge",
        time: 300,
        questions: [
            {
                questionId: 1,
                questionText: "Which tag is used for styling?",
                answers: ["h1", "style", "script", "input"],
                correctAnswer: "style",
            },
            {
                questionId: 2,
                questionText: "Which tag",
                answers: ["h2", "s", "script", "input"],
                correctAnswer: "script",
            },
        ],
    };

    render() {
        return (
            <>
                <Header />
                <main>
                    {this.state.isQuizStarted ? (
                        <TestQuestion
                            questionId={
                                this.quiz1.questions[this.state.questionNumber]
                                    .questionId
                            }
                            questionText={
                                this.quiz1.questions[this.state.questionNumber]
                                    .questionText
                            }
                            answers={
                                this.quiz1.questions[this.state.questionNumber]
                                    .answers
                            }
                            correctAnswer={
                                this.quiz1.questions[this.state.questionNumber]
                                    .correctAnswer
                            }
                            nextQuestion={this.nextQuestion}
                            previousQuestion={this.previousQuestion}
                            stopQuiz={this.stopQuiz}
                            count={this.quiz1.questions.length}
                            time={this.quiz1.time}
                        />
                    ) : this.state.showResults ? (
                        <QuizResults
                            name={this.quiz1.quizName}
                            result={this.state.userAnswers.length}
                            count={this.quiz1.questions.length}
                            tryAgain={this.tryAgain}
                        />
                    ) : (
                        <StartQuiz
                            name={this.quiz1.quizName}
                            description={this.quiz1.quizDescription}
                            startQuiz={this.startQuiz}
                        />
                    )}
                </main>
                <Footer />
            </>
        );
    }
}

export default App;
