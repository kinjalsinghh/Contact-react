import location from '../Assets/location-icon.png'
import phone from '../Assets/phn-icon.png'
import email from '../Assets/email-icon.png'
import './Bottom.css'
function Bottom(){
    return(
        <div className="bottom">
            <div className="bottom-content">
            <div className="bottom-left">
              <p className="heading1">Let's talk with us</p>
              <p className="heading2">Questions, comments, or suggestions? Simply<br/> fill in the form and we’ll be in touch shortly.</p>
              <div className="point">
                <img src={location}/>
                <p>1055 Arthur ave Elk Groot, 67.<br/> New Palmas South Carolina.</p>
              </div>
              <div className="point">
                <img src={phone}/>
                <p>+1 234 678 9108 99</p>
              </div>
              <div className="point">
                <img src={email}/>
                <p>Contact@moralizer.com</p>
              </div>
              </div>
              <div className="bottom-right">
                <form>
                    <div className="name">
                      <input type="text" placeholder='First name*'/>
                      <input type="text" placeholder='Last name*'/>
                    </div>
                    <input type="text" placeholder='Email*'/>
                    <input type="text" placeholder='Phone Number*'/>
                    <textarea type="text "rows="8" cols="4" placeholder="Your message..."></textarea>
                    <button>Send message</button>
                </form>
              </div>
            </div>
        </div>
    )
}
export default Bottom;