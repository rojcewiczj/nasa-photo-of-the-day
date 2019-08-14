import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";


const Photo = ({limit}) => {
    const [photo, setPhoto] = useState([]);
    const [date, setdate] = useState();
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomDate = `${Math.floor((Math.random() * 10) + 1)}`
    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=KMacZdIarL5RiK4YQbg2ypnayh0fDPPCvqVU7uLq${date}`)
         
          .then(response => {
               console.log(response);
            const NasaPhoto = response.data;
            console.log(NasaPhoto);
            setPhoto(NasaPhoto);
          })
      }, [date])
      return (
          <div className="photo-container">
           {/* <button onClick={() => setDate("date")}>{viewingDate}</button>*/}
               <PhotoCard data = {photo} />
         

           
          </div>
      );

}






export default Photo;