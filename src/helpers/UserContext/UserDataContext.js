import React, { useState, useContext, createContext, useEffect } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect');

  const connectWalletHandler = () => {
    if(window.ethereum){
        window.ethereum.request({method: 'eth_requestAccounts'})
        .then(result => {
            accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage('Install Metamask');
    }
  }

  const accountChangedHandler = (newAccount) => {
    setUsers(newAccount);
    getBalance(newAccount);
  }
  
  const getBalance = (address) => {
    window.ethereum.request({method: 'eth_getBalance', params:[address , 'latest']})
    .then(balance => {
        setUserBalance(balance);
    });
  }

  return (
      <UsersContext.Provider
      value={{
        users, setUsers, userBalance, setUserBalance, errorMessage, setErrorMessage, connButtonText, setConnButtonText,
        connectWalletHandler, accountChangedHandler, getBalance
     }}
        >
      {children}
    </UsersContext.Provider>
  );
};
