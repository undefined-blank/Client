import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Icon } from '@iconify/react';
import Bottom from './Bottom';
import ImgSlide from './ImgSlide';
import ImgSlide2 from './ImgSlide2';

const dummydata = [
    {
        title: 'Javachip Frapuccino vs Ice Vanilla Latte',
        writer: 'dsasvsd.lens',
    },
    {
        title: 'asbsfafsb vs Ice safbfas fsabasf',
        writer: 'adbfadad.lens',
    },
    {
        title: '[Pahver] Research on User Experience',
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

function Home() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        console.log('modal bool : ', modal);
    };

    const [modal2, setModal2] = useState(false);

    const toggleModal2 = () => {
        setModal2(!modal2);
        console.log('modal bool : ', modal);
    };

    const modalStyle = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.45)',
            zIndex: 10,
        },
        content: {
            display: 'flex',
            justifyContent: 'center',
            background: '#ffffff',
            overflow: 'auto',
            top: '18rem',
            left: '60px',
            right: '60px',
            bottom: '18rem',
            borderRadius: '14px',
            outline: 'none',
            zIndex: 10,
            padding: '0px',
        },
    };
    return (
        <>
            <div className="flex justify-between border-b-4" style={{ borderColor: '#e9ecef' }}>
                <div className="p-4 text-3xl font-bold">Blank</div>
                <div className="flex p-4 text-3xl mt-2 ">
                    <Icon icon="mdi-light:magnify" className="mr-2" />
                    <Icon icon="mdi-light:menu" />
                </div>
            </div>

            <div className="body" style={{ width: 390 }}>
                <div className="p-4 pb-2 text-xl font-bold mr-auto text-left">Suggested survey for you</div>
                <div className="ml-4">
                    <ImgSlide />
                </div>
                <div className="p-4 pb-2 text-xl font-bold mr-auto text-left">Now trending 🔥</div>
                <div className="ml-4">
                    <ImgSlide2 />
                </div>
                <div className="p-4 pb-2 text-xl font-bold mr-auto text-left">148 Blankers are now answering</div>
                <div className="flex">
                    <div className="bg-pink h-24 w-72 ml-4">
                        <div className="text-xl text-left font-bold ml-2">Javachip Frapuccino vs Ice Vanilla Latte</div>
                        <div className="flex mr-auto ml-2 mt-1.5">
                            <div className="w-5 h-5 bg-white rounded-full"></div>
                            <div className="ml-1 text-bold">starbucks.lens</div>
                        </div>
                    </div>
                    <div className="mx-auto mb-3">
                        <Icon icon="mdi-light:arrow-right" color="#ccc" className="w-12 h-12 mx-auto" />
                        <div className="text-lg text-gray2 text-center">Let's do this</div>
                    </div>
                </div>
                <div className="p-4 pb-2 text-xl font-bold mr-auto text-left">Wanna see what others do?</div>
                <div className="flex">
                    <div className="bg-gray h-36 mx-4" style={{ width: '22.3rem' }}>
                        <div className="flex mr-auto ml-2 mb-1 mt-1.5">
                            <div className="w-5 h-5 bg-white rounded-full"></div>
                            <div className="ml-1 text-sm">noul.lens</div>
                        </div>
                        <div className="flex">
                            {/* 아랫부분 나중에 다시 보기 */}
                            <div className="text-left ml-2 w-60 overflow-hidden overflow-ellipsis max-h-24">
                                This test is insane!!<br></br> You guys should really try. I got ‘Lazy Rabbit’ and the
                                NFT is so cute so it blah blah blah blah blah blah blah blah blah blah blah blah blah
                                blah
                            </div>
                            <div className="h-24 w-24 bg-white"></div>
                        </div>
                    </div>
                </div>
                <div className="p-4 pb-2 text-xl font-bold mr-auto text-left">All we have for you</div>
                <div className="flex justify-between mx-4">
                    <button onClick={toggleModal}>Filter</button>
                    <Modal isOpen={modal} style={modalStyle}>
                        <div className="flex justify-between items-center flex-col w-full">
                            <div className="flex justify-between flex-col items-center w-full h-full my-6">
                                <div className="text-xl">Following</div>
                                <div className="text-xl">Reward</div>
                                <div className="text-xl">Survey</div>
                                <div className="text-xl">Test</div>
                            </div>
                            <div
                                onClick={toggleModal}
                                className="w-full bg-lightgreen flex items-center justify-center h-24"
                            >
                                OK
                            </div>
                        </div>
                    </Modal>
                    <button onClick={toggleModal2}>Order by</button>
                    <Modal isOpen={modal2} style={modalStyle}>
                        <div className="flex justify-between items-center flex-col w-full">
                            <div className="flex justify-between flex-col items-center w-full h-full my-6">
                                <div className="text-xl">Newest</div>
                                <div className="text-xl">Oldest</div>
                                <div className="text-xl">Most Popular</div>
                                <div className="text-xl">Most Reward</div>
                            </div>
                            <div
                                onClick={toggleModal2}
                                className="w-full bg-lightgreen flex items-center justify-center h-24"
                            >
                                OK
                            </div>
                        </div>
                    </Modal>
                </div>
                {dummydata.map((data, index) => {
                    return (
                        <Link to="/Survey"
                            className={`${
                                index % 3 === 0 ? 'bg-pink' : index % 3 === 1 ? 'bg-index1' : 'bg-index2 text-white'
                            } h-24 ml-4 my-3 p-2 flex flex-col`}
                            style={{ width: '22.3rem' }}
                            key={index}
                        >
                            <div className=" text-left font-bold ml-2">{data.title}</div>
                            <div className="flex mr-auto ml-2">
                                <div className="w-5 h-5 bg-white rounded-full"></div>
                                <div className="ml-1 text-bold">{data.writer}</div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="bottom">
                <Bottom />
            </div>
        </>
    );
}

export default Home;
