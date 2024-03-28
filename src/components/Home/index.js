// Write your code here
import {Component} from 'react'
import './index.css'

import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'

class Home extends Component {
  state = {isLoggedIn: false}

  onchangeStatus = () => {
    const {isLoggedIn} = this.state
    this.setState({isLoggedIn: !isLoggedIn})
  }

  render() {
    const {isLoggedIn} = this.state
    console.log(this.state)
    return (
      <div className="container">
        <div className="bg-container">
          {isLoggedIn && <Message message="Welcome User" />}
          {!isLoggedIn && <Message message="Please Login" />}
          {isLoggedIn && <Logout onClick={this.onchangeStatus} />}
          {!isLoggedIn && <Login onClick={this.onchangeStatus} />}
        </div>
      </div>
    )
  }
}

export default Home
