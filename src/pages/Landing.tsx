import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [imgIndex, setImgIndex] = useState<number>(0)
  const sampleImages = [
    '/img/example1.png',
    '/img/example2.png',
    '/img/example3.png'
  ]
  const sampleTexts = [
    'Easy',
    'Healthy',
    'Delicious'
  ]
  const increaseIndex = () => {
    if (imgIndex >= 2) {
      setImgIndex(0)
    } else {
      setImgIndex(imgIndex + 1)
    }
  }

  useEffect(() => {
    const counter = setInterval(increaseIndex, 5000)
    return () => { clearInterval(counter) }
  }, [imgIndex])

  return (
    <div className="container">
      <div className="landing">
        <div className="text-box">
          <h1>간단하게 조리가능한 다양한 레시피</h1>
          <h4>
            먹고 싶은 레시피가 궁금하다면? <br />
            1000여 가지의 맛있는 음식을 가득 담아 두었습니다.
          </h4>
          <Link to="/explore/all/1">
            <button>Explore</button>
          </Link>
        </div>
  
        <div className="text-slider">
          <h5>Make Your Food</h5>
          {sampleTexts.map((item, index) => {
            return (
              <div
                key={index}
                className={imgIndex === index ? "selected" : ""}
                onClick={() => setImgIndex(index)}
              >
                {item}
              </div>
            )
          })}
        </div>
  
        {sampleImages.map((item, index) => {
          return (
            imgIndex === index
              ? <img key={index} src={item} alt={`sample${index}`} />
              : ""
          )
        })}
      </div>
    </div>
  );
};

export default Landing;
