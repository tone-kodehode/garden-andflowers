// rafce arrow

import { Title } from './Title';
import { Logo } from './Logo';
//import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
//import Badge from '@mui/material/Badge';
import { CartButton } from '../../components/Button/CartButton';

import { GardenAndFlowersNavLink } from '../../routes/NavLink';
import { FlowersNavLink } from '../../routes/NavLink';
import { PlantersNavLink } from '../../routes/NavLink';
import { UtilitiesNavLink } from '../../routes/NavLink';
import { GardenBlogNavLink } from '../../routes/NavLink';
import { AboutNavLink } from '../../routes/NavLink';


import NavbarStyles from '/src/styles/NavbarStyles/Navbar.module.css'

const Navbar = () => {
  
  return (
    < div className='main'>
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
              <CartButton />
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
            <GardenAndFlowersNavLink />
          </div>
          <div className={NavbarStyles.menuLink}>
            <FlowersNavLink />
          </div>
          <div className={NavbarStyles.menuLink}>
            <PlantersNavLink />
          </div>
          <div className={NavbarStyles.menuLink}>
            <UtilitiesNavLink />
          </div>
          <div className={NavbarStyles.menuLink}>
            <GardenBlogNavLink />
          </div>
          <div className={NavbarStyles.menuLink}>
            <AboutNavLink />
          </div>          
        </div>
      </div>
    </div>

    
    </div>
    
  )
}

export default Navbar

