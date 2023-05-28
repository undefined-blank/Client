import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Bottom = ({toggleModal}) => {

    return (
        <nav className="w-full flex justify-evenly fixed bottom-0 p-4 bg-white">
            {/* 하단 네비게이션 최상위 태그 */}
            <Link to="/Home" className="w-1/4 flex justify-center flex-col items-center shrink-0">
                <Icon className="homebtn" icon={'mdi-light:home'} />
                <p>Home</p>
            </Link>
            {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
            <Link to="/Feed" className="w-1/4 flex jutify-center flex-col items-center shrink-0">
                <Icon icon="mdi-light:grid" />
                <p>Feed</p>
            </Link>
            <button 
                className="w-1/4 flex justify-center flex-col items-center shrink-0"
                onClick={toggleModal}
            >
                <Icon icon="mdi-light:plus-box" />
                New
            </button>
            <Link to="/MyPage" className="w-1/4 flex justify-center flex-col items-center shrink-0">
                <Icon icon="mdi-light:account" />
                My
            </Link>
        </nav>
    );
};

export default Bottom;
