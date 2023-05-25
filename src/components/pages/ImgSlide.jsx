import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
    },
};

const ImgSlide = () => {
    return (
        <div>
            <Carousel responsive={responsive}>
                <div style={{ width: 155, height: 116 }}>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
        </div>
    );
};

export default ImgSlide;
