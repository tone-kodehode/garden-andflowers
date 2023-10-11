

import LogInStyles from '../styles/LogInRegister/LogIn.module.css'

export default function LogIn() {
    return (
      <div className={LogInStyles.container}>
        <div className={LogInStyles.formContainer}>
            <h1 className={LogInStyles.title}>Sign In</h1>
            <form className={LogInStyles.form} action="">
                <input className={LogInStyles.input} type="text" placeholder="Username"/>
                <input className={LogInStyles.input} type="text" placeholder="Password" />
                <button className={LogInStyles.logInButton}>Log In</button>
                <a className={LogInStyles.link} href="">Forgot Password?</a>
                <a className={LogInStyles.link} href="">Create A New Account</a>
            </form> 
        </div>
      </div>
    )
  }

//   Trouble logging in
