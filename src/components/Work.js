 import './Work.css';
 import WorkData from "./WorkData"
 import  serviceswedding1 from "../assests/serviceswedding1.jpg"
 import  servicesbabyshower1 from "../assests/servicesbabyshower1.jpg"
 import  servicesstudio from "../assests/servicesstudio.jpg"
 import  servicesevent1 from "../assests/servicesevent1.jpg"


function Work(){
    return(
        <div className="work">
            <h1>"DIIMPLE'S PHOTOGRAPHY RECENT WORK"</h1>
            <p>DIIMPLE'S PHOTOGRAPHY OFFERS A VARIETY OF SERVICES:</p>
            <div className='workcard'>
            <WorkData
            image={serviceswedding1}
            heading="WEDDING-PHOTOSHOOT"
            text= ".LOTS OF LOVE AND BEYOND."
            />

           <WorkData
            image={servicesbabyshower1}
            heading="BABYSHOWER-PHOTOSHOOT"
            text= ".A NEW JOURNEY AWAITS."
            />


             <WorkData
            image={servicesstudio}
            heading="PERSONAL-PHOTOSHOOT"
            text= ".INDIVIDUAL APPEARANCE."
            />
            
             <WorkData
            image={servicesevent1}
            heading="EVENT-PHOTOSHOOT"
            text= ".ENLESS MEMORIES."
            />
        
            </div>
        </div>
    )
}

export default Work;