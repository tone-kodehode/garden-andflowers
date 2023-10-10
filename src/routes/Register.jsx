
export default function Register() {
    return (
      <div className="container">
        <div className="formContainer">
            <h1 className="title">Create An Account</h1>
            <form action="">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="password" />
                <input type="text" placeholder="Confirm Password" />
                <span className="agreement">
                    By creating an account I consent to the processing 
                    of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </span>
                <button className="submit">Create</button>
            </form>
        </div>
      </div>
    )
  }
