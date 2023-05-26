import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const responsive = {
    mobile: {
        breakpoint: { max: 1000, min: 0 },
        items: 2.2,
    },
};

const ImgSlide = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Carousel responsive={responsive}>
                <div
                    onClick={() => navigate("/survey")}
                    className="bg-slide1 flex justify-between flex-col"
                    style={{
                        maxWidth: "100%",
                        marginRight: "5px",
                        height: "150px",
                    }}
                >
                    <div className="text-text1 p-3 text-lg">
                        If I were an angel,<br></br> I would be...
                    </div>
                    <div className="flex justify-between bg-white h-5 ">
                        <div className="flex">
                            <div>SBT</div>
                            <div className="w-4 h-4 bg-gray rounded-full mt-1 ml-2"></div>
                        </div>
                        <div>BLANK 10</div>
                    </div>
                </div>
                <div
                    onClick={() => navigate("/survey")}
                    className="bg-slide2 flex justify-between flex-col"
                    style={{
                        maxWidth: "100%",
                        marginRight: "5px",
                        height: "150px",
                    }}
                >
                    <div className=" p-3 text-lg mt-auto">
                        Which hamburger<br></br>
                        brand am I?
                    </div>
                    <div className="flex justify-between bg-white h-5 ">
                        <div className="flex">
                            <div>SBT</div>
                            <div className="w-4 h-4 bg-gray rounded-full mt-1 ml-2"></div>
                        </div>
                        <div>BLANK 10</div>
                    </div>
                </div>

                <div
                    onClick={() => navigate("/survey")}
                    className="bg-slide3 flex justify-between flex-col"
                    style={{
                        maxWidth: "100%",
                        marginRight: "5px",
                        height: "150px",
                    }}
                >
                    <div className="text-white p-3 text-lg">
                        Which Kpop <br></br>
                        group am I?
                    </div>
                    <div className="flex justify-between bg-white h-5 ">
                        <div className="flex">
                            <div>SBT</div>
                            <div className="w-4 h-4 bg-gray rounded-full mt-1 ml-2"></div>
                        </div>
                        <div>BLANK 10</div>
                    </div>
                </div>

                <div
                    onClick={() => navigate("/survey")}
                    className="bg-slide4 flex justify-between flex-col"
                    style={{
                        maxWidth: "100%",
                        marginRight: "5px",
                        height: "150px",
                    }}
                >
                    <div className="text-text2 p-3 text-lg mt-auto">
                        Samsung<br></br>
                        Survey
                    </div>
                    <div className="flex justify-between bg-white h-5 ">
                        <div className="flex">
                            <div>SBT</div>
                            <div className="w-4 h-4 bg-gray rounded-full mt-1 ml-2"></div>
                        </div>
                        <div>BLANK 10</div>
                    </div>
                </div>

                <div
                    onClick={() => navigate("/survey")}
                    className="bg-slide5 flex justify-between flex-col"
                    style={{
                        maxWidth: "100%",
                        marginRight: "5px",
                        height: "150px",
                    }}
                >
                    <div className="text-text3 p-3 text-lg">
                        Which Kpop <br></br>
                        group am I?
                    </div>
                    <div className="flex justify-between bg-white h-5 ">
                        <div className="flex">
                            <div>SBT</div>
                            <div className="w-4 h-4 bg-gray rounded-full mt-1 ml-2"></div>
                        </div>
                        <div>BLANK 10</div>
                    </div>
                </div>

                <div
                    onClick={() => navigate("/survey")}
                    className="bg-slide6 flex justify-between flex-col"
                    style={{
                        maxWidth: "100%",
                        marginRight: "5px",
                        height: "150px",
                    }}
                >
                    <div>
                        Samsung<br></br>
                        Survey
                    </div>
                    <div className="flex justify-between bg-white h-5 ">
                        <div className="flex">
                            <div>SBT</div>
                            <div className="w-4 h-4 bg-gray rounded-full mt-1 ml-2"></div>
                        </div>
                        <div>BLANK 10</div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default ImgSlide;
