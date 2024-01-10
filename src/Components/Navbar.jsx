import '../Components/Navbbar.css'
import Elonimage from '../assets/ElonPng.png'
function Navbar () {
    return ( 
        <>
        <div>
            <h1>سلام ، اینجا میتونی همه ی پول های <span className='purpletxt'>ایلان ماسک</span> رو خرج کنی !!!</h1>
            <img
            src={Elonimage} // Replace with your image URL
            className="customImageSize" // Apply the class
            />
        </div>
        </>
     );
}

export default Navbar ;