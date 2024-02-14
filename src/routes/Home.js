import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Footer from "../components/Footer";




function Home(){
   return(
    <>
    <Navbar/>
    <Hero
    cName ="hero"
    heroImage ="https://images.unsplash.com/photo-1588290957812-ae74d9e17288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5JTIwY2FtZXJhfGVufDB8fDB8fHww"
    title = "WELCOME TO DIIMPLE'S OFFICIAL PHOTOGRAPHY WEBSITE"
    text ="...CREATIVITY TAKES COURAGE... "
    text2 = "...VISION BEYOND THE LENS..."
    text3= "...CAPTURING THE BEAUTY OF YOUR JOURNERY..."
    url ="/"
    />
    <Destination/>
    <Work/>
    <Footer/>
    </>
   )
}


export default Home;