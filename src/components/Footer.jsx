import React, { Component } from 'react'
import  "../styles/base/components/footer.module.scss";
export default class Footer extends Component {
  render() {
    return (
      <footer>&copy; {new Date().getFullYear()} RoboQuiz</footer>
    )
  }
}
