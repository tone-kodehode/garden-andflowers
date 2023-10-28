// rafce arrow


import { Logo } from './Logo';
import { SearchButton } from '../../components/Button/SearchButton';
import { CartButton } from '../../components/Button/CartButton';
import { SignInButton } from '../../components/Button/SignInButton';

import { 
  GardenAndFlowersNavLink,
  FlowersNavLink,
  PlantersNavLink,
  UtilitiesNavLink,
  GardenBlogNavLink,
  AboutNavLink,
} from '../../routes/NavLink';





import NavbarStyles from '/src/styles/NavbarStyles/Navbar.module.css'

const Navbar = () => {
  
  return (
    < div className='main'>
    <div className={NavbarStyles.container}>
      <div className={NavbarStyles.navContainer}>
        <div className={NavbarStyles.left}> 
          
          
        </div>
        
        
      </div>
    </div>


    <div className={NavbarStyles.container}>
      <div className={NavbarStyles.navContainer}>
        <div className={NavbarStyles.left}> 
        <div className={NavbarStyles.menuLink}>
            <Logo />
          </div>
        </div>
        <div className={NavbarStyles.center}>
          {/* <div className={NavbarStyles.menu}>REGISTER</div>
          <div className={NavbarStyles.menu}>SIGN IN</div> */}
          {/* <span className={NavbarStyles.language}>EN</span>  */}

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
        
        <div className={NavbarStyles.right}>
        
          
          <div className={NavbarStyles.menuLink}>
            <SearchButton />
        </div>
          <div className={NavbarStyles.menuLink}>
              <CartButton />
        </div>
        <div className={NavbarStyles.menuLink}>
              <SignInButton />
        </div>          
        </div>
      </div>
    </div>

    
    </div>
    
  )
}

export default Navbar

