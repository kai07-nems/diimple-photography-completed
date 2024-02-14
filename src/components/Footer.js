import './Footer.css'


const Footer=()=>{
    return(
        <div className="footer">
            <div className="top"></div>
            <div>
                <br/>
                <br/>
                <br/>
                <h1>DIIMPLE'S PHOTOGRAPHY</h1>
                <p>CREATIVITY TAKES COURAGE</p>
                <br/>
                <br/>
            </div>
            <div className="top"> 
            <a href='/'>
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href='/'>
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href='/'>
                <i className="fa-brands fa-twitter-square"></i>
            </a>
            </div> 

            <div className='bottom'>
                <div>
                    <h4>PROJECT</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All versions</a>
                </div>
                <div>
                    <h4>COMMUNITY</h4>
                    <a href='/'>Github</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Project</a>
                    <a href='/'>Twitter</a>
                </div>
                <div>
                    <h4>HELP</h4>
                    <a href='/'>Support</a>
                    <a href='/'>Troubleshooting</a>
                    <a href='/'>Contact Us</a>
                    
                </div>
                <div>
                    <h4>OTHERS</h4>
                    <a href='/'>Terms of Services</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>
                    
                </div>
                
            </div>



        </div>
    )
}

export default Footer