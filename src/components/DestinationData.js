 import { Component } from "react";
import "./Destination.css";
//    

 class DestinationData extends Component{
    render(){
        return(
            <div className="first-des">
            <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        <p>{this.props.text2}</p>
        <p>{this.props.text3}</p>
        <br/>
            </div>
            <div className="image">
                <img alt="img" src={this.props.img}/>
            </div>
        </div>
        )
    }
 }
 export default DestinationData;