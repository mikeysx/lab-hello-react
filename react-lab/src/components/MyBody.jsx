import pic1 from '../images/icon1.png';
import pic2 from '../images/icon2.png';
import pic3 from '../images/icon3.png';
import pic4 from '../images/icon4.png';

function MyBody (){
    return (
        <div className="boxes">
            <div>
            <img src={pic1} className="pic1" alt="pic1" /> 
            <h4>Declarative</h4>
            <p>hey whats up i hope ur doing good, its like wednesday and u have survived half of the week already</p>
            </div>
            <div>
            <img src={pic2} className="pic1" alt="pic2" /> 
            <h4>Components</h4>
            <p>hang in there buddy u almost got this, just a little push and you'll have a three day weekend, sounds awesome right?</p>
            </div>
            <div>
            <img src={pic3} className="pic1" alt="pic3" />   
            <h4>Singlewat</h4>
            <p>anyway, just make sure you take some time for yourself also, just so you dont get crazy during this process</p>
            </div>
            <div>
            <img src={pic4} className="pic1" alt="pic4" />    
            <h4>JSX</h4>
            <p>breaks and 'me time' are super important. just like with the gym, they say its as important to go and hit it hard, as it is to have a rest day and just sleep and eat</p>
            </div>

        </div>
    )
}

export default MyBody