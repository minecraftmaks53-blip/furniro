import { Link } from 'react-router'
import './contact.css'

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero__overlay">
          <img src="/public/Frame 168.svg" alt="Funiro logo" className="contact-hero__logo" />
          <h1>Contact</h1>
          <div className="contact-hero__crumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <section className="contact-main">
        <h2>Get In Touch With Us</h2>
        <p className="contact-main__desc">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className="contact-main__grid">
          <div className="contact-info">
            <div className="contact-info__item">
              <span className="contact-info__icon">A</span>
              <div>
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="contact-info__item">
              <span className="contact-info__icon">P</span>
              <div>
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="contact-info__item">
              <span className="contact-info__icon">T</span>
              <div>
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <label>
              Your name
              <input type="text" placeholder="Abc" />
            </label>

            <label>
              Email address
              <input type="email" placeholder="Abc@def.com" />
            </label>

            <label>
              Subject
              <input type="text" placeholder="This is an optional" />
            </label>

            <label>
              Message
              <textarea placeholder="Hi! i'd like to ask about" />
            </label>

            <button type="button">Submit</button>
          </form>
        </div>
      </section>

      <section className="contact-benefits">
        <div className="contact-benefit">
          <span className="contact-benefit__icon">T</span>
          <div>
            <h4>High Quality</h4>
            <p>crafted from top materials</p>
          </div>
        </div>

        <div className="contact-benefit">
          <span className="contact-benefit__icon">O</span>
          <div>
            <h4>Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>
        </div>

        <div className="contact-benefit">
          <span className="contact-benefit__icon">U</span>
          <div>
            <h4>Free Shipping</h4>
            <p>order over 150 $</p>
          </div>
        </div>

        <div className="contact-benefit">
          <span className="contact-benefit__icon">Q</span>
          <div>
            <h4>24 / 7 Support</h4>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>
    </section>
  )
}
