import { useState } from "react"
import { Link } from "react-router-dom"


export const CreateAccountLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/createaccount' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Create Account
      </Link>
    </div>
  )
}

export const ForgotPasswordLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
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


export const MyWishlistLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/mywishlist' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        My Wishlist
      </Link>
    </div>
  )
}



export const ContinueShoppingLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '16px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }

  return (
    <div>
      <Link 
        to='/gardenandflowers' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Continue Shopping
      </Link>
    </div>
  )
}



export const ContactLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/contact' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Contact
      </Link>
    </div>
  )
}

export const SignInLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/signin' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Sign In
      </Link>
    </div>
  )
}

export const AboutLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/about' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        About 
      </Link>
    </div>
  )
}

export const GardenBlogLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/gardenblog' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Garden Blog 
      </Link>
    </div>
  )
}

export const GardenAndFlowersLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/gardenandflowers' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Garden & Flowers 
      </Link>
    </div>
  )
}

export const FlowersLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/flowers' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Flowers 
      </Link>
    </div>
  )
}

export const PlantersLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/planters' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Planters 
      </Link>
    </div>
  )
}

export const UtilitiesLink = () => {
  const [isHovered, setIsHovered] = useState(false)

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--DarkColor)',
    cursor: 'pointer',
    textDecoration: isHovered ? 'underline' : 'none',
    fontWeight: isHovered ? '600' : '300',
  }
 
  return (
    <div>
      <Link 
        to='/utilities' 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Utilities 
      </Link>
    </div>
  )
}


