import React, { Component } from "react";
import s from "../styles/base/components/header.module.scss";

export default class Header extends Component {
    render() {
        return (
            <header>
                <img src="./logo.png" alt="logo" className={s.logo} />
                <h1>RoboQuiz</h1>
            </header>
        );
    }
}
