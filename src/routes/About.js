import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeimage from "../assests/homeimage.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
import aboutimage3 from "../assests/aboutimage3.jpg"

function About(){
    return(
     <>
      <Navbar/>
    <Hero
    cName ="hero-mid"
    heroImage ={homeimage}
    title ="ABOUT " 
    
    />
    <Aboutus
    image={aboutimage3}
    />
     <Footer/>
     </>
    )
 }
 
 
 export default About;