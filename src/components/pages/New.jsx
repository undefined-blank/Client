import React, { useState } from "react";
// import Modal from "../Modal/Modal";
import "./Modal.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Frame from "./../../img/Frame27.png";

function New() {
    const [modal, setModal] = useState(true);
    const toggleModal = () => {
        setModal(!modal);
    };
    const navigate = useNavigate();
    const closeBtn = () => {
        navigate("/home");
    };
    return (
        <>
            <button className="btn-modal" onClick={toggleModal}>
                open
            </button>

            {modal && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <div className="flex justify-between border-b-4 border-lightgray-500">
                            <div className="p-4 text-3xl font-bold">
                                Create New
                            </div>
                            <div className="flex p-4 text-3xl mt-2 ">
                                <Icon
                                    icon="iconamoon:close-thin"
                                    onClick={closeBtn}
                                />
                                <Icon icon="mdi-light:check" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    style={{
                                        width: 350,
                                        height: 55,
                                        padding: 20,
                                    }}
                                    className="p-2 border-b-2 border-lightgray-500"
                                    placeholder="Write the title here"
                                ></input>
                            </div>
                            <div className="border-b-4">
                                <input
                                    style={{
                                        width: 350,
                                        height: 167,
                                        padding: 20,
                                    }}
                                    placeholder="Anythink you want to write"
                                ></input>
                            </div>
                            <div className="tabvar p-4">
                                <button className="tab text-md font-semibold mr-3 text-dashboardGray">
                                    Survey
                                </button>
                                <button className="tab activate text-md font-semibold  border-b-2">
                                    Test
                                </button>
                            </div>
                            <p>
                                We are providing only MBTI test for now, but
                                planning to
                                <br />
                                diversify the types of tests in the near future.
                                <br />
                                You need to write down the proper questions to
                                <br />
                                distinguich E/I, N/S, F/T, P/J, and prepare 16
                                images for
                                <br />
                                each MBTI.
                            </p>
                            <img
                                src={Frame}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            />
                            E vs I
                            <ul style={{ width: 314 }}>
                                <li>Option1</li>
                                <li>Option2</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <input
                            style={{
                                width: 350,
                                height: 55,
                                padding: 20,
                            }}
                            className="p-2 border-b-2 border-lightgray-500"
                            placeholder="Write the title here"
                        ></input>
                    </div>
                </div>
            )}
        </>
    );
}

export default New;
