import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/pages/Home";
import Feed from "./components/pages/Feed";
import MyPage from "./components/pages/MyPage";
import Bottom from "./components/pages/Bottom";
import CreateModal from "./components/Modal/CreateModal";

function App() {
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
    
    const toggleModal = () => {
        setIsOpenCreateModal(!isOpenCreateModal);
    };

    const [userAccount, setUserAccount] = useState({
        isConnect: "",
        Account: "",
    });

    let walletConnect = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
            localStorage.setItem("isConnected", accounts);
            setUserAccount({ Account: accounts[0] });
        }
        if (accounts.length === undefined) {
            localStorage.removeItem("isConnected");
            setUserAccount({ Account: "" });
        }
    };

    const getCurrentWalletConnected = async () => {
        if (window.ethereum) {
            try {
                const addressArray = await window.ethereum.request({
                    method: "eth_accounts",
                });

                if (addressArray.length > 0) {
                    setUserAccount({ Account: addressArray[0] });
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    function logout() {
        localStorage.removeItem("isConnected");
        setUserAccount({ Account: "" });
    }

    useEffect(() => {
        if (userAccount.Account !== null) {
            getCurrentWalletConnected();
        }
    }, []);

    return (
        <>
            <Router>
                <CreateModal isOpen={isOpenCreateModal} toggleModal={toggleModal}/>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main
                                currentAccount={userAccount.Account}
                                connectWallet={walletConnect}
                                disConnectWallet={logout}
                            />
                        }
                    />
                    <Route path="/Home" element={<Home toggleModa/>} />
                    <Route path="/Feed" element={<Feed />} />
                    <Route path="/MyPage" element={<MyPage />} />
                </Routes>
                <Bottom toggleModal={toggleModal}/>
            </Router>
        </>
    );
}

export default App;
