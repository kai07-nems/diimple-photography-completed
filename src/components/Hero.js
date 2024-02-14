import "./Hero.css";



function Hero(props){
    return(<>
     <div className={props.cName}>
     <img alt="Heroimage" src={props.heroImage}/>

     </div>
     <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p>
        <button>SCROLL-DOWN</button>
        
        
    
        
        
     </div>
     
     
    </>);
 }
 
 
 export default Hero;