import react from "react"
import '../Styles.css'
import Fuji from "../assets/Mount FUJI pagoda view.jpg"
import {TbMapPin} from "react-icons/tb"


export default function Card(props){
    return(
        <card className="card-component">
            <div className="image-div">
                <img 
                className="image"
                src={props.img} 
                alt="Fuji image"
                />
            </div>
            <div className="info-div">
                <div className="first-info-row">
                    <TbMapPin className="map-pin"/>
                    <h3 className="country">{props.country}</h3>
                    <a className="googlemaps-link"
                    href="https://goo.gl/maps/aUwtvLQrW1tDY2Ue8">view on google maps</a>
                </div>
                <div className="second-info-row">
                    <h1>{props.title}</h1>
                    <h1 className="date">{props.date}</h1>
                </div>
                <div className="paragraph-row">
                    <p>{props.paragraph}</p>
                </div>
            </div>
        </card>

        
    )
}