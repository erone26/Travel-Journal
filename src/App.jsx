import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Styles.css'
import Navbar from "./Components/Navbar"
import Card from './Components/Card'
import Fuji from "./Images/Mount FUJI pagoda view.jpg"
import Annecy from "./Images/Annecy, Cran Gévrier.jpg"
import LacMegantic from "./Images/Lac Mégantic.jpg"




function App() {

  return (
    <div>
      <Navbar/>

      <div className='cards'>
      <Card
      id={1}
      img={Fuji}
      country="日本"
      googleMaps="https://goo.gl/maps/aUwtvLQrW1tDY2Ue8"
      title="Mount Fuji"
      date="2020/01/05"
      paragraph="富士山は、標高3,776メートルと日本の最高峰の山で、すそのが長く美しい姿の円錐状成層火山です。1707年の噴火で中腹に宝永山ができ、以後活動を休止しています。"
      />

      <Card
      id={2}
      img={Annecy}
      country="France"
      googleMaps="https://goo.gl/maps/2xKU5jWoo6qWdSwy6"
      title="Annecy, Cran Gévrier"
      date="2020/01/05"
      paragraph="Annecy is a city in the French alps bordering Switzerland. Known for its beautiful clear lake and huge mountains, it is a treat for outdoor enthousiasts"

      />

      <Card
      id={3}
      img={LacMegantic}
      country="Quebec"
      googleMaps="https://goo.gl/maps/AG9UtQm5jz6Gvsgn9"
      title="Lac Mégantic"
      date="2022/08/27"
      paragraph="Lac Mégantic est une petite ville située à 300km de Montréal. Connue pour ses ciels particulièrement noirs, elle attire les amateurs d’observation d’étoiles"

      />
      </div>
      
    </div>
  )
}

export default App
