import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";


const Photo = ({limit}) => {
    const [photo, setPhoto] = useState([]);
    
    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=KMacZdIarL5RiK4YQbg2ypnayh0fDPPCvqVU7uLq`)
         
          .then(response => {
               console.log(response);
            const NasaPhoto = response.data;
            console.log(NasaPhoto);
            setPhoto(NasaPhoto);
          })
      }, [])
      return (
          <div className="photo-container">
          
               <PhotoCard data = {photo} />
         

           
          </div>
      );

}






export default Photo;