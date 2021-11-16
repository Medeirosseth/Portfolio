import React from 'react'
import "./Contact.scss"
import emailjs from 'emailjs-com'

export default function Contact() {
  // const [message, setMessage] = useState(false)
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_qqr7i8q', 'template_rxh0c4k', e.target, 'user_QH9vmy0hZZlk4Dz1YE5bY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
      <img src="assets/Devil.jpeg" className="sethPicture" alt="Seth with Flamingos"></img>
      <img src="assets/Sether.png" className="picSeth" alt="Seth green background"/>
      <img src="assets/Seth.png"  className="sethPic" alt="Resume"></img>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={sendEmail} >
          <input type="text" placeholder="Email" name="email" required/>
          <input type="text" placeholder="Name" name="name" required/>
          <textarea placeholder="Message" name="message"></textarea>
          <button onSubmit={sendEmail} type="submit">Send</button>

        </form>
      </div>
    </div>
  )
}