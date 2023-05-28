import React, {useState} from "react";
import Bottom from "./Bottom";
import { Icon } from "@iconify/react";
import Post from "../Post";

function Feed() {
    const [isTyped, setIsTyped] = useState(false);

    // tab can be "new" or "trend"
    // const [tab, setTab] = useState("new")

    return (
        <div className="feed">
            <div className="p-4 flex justify-between shadow-md">
                <h1 className="text-xl font-semibold">Feed</h1>
                { isTyped?
                    <div className="input-wrapper w-full px-4 flex">
                        <input 
                            className="w-full border-b-2 w-full mr-2"
                            placeholder="type kewords."
                        />
                        <button 
                            className="exit"
                            onClick={()=>{
                                setIsTyped(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    :(
                    <button 
                        className="cursor-pointer"
                        onClick={()=>{
                            setIsTyped(true);
                        }}
                    >
                        <Icon icon="mdi-light:magnify" className="mr-2" />
                    </button>
                )}
                
            </div>
            <div className="tabvar p-4">
                <button className="tab activate text-md font-semibold mr-3 border-b-2">New</button>
                <button className="tab text-md font-semibold text-dashboardGray">Now Trending</button>
            </div>
            <div className="feed-list p-4">
                <Post></Post>
            </div>
            <Bottom />
        </div>
    );
}

export default Feed;
