import { NavLink } from "react-router-dom"


export const GardenAndFlowersNavLink = () => {
  return (
    <>
    <NavLink to="/" 
    style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '600' : '300',})}
    >
      Garden & Flowers
    </NavLink>
    </>
        
  )
}

export const FlowersNavLink = () => {
  return (
    <div>
      <NavLink to="/flowers" 
      style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '600' : '300',})}
      >
          Flowers
      </NavLink>
    </div>
  )
}

export const UtilitiesNavLink = () => {
  return (
    <div>
      <NavLink to="/utilities" 
      style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '600' : '300',})}
      >
          Utilities
      </NavLink>
    </div>
  )
}

export const PlantersNavLink = () => {
  return (
      <NavLink to="/planters" 
      style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '600' : '300',})}
      >
          Planters
      </NavLink>
  )
}


export const GardenBlogNavLink = () => {
  return (
    <div>
      <NavLink to="/gardenblog" 
      style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '600' : '300',})}
      >
          Garden Blog
      </NavLink>
    </div>
  )
}

export const AboutNavLink = () => {
  return (
    <div>
      <NavLink to="/about" 
      style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '600' : '300',})}
      >
          About
      </NavLink>
    </div>
  )
}






  
