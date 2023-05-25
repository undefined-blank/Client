import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/pages/Home";
import Feed from "./components/pages/Feed";
import New from "./components/pages/New";
import Reword from "./components/pages/Reword";
import MyPage from "./components/pages/MyPage";

function App() {
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
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Feed" element={<Feed />} />
                    <Route path="/New" element={<New />} />
                    <Route path="/Reword" element={<Reword />} />
                    <Route path="/MyPage" element={<MyPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
