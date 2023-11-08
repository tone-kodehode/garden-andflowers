
import SignInStyles from '../../styles/FormStyles/SignIn.module.css'
import { CreateAccountLink } from '../../routes/Link'
import { ForgotPasswordLink } from '../../routes/Link'

export const SignInForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form data submitted:  ')
  }
  return (
    <div className={SignInStyles.container}>
      <div className={SignInStyles.formContainer}>
          <h1 className={SignInStyles.title}>
            Sign in to Garden & Flowers
          </h1>
          <form className={SignInStyles.form} action=""
            onSubmit={handleSubmit}
          >
              <input 
                className={SignInStyles.input} 
                type="text" 
                placeholder="Username"
              />
              <input 
                className={SignInStyles.input} 
                type="text" 
                placeholder="Password" 
              />
              <button className={SignInStyles.logInButton}
                type="submit"
              >
                Sign In
              </button>
              <div className={SignInStyles.link}>
                <ForgotPasswordLink />
              </div>
              <div className={SignInStyles.link}>
                <CreateAccountLink />
              </div>
              
          </form> 
      </div>
    </div>
  )
}

