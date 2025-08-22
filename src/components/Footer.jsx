import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>&copy; {new Date().getFullYear()} RoboQuiz</footer>
    )
  }
}
