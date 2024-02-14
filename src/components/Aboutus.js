import"./Aboutus.css";
import aboutimage3 from "../assests/aboutimage3.jpg"


function Aboutus(){
    return(
     <div className="about-container">
        <h1>"ALL ABOUT DIIMPLE'S PHOTOGRAPHY"</h1>
        <p>All about Diimple's photography: Diimples's </p>
        <p>photography began on the 20th of October 2020.</p>
        
        <p>The founder for this Photography business is</p>
         <p>TIRO JUNIOR MAKUTONE from Naledi "Soweto"</p>
          <p>Diimple's Photography is a business that</p>
           <p> provides client with high quality pictures</p>
            <p>at a reasonable price EST in the heart of Soweto.</p>
        
          <p>Diimple's Photography is a art of capturing light</p>
            <p>via a Digital sensor or film to create an image.</p>
          
          <p>With Diimple's Photography it focuses on the Art,</p>
             <p>Application, and practice of creating images by recording light.</p>
          
          <p>Photography is not just taking pictures it also images by recording light.</p>
              <p>What happens is: Diimple's photography helps us communicate</p>
          
          <p>It also helps us share our memories with others</p>
            <p>Diimple's photography shares emotion , it tells a</p>
            <p>story and also captures personality between loved ones</p>
            <br/>
             <div className="image">
            <img alt="img" src={aboutimage3}/>
            </div>
            </div>
    )
}


export default Aboutus;