import React from "react";
import { BOTTOM_HEIGHT } from "../../utills";
import { Icon } from "@iconify/react";
import Bottom from "./Bottom";
import ImgSlide from "./ImgSlide";

function Home() {
    return (
        <>
            <div
                className="header"
                style={{ width: 390, marginTop: 44, overflow: "hidden" }}
            >
                <Icon icon="mdi-light:magnify" />
                <Icon icon="mdi-light:menu" />
            </div>

            <div className="body" style={{ width: 390, height: 1900 }}>
                <h1>Suggested survey for you</h1>
                <ImgSlide />
                <h1>Now trending 🔥</h1>
                <ImgSlide />
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
