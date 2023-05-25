import React from "react";
import { BOTTOM_HEIGHT } from "../../utills";
import { Icon } from "@iconify/react";
import Bottom from "./Bottom";
// import ImgSlide from "./ImgSlide";

function Home() {
    return (
        <>
            <div style={{ display: "flex", borderWidth: 10 }}>
                <div className="header">
                    <Icon icon="mdi-light:magnify" />
                    <Icon icon="mdi-light:menu" />
                </div>
            </div>

            <div className="body" style={{ height: 1900 }}>
                {/* <ImgSlide /> */}
            </div>

            <div className="bottom">
                <Bottom />
            </div>
        </>
    );
}

export default Home;

function BottomItem() {
    return <div></div>;
}
