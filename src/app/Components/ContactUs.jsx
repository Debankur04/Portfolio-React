import React from 'react'
import styles from '../Styles/ContactUs.module.css';

const ContactUs = () => {
  return (
    <>
    <div className={styles.formcontainer}>
        <div className={styles.form}>
            <span className={styles.heading}>Get in touch</span>
            <input placeholder="Name" type="text" className={styles.input} />
            <input placeholder="Email" id="mail" type="email" className={styles.input} />
            <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" className={styles.textarea}></textarea>
            <div className={styles.buttoncontainer}>
            <div className={styles.sendbutton}>Send</div>
            <div className={styles.resetbuttoncontainer}>
                <div id="reset-btn" className={styles.resetbutton}>Reset</div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ContactUs