
import RegistrerStyles from '../../styles/FormStyles/Registrer.module.css'

export const RegisterForm = () => {

    return (
      <div className={RegistrerStyles.container}>
        <div className={RegistrerStyles.formContainer}>
            <h1 className={RegistrerStyles.title}>Create An Account</h1>
            <form action="" className={RegistrerStyles.form}>
                <input className={RegistrerStyles.input} type="text" placeholder="Name"/>
                <input className={RegistrerStyles.input} type="text" placeholder="Last Name" />
                <input className={RegistrerStyles.input} type="text" placeholder="Username" />
                <input className={RegistrerStyles.input} type="text" placeholder="E-mail" />
                <input className={RegistrerStyles.input} type="text" placeholder="Password" />
                <input className={RegistrerStyles.input} type="text" placeholder="Confirm Password" />
                <span className={RegistrerStyles.agreement}>
                    By creating an account I consent to the processing 
                    of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </span>
                <button className={RegistrerStyles.registerButton}>Create</button>
            </form>
        </div>
      </div>
    )
}