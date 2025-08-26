import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import TestQuestion from "./components/TestQuestion.jsx";
import StartQuiz from "./components/StartQuiz.jsx";
import QuizResults from "./components/QuizResults.jsx";
import StartPage from "./components/StartPage.jsx";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuizStarted: false,
            questionNumber: 0,
            userAnswers: [],
            showResults: false,
            chooseQuiz: null,
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.stopQuiz = this.stopQuiz.bind(this);
        this.tryAgain = this.tryAgain.bind(this);
        this.chooseQuiz = this.chooseQuiz.bind(this);
    }

    startQuiz() {
        this.setState({
            isQuizStarted: true,
        });
    }

    nextQuestion() {
        if (
            this.state.questionNumber !==
            this.quizes[this.state.chooseQuiz].questions.length - 1
        ) {
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

    chooseQuiz(index) {
        this.setState({
            chooseQuiz: index,
            questionNumber: 0,
            userAnswers: [],
            showResults: false,
        });
    }

    quizes = [
        {
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
        },
        {
            quizName: "CSS test",
            quizDescription: "Test your CSS knowledge",
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
        },
    ];

    render() {
        return (
            <>
                <Header />
                <main>
                    {this.state.chooseQuiz === null ? (
                        <StartPage
                            quizes={this.quizes}
                            chooseQuiz={this.chooseQuiz}
                        />
                    ) : this.state.isQuizStarted ? (
                        <TestQuestion
                            questionId={
                                this.quizes[this.state.chooseQuiz].questions[
                                    this.state.questionNumber
                                ].questionId
                            }
                            questionText={
                                this.quizes[this.state.chooseQuiz].questions[
                                    this.state.questionNumber
                                ].questionText
                            }
                            answers={
                                this.quizes[this.state.chooseQuiz].questions[
                                    this.state.questionNumber
                                ].answers
                            }
                            correctAnswer={
                                this.quizes[this.state.chooseQuiz].questions[
                                    this.state.questionNumber
                                ].correctAnswer
                            }
                            nextQuestion={this.nextQuestion}
                            previousQuestion={this.previousQuestion}
                            stopQuiz={this.stopQuiz}
                            count={
                                this.quizes[this.state.chooseQuiz].questions
                                    .length
                            }
                            time={this.quizes[this.state.chooseQuiz].time}
                        />
                    ) : this.state.showResults ? (
                        <QuizResults
                            info={this.quizes[this.state.chooseQuiz]}
                            results={this.state.userAnswers}
                            tryAgain={this.tryAgain}
                        />
                    ) : (
                        <StartQuiz
                            name={this.quizes[this.state.chooseQuiz].quizName}
                            description={
                                this.quizes[this.state.chooseQuiz]
                                    .quizDescription
                            }
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
