import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
// import pink from "./../../img/pink.png";
const images = [
    { url: './../../img/1.png' },
    { url: './../../img/2.png' },
    { url: './../../img/3.png' },
    { url: './../../img/4.png' },
    // { url: "images/5.jpg" },
    // { url: "images/6.jpg" },
    // { url: "images/7.jpg" },
];

const ImgSlide = () => {
    return (
        <div>
            <SimpleImageSlider
                width={390}
                height={137}
                left={21}
                top={342}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
};

export default ImgSlide;
