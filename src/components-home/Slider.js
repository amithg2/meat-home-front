import React, { createRef} from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Slider({ images }) {
  const slideRef = createRef();

  const properties = {
    duration: 4500,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    canSwipe: false,
    cssClass: ".one",
  };

  const makeRandArray = (arr) => {
    const arrB = [...arr];
    const newArr = [];
    for (let i = 0; i < 12; i++) {
      const rand = Math.floor(Math.random() * arrB.length);
      newArr.push(arrB.splice(rand, 1));
    }
    return newArr;
  };

  const randImagesArray = makeRandArray(images);
  return (
    <Slide ref={slideRef} {...properties}>
      {randImagesArray.map((each, index) => (
        <img src={each} key={index} alt="" />
      ))}
    </Slide>
  );
}

export default Slider;
