import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';

const Survey = ()=>{
    const navigate = useNavigate();

    function clickBackHandler(){
        navigate(-1);
    }

    return (
        <div className="Survey">
            <div className="p-4 flex justify-between items-center shadow-md">
                <button onClick={clickBackHandler}>
                    <Icon className="text-2xl" icon="mdi-light:chevron-left"></Icon>
                </button>
                <h1 className="font-semibold">Survey</h1>                
                <button>
                    save
                </button>
            </div>
            <div className="form survey-form p-4">
                <div className="survey-info mb-8">
                    <h2 className="title font-semibold mb-2">[Phaver] Research on User Experience</h2>
                    <p className="description text-sm">Thank you for your participaton on this survey. This Survey is processing for research to improve UX/UI design of our product. </p>
                </div>
                <div className="question-group">
                    <div className="question-section flex items-center justify-between mb-2">
                        <div className="question-left-container flex item-center">
                            <div className="question-number mr-2">
                                <div className="circle rounded-full border w-6 h-6 pt-[1px] text-center text-sm font-semibold">
                                    01
                                </div>
                            </div>
                            <div className="question text-sm pt-[2px]">
                                Would you like the UX/UI design for Phaver?
                            </div>
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
                                        Great
                                    </div>
                                </div>
                            </li>
                            <li className="option-item flex justify-between">
                                <div className="option-left-container flex items-center">
                                    <div className="option-number text-sm">
                                        2
                                    </div>
                                    <div className="option-input">
                                        Good
                                    </div>
                                </div>
                            </li>
                            <li className="option-item flex justify-between">
                                <div className="option-left-container flex items-center">
                                    <div className="option-number text-sm">
                                        3
                                    </div>
                                    <div className="option-input">
                                        So so
                                    </div>
                                </div>
                            </li>
                            <li className="option-item flex justify-between">
                                <div className="option-left-container flex items-center">
                                    <div className="option-number text-sm">
                                        4
                                    </div>
                                    <div className="option-input">
                                        Not at all
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> {/* option */}
                </div>{/* question */}
                <div className="question-group">
                    <div className="question-section flex items-center justify-between mb-2">
                        <div className="question-left-container flex item-center">
                            <div className="question-number mr-2">
                                <div className="circle rounded-full border w-6 h-6 pt-[1px] text-center text-sm font-semibold">
                                    02
                                </div>
                            </div>
                            <div className="question text-sm pt-[2px]">
                                How much do you like the UI design for connecting wallet?
                            </div>
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
                                        Great
                                    </div>
                                </div>
                            </li>
                            <li className="option-item flex justify-between">
                                <div className="option-left-container flex items-center">
                                    <div className="option-number text-sm">
                                        2
                                    </div>
                                    <div className="option-input">
                                        Good
                                    </div>
                                </div>
                            </li>
                            <li className="option-item flex justify-between">
                                <div className="option-left-container flex items-center">
                                    <div className="option-number text-sm">
                                        3
                                    </div>
                                    <div className="option-input">
                                        So so
                                    </div>
                                </div>
                            </li>
                            <li className="option-item flex justify-between">
                                <div className="option-left-container flex items-center">
                                    <div className="option-number text-sm">
                                        4
                                    </div>
                                    <div className="option-input">
                                        Not at all
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> {/* option */}
                </div>{/* question */}
                <div className="question-group">
                    <div className="question-section flex items-center justify-between mb-2">
                        <div className="question-left-container flex item-center">
                            <div className="question-number mr-2">
                                <div className="circle rounded-full border w-6 h-6 pt-[1px] text-center text-sm font-semibold">
                                    03
                                </div>
                            </div>
                            <div className="question text-sm pt-[2px]">
                                If you don't want to use Phaver again, why would be so?
                            </div>
                        </div>
                    </div>
                    <div className="option-section pl-2 mb-4">
                        <ul className="option-list mb-2">
                            <li className="option-item flex justify-between">
                                <div className="option-left-container flex items-center">
                                    <div className="option-number text-sm">
                                        A
                                    </div>
                                    <div className="option-input">
                                        <input className="" placeholder="short answer"></input>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> {/* option */}
                </div>{/* question */}
                <div className="question-group">
                    <div className="question-section flex items-center justify-between mb-2">
                        <div className="question-left-container flex item-center">
                            <div className="question-number mr-2">
                                <div className="circle rounded-full border w-6 h-6 pt-[1px] text-center text-sm font-semibold">
                                    04
                                </div>
                            </div>
                            <div className="question text-sm pt-[2px]">
                                How much do you grade for communicating with other users in phaver?
                            </div>
                        </div>
                    </div>
                    <div className="option-section pl-2 mb-4">
                        <ul className="option-list mb-2">
                            <li className="option-item flex justify-between">
                                <div className="option-left-container flex items-center">
                                    <div className="option-number text-sm">
                                        A
                                    </div>
                                    <div className="option-input">
                                        <input placeholder="1-10"></input>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> {/* option */}
                </div>{/* question */}
                <button className="w-full bg-primaryColor rounded-xl font-bold py-3 mb-24">Submit</button>
            </div>
        </div>
    );
}

export default Survey;