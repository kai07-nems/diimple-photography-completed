import "./Contactform.css";

function Contactform(){
    return(
       <div className="form-container">
        <h1>"SEND A MESSAGE TO US!!"</h1>
        <form>
            <input placeholder="NAME"/>
            <input placeholder="EMAIL"/>
            <input placeholder="CONTACT"/>
            <textarea placeholder="MESSAGE" rows={4}></textarea>
        <button>SEND MESSAGE</button>
        </form>
       </div>
    )
}

export default Contactform;