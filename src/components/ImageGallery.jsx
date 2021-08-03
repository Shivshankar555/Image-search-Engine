import React from "react";
import { getImages, getSearchedImages } from "../api/Api";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import "../app.js";



function ImageGallery({query}) {

   
  const [imgList, setImgList] = useState([]);

  /* perform side effects in the given function component
      this effect will be shown by default. 
  */

  useEffect(() => {
    getImages().then((data) => {
      setImgList(data);
    });
  }, []);

  /*
    this effect will be in effect when user input in searchbox
  */ 

  useEffect(async ()=>{
    if (query.trim() === "") {
        return;
      }
    const data = await getSearchedImages(query).then();
      setImgList(data);
  },[query])

  return (
    
    <div> 

         {/* If user does not give any input */}
        {imgList.length === 0 ? <h2>No images found</h2> : null} 

      <div class="container">
        <div class="row">
          <div class="col ">
            {imgList.map((img) => {  /* map method is used to show each and every elements */
              return (
                
                <img
                 src={img.urls.small} key={img.id} 
                class="rounded myImage" id="img1" alt="..."
                onClick={
                    // Function to increase image size
                  function enlargeImg() {
                    // Set image size to 1.5 times original
                    img1.style.transform = "scale(1.5)";
                    // Animation effect 
                    img1.style.transition = "transform 0.25s ease";
                  }
                }
                
                /> 
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
