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
} from '../../routes/NavLink';


import NavbarStyles from '/src/styles/NavbarStyles/Navbar.module.css'

const Navbar = () => {
  
  return (
    <div className='main'>

    <div className={NavbarStyles.container}>
      <div className={NavbarStyles.navContainer}>
        <div className={NavbarStyles.left}> 
          <Logo />
        </div>
        
        <div className={NavbarStyles.center}>
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

