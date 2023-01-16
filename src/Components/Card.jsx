import react from "react"
import '../Styles.css'
import Fuji from "../assets/Fuji.png"


export default function Card(props){
    return(
        <card>
            <div>
                <img 
                className="image"
                src={Fuji} 
                alt="Fuji image"
                />
            </div>
        </card>

        
    )
}