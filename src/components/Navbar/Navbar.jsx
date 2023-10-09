// rafce arrow
import { coData } from '../../data/coData';
import { Logo } from './Logo';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


import NavbarStyles from '/src/styles/NavbarStyles/Navbar.module.css'

const Navbar = () => {
  
  return (
    <>
      <div className={NavbarStyles.container}>
      <div className={NavbarStyles.wrapper}>
        <div className={NavbarStyles.left}> 
          <div className={NavbarStyles.logoContainer}>
            <Logo />
          </div>
        </div>
        <div className={NavbarStyles.center}>
          <h1 className={NavbarStyles.title}>{coData.title}</h1>
        </div>
        <div className={NavbarStyles.right}>
          <div className={NavbarStyles.menu}>
            <MenuRoundedIcon style={{ fontSize: 50 }}/>
          </div>       
        </div>
      </div>
    </div>

    <div className={NavbarStyles.container}>
      <div className={NavbarStyles.wrapper}>
        <div className={NavbarStyles.left}> 
          <span className={NavbarStyles.language}>EN</span> 
          <div className={NavbarStyles.searchContainer}>
            <SearchIcon className={NavbarStyles.search} color="action"/>
            <input type="text" className={NavbarStyles.input}/>           
          </div>
        </div>
        <div className={NavbarStyles.right}>
          <div className={NavbarStyles.menu}>REGISTER</div>
          <div className={NavbarStyles.menu}>SIGN IN</div>
          <div className={NavbarStyles.menu}>
            <Badge badgeContent={4} color="success">
              <ShoppingCartOutlinedIcon className={NavbarStyles.cart}  color="action"/>
            </Badge>
          </div>      
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Navbar

