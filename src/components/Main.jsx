import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    const [userAccount, setUserAccount] = useState({
        isConnect: '',
        Account: '',
    });
    let walletConnect = async () => {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        if (accounts.length > 0) {
            localStorage.setItem('isConnected', accounts);
            setUserAccount({ Account: accounts[0] });
        }
        if (accounts.length === undefined) {
            localStorage.removeItem('isConnected');
            setUserAccount({ Account: '' });
            console.log(accounts);
        }
        navigate('/Home');
    };
    const getCurrentWalletConnected = async () => {
        if (window.ethereum) {
            try {
                const addressArray = await window.ethereum.request({
                    method: 'eth_accounts',
                });

                if (addressArray.length > 0) {
                    setUserAccount({ Account: addressArray[0] });
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    useEffect(() => {
        if (userAccount.Account !== null) {
            getCurrentWalletConnected();
        }
    }, []);

    return (
        <div className="flex items-center justify-center h-screen flex-col bg-mainBg">
            <img src="/blankLogo.svg" alt="My Image" className="w-50" />
            <div>
                <button
                    onClick={walletConnect}
                    style={{
                        border: '4px solid #7ff5e0',
                        padding: '21px',
                        borderRadius: '20px',
                        fontSize: '23px',
                        marginTop: '30px',
                        fontWeight: 'bold',
                        color: '#7ff5e0',
                    }}
                >
                    Wallet Connect
                </button>
            </div>
        </div>
    );
};
export default Main;
