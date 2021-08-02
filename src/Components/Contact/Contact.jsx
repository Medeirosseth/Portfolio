import React from 'react'
import "./Contact.scss"

export default function Contact() {
  //const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="contact" id="contact">
      <div className="left">

      </div>

      <div className="right">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button onClick={handleSubmit} type="submit">Send</button>

        </form>
      </div>
    </div>
  )
}
