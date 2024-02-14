import './Destination.css'
import DestinationData from './DestinationData'
import aboutimage2 from "../assests/aboutimage2.jpg"



const Destination = ()=>{
    return(
        <div className="destination">
            <h1>"WHERE THE EYES MEET THE LENS"</h1>
            <br/>
            <p>~CAPTURING MEMOMENTS, CREATING MEMEORIES~</p>
            
             <br/>
    
            <DestinationData
            heading ="~DIIMPLE'S PHOTOGRAPHY~"
            text= "`TAKING PICTURES IS SAVORING LIFE INTENSELY,"
            text2= "EVERY HUNDREDTH OF A SECOND PHOTOGRAPHY IS A"
            text3= "PICTURE PAINTED BY THE SUN WITHOUT INSTRUCTION IN ART``"
            img= {aboutimage2}
            />
                </div>
            
            
        

    )
}

export default Destination