import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";



function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
 const randomDate = () => `apod?api_key=KMacZdIarL5RiK4YQbg2ypnayh0fDPPCvqVU7uLq&date=201${getRandomInt(2,8)}-0${getRandomInt(1,9)}-${getRandomInt(0,2)}${getRandomInt(1,8)}`;

const Photo = ({limit}) => {
    const [photo, setPhoto] = useState([]);
    const [date, setDate] = useState('apod?api_key=KMacZdIarL5RiK4YQbg2ypnayh0fDPPCvqVU7uLq&date=2015-05-24');
    const [Name, setClassName] = useState('dropdown');
   
    console.log(randomDate);
    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/${date}`)
         
          .then(response => {
               console.log(response);
            const NasaPhoto = response.data;
            console.log(NasaPhoto);
            setPhoto(NasaPhoto);
          })
      }, [date])

    



      return (
          <div className="photo-container">

           
               <button className= {Name}   onMouseOver={() => setClassName("dropdown-menu")} onMouseLeave= {()=> setClassName("dropdown")} 
               onClick={() => setDate(randomDate())} >New Day!</button>
            
          
               <PhotoCard data = {photo} />
         

           
          </div>
      );

}






export default Photo;