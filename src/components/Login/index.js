// Write your code here
import './index.css'

const Login = props => {
  const {onClick} = props
  console.log('login clicked')
  return (
    <button className="btn" onClick={onClick} type="button">
      Login
    </button>
  )
}

export default Login
