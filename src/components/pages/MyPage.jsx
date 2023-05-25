import Bottom from "./Bottom";
import "./MyPage.css";
import { Icon } from "@iconify/react";

const MyPage = () =>{
    return (
        <>
        <div className="w-full h-[88px] relative bg-primaryColor">
            <div className="w-[64px] h-[64px] bg-[#d9d9d9] absoulte top-[52px] rounded-full">
                
            </div>
        </div>
        <div className="profile">
            <div className="icon-collect flex justify-end py-2">
                <button>
                    <Icon className="w-8 h-8 mr-2" icon={"mdi-light:bell"} />
                </button>
                <button>
                    <Icon className="w-8 h-8 mr-2" icon={"mdi-light:settings"} />
                </button>
            </div>
            <div className="profile-name "></div>
        </div>
        <Bottom/>
        </>
    )
}

export default MyPage;