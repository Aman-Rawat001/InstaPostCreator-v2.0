import { createContext, useState } from "react";
import React from "react";
import RightBox from "./RightBox"


const ImgValue = createContext()

// Sample/Demo images
import demoImg1 from "./images/demo-img-1.jpg"
import demoImg2 from "./images/demo-img-2.jpg"
import demoImg3 from "./images/demo-img-3.jpg"
import demoImg4 from "./images/demo-img-4.jpg"
import demoImg5 from "./images/demo-img-5.jpg"
import demoImg6 from "./images/demo-img-6.jpg"
import demoImg7 from "./images/demo-img-7.jpg"
import demoImg8 from "./images/demo-img-8.jpg"


const Designs = () => {

  
  // using hooks for image alteration on click
  const [mainImg, setMainImg] = useState();

  const [selectedImages, setSelectedImages] = useState([]);

  const imageHandleChange = (event) => {
    
    if (event.target.files) {
      const fileArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log(fileArray);

      setSelectedImages((prevImages) => prevImages.concat(fileArray));
      Array.from(event.target.files).map((file) => URL.revokeObjectURL(file));
    }

  };
  const renderPhotos = (source) => {
    return source.map((photo) => {
      // console.log(photo)

      const setPhoto = () => {
          setMainImg(photo);
      }
      return (
       <button onClick={setPhoto}> <img className="selected_images" src={photo} key={photo} alt="image1" /></button>
      );
    });
  };

  return (
    <>
      <div className="left">
        <div className="demo-images">
          <button onClick={()=>{
           setMainImg(demoImg1)
          }}><img className="selected_images" src={demoImg1} alt="demo-image1" /></button>

          <button onClick={()=>{
            setMainImg(demoImg2)
          }}><img className="selected_images" src={demoImg2} alt="demo-image2" /></button>
          <button onClick={()=>{
            setMainImg(demoImg3)
          }}><img className="selected_images" src={demoImg3} alt="demo-image3" /></button>
          <button onClick={()=>{
            setMainImg(demoImg4)
          }}> <img className="selected_images" src={demoImg4} alt="demo-image4" /></button>
          <button onClick={()=>{
            setMainImg(demoImg5)
          }}> <img className="selected_images" src={demoImg5} alt="demo-image5" /></button>
           <button onClick={()=>{
            setMainImg(demoImg6)
          }}><img className="selected_images" src={demoImg6} alt="demo-image6" /></button>
          <button onClick={()=>{
            setMainImg(demoImg7)
          }}> <img className="selected_images" src={demoImg7} alt="demo-image7" /></button>
           <button onClick={()=>{
            setMainImg(demoImg8)
          }}><img className="selected_images" src={demoImg8} alt="demo-image8" /></button>
          <div className="image_selector"></div>

          
          <div>
            <input className="choose-file-btn"
              onChange={imageHandleChange}
              type="file"
              multiple
              id="file"
            />
          </div>
         <div className="result">{renderPhotos(selectedImages)}</div>
        </div>
      </div>

      {/* Right Section */}
      <ImgValue.Provider value={mainImg}>
      <div class="split right">
        <div class="centered">
        <RightBox />
        </div>
        </div>
        </ImgValue.Provider>
    </>
  );
};

export default Designs;
export {ImgValue};