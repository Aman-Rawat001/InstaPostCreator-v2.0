import React, { useContext } from "react"
import {ImgValue} from "./Designs"


const RightBox = () => {
  let tempImg = ''
  const mainImg = useContext(ImgValue)
  if(mainImg !== undefined){
    tempImg = mainImg
    localStorage.setItem('images', tempImg)
    console.log(tempImg)
  }
  const finalImg = localStorage.getItem('images')


  return(
    <>
          <img src={finalImg} alt="Choose Image Background"/>
    </>
  )
}

export default RightBox;