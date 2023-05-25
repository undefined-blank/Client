import React, { useState } from "react";
import "./Modal.css";
import { Icon } from "@iconify/react";
import "./../../img/save.png";

export default function Modal() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
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
                                    onClick={toggleModal}
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
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
