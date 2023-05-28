import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Frame from "./../../img/Frame27.png";
import "./Modal.css";

export default function CreateModal({isOpen, toggleModal}) {
    const closeBtn = () => {
        toggleModal();
    };

    return (
        <>
            {
                isOpen ? (
            <>
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className="modal-header flex py-4 px-4 justify-between border-b-4 border-[#f2f2f2] items-center">
                        <div className="flex text-3xl">
                            <Icon
                                icon="iconamoon:close-thin"
                                onClick={closeBtn}
                            />
                        </div>
                        <div className="text font-semibold">
                            Create New
                        </div>
                        <button className="">
                            save
                        </button>
                    </div>
                    <div className="description px-4">
                        <div className="">
                            <input
                                className="w-full pl-2 py-3 border-b-2 font-semibold"
                                placeholder="Write the title here"
                            />
                        </div>
                        <div className="border-b-4 border-[#E9E9EA]">
                            <textarea
                                className="w-full text-sm h-48 mt-2 py-2 px-1 ring-0 resize-none"
                                placeholder="Anything you want to write"
                            ></textarea>
                        </div>
                        <div className="tabvar py-1">
                            <button className="tab text-md font-semibold mr-3 text-sm text-dashboardGray p-2">
                                Survey
                            </button>
                            <button className="tab activate text-md font-semibold text-sm  border-b-2 p-2">
                                Test
                            </button>
                        </div>
                        <p className="text-sm mb-6">
                            We are providing only MBTI test for now, but
                            planning to diversify the types of tests in the near future.
                            <br />
                            You need to write down the proper questions to
                            <br />
                            distinguich E/I, N/S, F/T, P/J, and prepare 16
                            images for
                            <br />
                            each MBTI.
                        </p>
                        <div className="form">
                            <div className="question-group">
                                <div className="question-section flex items-center justify-between mb-2">
                                    <div className="question-left-container flex item-center">
                                        <div className="question-number mr-2">
                                            <div className="circle rounded-full border w-6 h-6 pt-[1px] text-center text-sm font-semibold">
                                                01
                                            </div>
                                        </div>
                                        <div className="question text-sm pt-[2px]">
                                            <input placeholder="E vs I"></input>
                                        </div>
                                    </div>
                                    <div className="question-setting">
                                        <Icon className="text-3xl" icon="mdi-light:dots-horizontal"></Icon>
                                    </div>
                                </div>
                                <div className="option-section pl-2 mb-4">
                                    <ul className="option-list mb-2">
                                        <li className="option-item flex justify-between">
                                            <div className="option-left-container flex items-center">
                                                <div className="option-number text-sm">
                                                    1
                                                </div>
                                                <div className="option-input">
                                                    <input className="text-sm" placeholder="option 1"></input>
                                                </div>
                                            </div>
                                            <div className="option-action flex items-center">
                                                <Icon className="text-2xl mr-2" icon="mdi-light:image"></Icon>
                                                <Icon className="text-2xl mr-1" icon="mdi-light:delete"></Icon>
                                            </div>
                                        </li>
                                        <li className="option-item flex justify-between">
                                            <div className="option-left-container flex items-center">
                                                <div className="option-number text-sm">
                                                    2
                                                </div>
                                                <div className="option-input">
                                                    <input className="text-sm" placeholder="option 2"></input>
                                                </div>
                                            </div>
                                            <div className="option-action flex items-center">
                                                <Icon className="text-2xl mr-2" icon="mdi-light:image"></Icon>
                                                <Icon className="text-2xl mr-1" icon="mdi-light:delete"></Icon>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="option-add flex items-center text-md text-dashboardGray">
                                        <Icon className="mr-1" icon="mdi-light:plus-circle"></Icon>
                                        <span className="text-xs mt-[1px]">Add another option</span>
                                    </div>
                                </div> {/* option */}
                            </div>{/* question */}
                        </div> {/* form */}
                        <button className="w-full bg-primaryColor rounded-xl font-bold py-3 mb-12">Submit</button>
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
            </>
        ): null}
        </>
    );
}
