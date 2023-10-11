import JoinUsStyles from '../../styles/FormStyles/JoinUs.module.css'

export const JoinUsForm = () => {
  return (
    <div className={JoinUsStyles.container}>
      <h1 className={JoinUsStyles.title}>Join Us</h1>
      <div className={JoinUsStyles.description}>
        Become an Garden & Flowers <b>Plus member</b> for perks. 
        Priority access, exclusive sales and free Shipping.
        Inspirational news and garden ideas in your inbox.</div>
      <div className={JoinUsStyles.formContainer}>
        <input className={JoinUsStyles.input} type="text" placeholder='E-mail' />
        <input className={JoinUsStyles.input} type="text" placeholder='Phone Number' />
        <button className={JoinUsStyles.submitButton}>
          Join The Club
          </button>
      </div>
    </div>
  )
}
