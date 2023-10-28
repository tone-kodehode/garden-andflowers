
import CreateAccountStyles from '../../styles/FormStyles/CreateAccount.module.css'

export const CreateAccount = () => {

    return (
      <div className={CreateAccountStyles.container}>
        <div className={CreateAccountStyles.formContainer}>
            <h1 className={CreateAccountStyles.title}>Create An Account</h1>
            <form action="" className={CreateAccountStyles.form}>
                <input className={CreateAccountStyles.input} type="text" placeholder="Name"/>
                <input className={CreateAccountStyles.input} type="text" placeholder="Last Name" />
                <input className={CreateAccountStyles.input} type="text" placeholder="Username" />
                <input className={CreateAccountStyles.input} type="text" placeholder="E-mail" />
                <input className={CreateAccountStyles.input} type="text" placeholder="Password" />
                <input className={CreateAccountStyles.input} type="text" placeholder="Confirm Password" />
                <span className={CreateAccountStyles.agreement}>
                    By creating an account I consent to the processing 
                    of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </span>
                <button className={CreateAccountStyles.registerButton}>Create</button>
            </form>
        </div>
      </div>
    )
}