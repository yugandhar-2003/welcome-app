import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClickedButton: false}

  toggleButton = () => {
    this.setState(prevState => ({isClickedButton: !prevState.isClickedButton}))
  }

  render() {
    const {isClickedButton} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button type="button" className="buttons" onClick={this.toggleButton}>
          {isClickedButton ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
