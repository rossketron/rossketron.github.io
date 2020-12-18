import React from 'react'
import * as emailjs from 'emailjs-com'
import styles from './contact-form.module.css'

const toName = "Ross Ketron"
const toEmail = "yodaross22@gmail.com"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message"
    }
  }

    render() {
      return (
        <div>
        <form className={styles.form}>      
          <input name="name" type="text" className={styles.feedbackinput} required placeholder="Name" />   
          <input name="email" type="text" className={styles.feedbackinput} required placeholder="Email" />
          <input name="subject" type="text" className={styles.feedbackinput} required placeholder="Subject" />
          <textarea name="text" className={styles.feedbackinput, styles.textarea} required placeholder="Message"></textarea>
          <input type="submit" className={styles.submit} value="SUBMIT"/>
        </form>
        </div>
      )
    }
  }

  export default ContactForm;