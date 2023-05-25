import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Bottom = () => {
    const [activeNav, setActiveNav] = useState(1);
    const onClick = () => setActiveNav(!activeNav);

    return (
        <nav className="wrapper" style={{ overflow: "hidden" }}>
            {/* 하단 네비게이션 최상위 태그 */}
            <div
                style={{
                    textAlign: "center",
                    float: "left",
                    width: "25%",
                    height: 45,
                }}
            >
                <Icon className="homebtn" icon={"mdi-light:home"} />
                Home
            </div>
            {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
            <div
                style={{
                    textAlign: "center",
                    float: "left",
                    width: "25%",
                    height: 45,
                }}
            >
                <Icon icon="mdi-light:grid" />
                Feed
            </div>
            <div
                style={{
                    textAlign: "center",
                    float: "left",
                    width: "25%",
                    height: 45,
                }}
            >
                <Icon icon="mdi-light:plus-box" />
                New
            </div>
            <div
                style={{
                    textAlign: "center",
                    float: "left",
                    width: "25%",
                    height: 45,
                }}
            >
                <Icon icon="mdi-light:account" />
                MyPage
            </div>
        </nav>
    );
};

export default Bottom;
