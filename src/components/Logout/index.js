// Write your code here
import './index.css'

const Logout = props => {
  const {onClick} = props
  return (
    <button className="btn" onClick={onClick} type="submit">
      Logout
    </button>
  )
}

export default Logout
