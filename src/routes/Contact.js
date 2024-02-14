import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";


function Contact(){
    return(
     <>
        <Navbar/>
    <Hero
    cName ="hero-mid"
    heroImage ="https://images.unsplash.com/photo-1563906267088-b029e7101114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
    title ="CONTACT"
    
    
    />
    <Contactform/>     
    <Footer/>
     </>
    )
 }
 
 
 export default Contact;