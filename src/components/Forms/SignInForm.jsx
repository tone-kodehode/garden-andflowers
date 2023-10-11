
import SignInStyles from '../../styles/FormStyles/SignIn.module.css'

export const SignInForm = () => {
    return (
      <div className={SignInStyles.container}>
        <div className={SignInStyles.formContainer}>
            <h1 className={SignInStyles.title}>Sign In</h1>
            <form className={SignInStyles.form} action="">
                <input className={SignInStyles.input} type="text" placeholder="Username"/>
                <input className={SignInStyles.input} type="text" placeholder="Password" />
                <button className={SignInStyles.logInButton}>Log In</button>
                <a className={SignInStyles.link} href="">Forgot Password?</a>
                <a className={SignInStyles.link} href="">Create A New Account</a>
            </form> 
        </div>
      </div>
    )
  }

//   Trouble logging in