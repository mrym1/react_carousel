import React, { useState, useEffect } from "react";
import { EastOutlined } from "@mui/icons-material";
import { WestOutlined } from "@mui/icons-material";
import "./carousel.scss";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    function interval() {
        setTimeout(
          () =>
            setCurrentSlide(
              (prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1),
              // currentSlide === 0 ? 3 : (prev) => prev - 1
            ),
          5000
        );
    }
    interval();
  }, [currentSlide]);

  const data = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="carousel">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((image, currentSlide) => (
          <img key={currentSlide} src={image} alt="..." />
        ))}

        {/* <img src={data[0]} alt="..." />
        <img src={data[1]} alt="..." />
        <img src={data[2]} alt="..." /> */}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
