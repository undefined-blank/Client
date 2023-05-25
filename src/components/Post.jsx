const Post = ()=>{
    return (
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
                        <button className="w-full h-[60px] bg-primaryColor rounded-2xl mb-2">Let's do the test!</button>
                        <img className="w-full" src={`${process.env.PUBLIC_URL}/image.jpeg`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;