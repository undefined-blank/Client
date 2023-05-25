import {useState, useEffect} from 'react';
import Bottom from "./Bottom";
import { Icon } from "@iconify/react";

const dummydata_for_history = [
    {
        title: 'Javachip Frapuccino vs Ice Vanilla Latte',
        writer: 'dsasvsd.lens',
    },
    {
        title: 'asbsfafsb vs Ice safbfas fsabasf',
        writer: 'adbfadad.lens',
    },
    {
        title: 'asfbafdba afbadf vs Ice fadbafdb afbsa',
        writer: 'asdgasdg.lens',
    },
    {
        title: 'asfbafdba afbadf vs Ice fadbafdb afbsa',
        writer: 'asdgasdg.lens',
    },
    {
        title: 'asfbafdba afbadf vs Ice fadbafdb afbsa',
        writer: 'asdgasdg.lens',
    },
    {
        title: 'asfbafdba afbadf vs Ice fadbafdb afbsa',
        writer: 'asdgasdg.lens',
    },
    {
        title: 'asfbafdba afbadf vs Ice fadbafdb afbsa',
        writer: 'asdgasdg.lens',
    },
];



const MyPage = () =>{
    const [SBTs, setSBTs] = useState([]);
    // tab can be "feed" or "history"
    const [tab, setTab] = useState("feed");

    

    return (
        <>
        <div className="container-profile fixed top-0 w-full">
            <div className="w-full h-[88px] relative bg-primaryColor">
                <div className="w-[72px] h-[72px] bg-[#d9d9d9] absolute -bottom-[30px] left-[20px] rounded-full">
                    
                </div>
            </div>
            <div className="profile shadow-md pb-4">
                <div className="icon-collect flex justify-end py-2">
                    <button>
                        <Icon className="w-8 h-8 mr-2" icon={"mdi-light:bell"} />
                    </button>
                    <button>
                        <Icon className="w-8 h-8 mr-2" icon={"mdi-light:settings"} />
                    </button>
                </div>
                <div className="profile px-2 mb-2">
                    <div className='nametag flex items-center mb-2'>
                        <h1 className='text-2xl font-bold mr-2'>noul.lens</h1>
                        <button className="mr-2 pt-1">
                            <Icon icon={"mdi-light:vector-arrange-below"}/>
                        </button>
                        <div className="followers-profile flex">
                            <div className="w-[16px] h-[16px] mr-1 rounded-full bg-profileGray"></div>
                            <div className="w-[16px] h-[16px] mr-1 rounded-full bg-profileGray"></div>
                            <div className="w-[16px] h-[16px] mr-1 rounded-full bg-profileGray"></div>
                            <div className="w-[16px] h-[16px] mr-2 rounded-full bg-profileGray"></div>
                            <p className="text-xs">+5</p>
                        </div>
                    </div>
                    <div className='dashboard mb-2'>
                        <span className='mr-2 text-dashboardGray'>12 following</span>
                        <span className='mr-2 text-dashboardGray'>23 followers</span>
                    </div>
                    <div className="bio">
                        <p className="text-xs">Hi, I am from korea I like Blockchain and I am INTP</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4 py-4 mt-[250px]">
            <div className="container-sbt">
                <h2 className="py-2 font-bold text-sm">SBT Gallery</h2>
                <div className="sbt-list flex">
                    <div className="w-[64px] h-[64px] mr-2 rounded-full bg-profileGray"></div>
                    <div className="w-[64px] h-[64px] mr-2 rounded-full bg-profileGray"></div>
                    <div className="w-[64px] h-[64px] mr-2 rounded-full bg-profileGray"></div>
                    <div className="w-[64px] h-[64px] mr-3 rounded-full bg-profileGray"></div>
                </div>
            </div>
            <div className="tabvar">
                <div className="tab-list py-4">
                    <button className="font-semibold p-2 border-b-4">Feed</button>
                    <button className="font-semibold p-2 text-dashboardGray">History</button>
                </div>
                <div className="contents-list">
                    <div className="feed flex">
                        <div className="feed-profile-image mr-3">
                            <div className="image-wrapper w-[48px] h-[48px] rounded-full bg-profileGray">
                            </div>
                        </div>
                        <div className="feed-right flex flex-col">
                            <div className="feed-header flex">
                                <p className="text-xl mr-2">noul.lens</p>
                                <div className="feed-commenter flex pt-2">
                                    <div className="w-[16px] h-[16px] mr-1 rounded-full bg-primaryColor"></div>
                                    <div className="w-[16px] h-[16px] mr-1 rounded-full bg-primaryColor"></div>
                                    <div className="w-[16px] h-[16px] mr-1 rounded-full bg-primaryColor"></div>
                                    <div className="w-[16px] h-[16px] mr-2 rounded-full bg-primaryColor"></div>
                                </div>
                                <p className="time text-dashboardGray pt-1">2d</p>
                            </div>
                            <div className="feed-body py-2">
                                <p>아니 이 테스트 개웃김 ㄹㅇ 일러스트도 겁나 귀엽고 내스타일임 그리고 poap 주는데 뭔가 뿌듯해짐 나도 핫걸 된 기분?</p>
                            </div>
                            <div className="feed-originfeed py-4 px-4 border border-profileGray rounded-2xl">
                                <div className="feed-header flex items-center">
                                    <div className="image-wrapper w-[24px] h-[24px] rounded-full bg-profileGray mr-2"></div>
                                    <p className="text-xl mr-2">undefined.lens</p>
                                    <div className="feed-commenter flex pt-2">
                                        <div className="w-[16px] h-[16px] mr-1 rounded-full bg-primaryColor"></div>
                                        <div className="w-[16px] h-[16px] mr-1 rounded-full bg-primaryColor"></div>
                                    </div>
                                    <p className="time text-dashboardGray pt-1">2d</p>
                                </div>
                                <div className="feed-body mt-4">
                                    <p className="mb-2">핫걸 테스트 제 3탄!</p>
                                    <p className="mb-2">당신의 핫걸 척도를 알아보세요. 이거 진짜 핫걸들은 다 티가 난다던데?</p>
                                    <button className="w-full h-[60px] bg-primaryColor rounded-2xl">Let's do the test!</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* { tab === "feed" ? (
                        
                    ):(

                    )} */}
                </div>
            </div>
        </div>
        <Bottom/>
        </>
    )
}

export default MyPage;
