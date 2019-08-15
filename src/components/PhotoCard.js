import React from "react";
import { Card, Icon } from 'semantic-ui-react'
const PhotoCard = props => {

return (
    
    <div className="photo-card" key={props.id}>
         <p>{props.data.date}</p>
        <img className = "nasa-photo" alt="photo of the day" src={props.data.url}/>
        <h2>{props.data.title}
        </h2>
        <p>
           {props.data.explanation}
        </p>
       
    </div> 
 
)



}






export default PhotoCard;