import React from "react";
import Carousel from "../components/carousel";

const Lookbook = () => {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return <Carousel slides={slides} />;
};

export default Lookbook;
