import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    mobile: {
        breakpoint: { max: 1000, min: 0 },
        items: 2.2,
    },
};

const ImgSlide = () => {
    return (
        <div>
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
        </div>
    );
};

export default ImgSlide;
