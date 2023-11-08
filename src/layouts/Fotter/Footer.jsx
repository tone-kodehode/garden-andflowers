import FooterStyles from '../../styles/FooterStyles/Footer.module.css'

import { 
  ContactLink,
  AboutLink,
  SignInLink,
  CreateAccountLink,
  ForgotPasswordLink,
  MyWishlistLink,
  GardenBlogLink,
  GardenAndFlowersLink,
  FlowersLink,
  PlantersLink,
  UtilitiesLink,
} from '../../routes/Link'






export const Footer = () => {
  return (
    <div className='footerBody'>  
    <div className='main'>
    
    <div className={FooterStyles.container}>  
      <div className={FooterStyles.navContainer}>

      <div className={FooterStyles.left}>
        <h4 className={FooterStyles.title}>
          Shop and Learn
        </h4> 
        <div className={FooterStyles.menuLink}>
           <GardenAndFlowersLink />
        </div>
        <div className={FooterStyles.menuLink}>
          <GardenBlogLink />
        </div>
        <div className={FooterStyles.menuLink}>
          <FlowersLink />
        </div>
        <div className={FooterStyles.menuLink}>
          <PlantersLink />
        </div>
        <div className={FooterStyles.menuLink}>
          <UtilitiesLink />
        </div>
      </div>

      <div className={FooterStyles.center}>
        <h4 className={FooterStyles.title}>
          Account
        </h4> 
        <div className={FooterStyles.menuLink}>
          <SignInLink />
        </div>
        <div className={FooterStyles.menuLink}>
          <CreateAccountLink />
        </div>
        <div className={FooterStyles.menuLink}>
          <ForgotPasswordLink />
        </div>
        <div className={FooterStyles.menuLink}>
          <MyWishlistLink />
        </div>         
      </div>
        
      <div className={FooterStyles.right}>
        <h4 className={FooterStyles.title}>
          Connect
        </h4>  
        <div className={FooterStyles.menuLink}>
          <ContactLink />
        </div>
        <div className={FooterStyles.menuLink}>
          <AboutLink />
        </div>
        <div className={FooterStyles.menuLink}>
             
        </div>          
      </div>

      </div>  
    </div >
      
    <div className={FooterStyles.fotterBanner} >
      <h6>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati nihil aspernatur quia ab magni adipisci placeat mollitia quas fugiat. Excepturi ipsum delectus animi debitis maiores officia, ad possimus necessitatibus tenetur rerum quod eos dolor architecto, esse ullam, nisi beatae molestias facilis! Provident doloribus, nostrum qui distinctio sit voluptatibus cum!</h6>
    </div>
    
  </div>
  </div>
  )
}
