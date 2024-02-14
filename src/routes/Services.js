import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import firstpic from "../assests/firstpic.jpg"
import Footer from "../components/Footer";
import Work from "../components/Work";


function Services(){
    return(
     <>
       <Navbar/>
    <Hero
    cName ="hero-mid"
    heroImage ={firstpic}
    title ="SERVICES"
    
    />
    <Work/>
     <Footer/>
     </>
    )
 }
 
 
 export default Services;