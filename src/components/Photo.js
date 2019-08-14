import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";


const Photo = ({limit}) => {
    const [photo, setPhoto] = useState([]);
    
    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod`)
          .then(response => {
            const NasaPhoto = response.data.message;
            console.log(NasaPhoto);
            setPhoto(NasaPhoto);
          });
      }, []);
      return (
          <div className="photo-container">

          </div>
      );

}






export default Photo;