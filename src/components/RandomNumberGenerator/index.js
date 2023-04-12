import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    const newNumber = Math.ceil(Math.random() * 100)
    this.setState({number: newNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.generateNumber}
            type="button"
            className="generate-button"
          >
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
