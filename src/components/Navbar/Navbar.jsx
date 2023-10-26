// rafce arrow

import { NavLink } from 'react-router-dom';
import { Title } from './Title';
import { Logo } from './Logo';
//import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
//import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


import NavbarStyles from '/src/styles/NavbarStyles/Navbar.module.css'

const Navbar = () => {
  
  return (
    <>
    <div className={NavbarStyles.container}>
      <div className={NavbarStyles.navContainer}>
        <div className={NavbarStyles.left}> 
          {/* <span className={NavbarStyles.language}>EN</span>  */}
          
        </div>
        
        <div className={NavbarStyles.right}>
          <div className={NavbarStyles.menu}>REGISTER</div>
          <div className={NavbarStyles.menu}>SIGN IN</div>
             
        </div>
      </div>
    </div>

      <div className={NavbarStyles.container}>
      <div className={NavbarStyles.navContainer}>
        <div className={NavbarStyles.left}> 
          <div className={NavbarStyles.logoContainer}>
            <Logo />
          </div>
          {/* <div className={NavbarStyles.searchContainer}>
            <SearchIcon className={NavbarStyles.search} color="action"/>
            <input type="text" className={NavbarStyles.input}/>           
          </div> */}
        </div>
        <div className={NavbarStyles.center}>
          <Title className={NavbarStyles.title}/>
        </div>
        <div className={NavbarStyles.right}>
        <div className={NavbarStyles.menu}>
          <NavLink to="/cart">
            {/* <Badge badgeContent={4} color="success"> */}
              <ShoppingCartOutlinedIcon className={NavbarStyles.cart}  color="action"/>
            {/* </Badge> */}
          </NavLink>
          </div>  
          {/* <div className={NavbarStyles.menu}>
            <MenuRoundedIcon style={{ fontSize: 50 }}/>
          </div>        */}
        </div>
      </div>
    </div>

    <div className={NavbarStyles.container}>
      <div className={NavbarStyles.navContainer}>
        <div className={NavbarStyles.left}> 

        <span className={NavbarStyles.language}>EN</span>

        <div className={NavbarStyles.searchContainer}>
            <SearchIcon className={NavbarStyles.search} color="action"/>         
          </div>   
        </div>
        
        <div className={NavbarStyles.right}>
          <div className={NavbarStyles.menuLink}>
            <NavLink to="/" 
            style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '500' : '300',})}
            >
              Garden & Flowers
            </NavLink>
          </div>
          <div className={NavbarStyles.menuLink}>
            <NavLink to="/flowers" 
            style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '500' : '300',})}
            >
              Flowers
            </NavLink>
          </div>
          <div className={NavbarStyles.menuLink}>
            <NavLink to="/gardenblog" 
            style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '500' : '300',})}
            >
              Garden Blog
            </NavLink>
          </div>
          <div className={NavbarStyles.menuLink}>
            <NavLink to="/planters" 
            style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '500' : '300',})}
            >
              Planters
            </NavLink>
          </div>
          <div className={NavbarStyles.menuLink}>
            <NavLink to="/utilities" 
            style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '500' : '300',})}
            >
              Utilities
            </NavLink>
          </div>
          <div className={NavbarStyles.menuLink}>
            <NavLink to="/about" 
            style={({ isActive }) => ({color: isActive ? '#345959' : '#01090a', fontWeight: isActive ? '500' : '300',})}
            >
              About
            </NavLink>
          </div>          
        </div>
      </div>
    </div>

    
    </>
    
  )
}

export default Navbar

