import JoinUsStyles from '../../styles/FormStyles/JoinUs.module.css'

export const JoinUsForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form data submitted:  ')
  }

  return (
    <div className={JoinUsStyles.container}>
      <h1 className={JoinUsStyles.title}>
        Join Us
      </h1>
      <div className={JoinUsStyles.description}>
        Become an Garden & Flowers <b>Plus member</b> for perks. 
        Priority access, exclusive sales and purchase bonuse.
        Inspirational news and garden ideas in your inbox.
      </div>
      <form className={JoinUsStyles.formContainer}
        onSubmit={handleSubmit}
      >
        <input 
          className={JoinUsStyles.input} 
          type="text" 
          placeholder='Name' 
        />
        <input 
          className={JoinUsStyles.input} 
          type="text" 
          placeholder='E-mail' 
        />
        <input 
          className={JoinUsStyles.input} 
          type="text" 
          placeholder='Phone Number' 
        />
        <button className={JoinUsStyles.submitButton}
          type="submit"
        >
          Join The Club
        </button>
      </form>
    </div>
  )
}
