import hand from '../Assets/hand.png'
import heart from '../Assets/heart-img.png'
import './Top.css'
function Top(){
    return(
        <div className="top">
            <div className="top-content">
                <img className='hand' src={hand}/>
                <div className="top-left-heart">
                    <img src={heart}/>
                </div>
            </div>
            <div className="top-right">
               <p>Contact Us</p>
            </div>
        </div>
    )
}
export default Top;