import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Bottom = () => {
    const [activeNav, setActiveNav] = useState(1);
    const onClick = () => setActiveNav(!activeNav);

    return (
        <nav className="w-full flex justify-evenly fixed bottom-0 mb-4">
            {/* 하단 네비게이션 최상위 태그 */}
            <div className="w-1/4 flex justify-center flex-col items-center shrink-0">
                <Icon className="homebtn" icon={"mdi-light:home"} />
                <p>Home</p>
            </div>
            {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
            <div className="w-1/4 flex jutify-center flex-col items-center shrink-0">
                <Icon icon="mdi-light:grid" />
                <p>Feed</p>
            </div>
            <div className="w-1/4 flex justify-center flex-col items-center shrink-0">
                <Icon icon="mdi-light:plus-box" />
                New
            </div>
            <div className="w-1/4 flex justify-center flex-col items-center shrink-0">
                <Icon icon="mdi-light:account" />
                MyPage
            </div>
        </nav>
    );
};

export default Bottom;
