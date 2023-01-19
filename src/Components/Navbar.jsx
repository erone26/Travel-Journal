import react from "react"
import '../Styles.css'
import {GiEarthAmerica} from "react-icons/gi"

export default function Navbar(){
    return(
        <nav className="navbar">
            <span className="navbar-div">
                <GiEarthAmerica className="earth-icon"/>
                <h3 className="navbar-text">Beautiful places I have visited.</h3>
            </span>
            
        </nav>
    )
} 