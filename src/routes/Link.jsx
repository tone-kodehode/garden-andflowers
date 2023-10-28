import { useState } from "react"
import { Link } from "react-router-dom"


export const CreateAccountLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '12px',
    color: 'var(--Blue)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : 'normal',
  }
 
  return (
    <div>
      <Link 
        to='/createaccount' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Create A New Account
      </Link>
    </div>
  )
}

export const ForgotPasswordLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '12px',
    color: 'var(--Blue)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : 'normal',
  }
 
  return (
    <div>
      <Link 
        to='/forgotpassword' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Forgot Password?
      </Link>
    </div>
  )
}
