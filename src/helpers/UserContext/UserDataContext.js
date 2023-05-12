import React, { useState, useContext, createContext, useEffect } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState('Connect');


  const hexToEth = (hex) => {
    const decimalValue = parseInt(hex, 16);
    const eths = decimalValue / 1000000000000000000; // 10^18
    return eths.toString();
  }
  
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
        setUserBalance((balance));
    });
  }

  const disconnectWalletHandler = () => {
    if (window.ethereum) { // check if the user's wallet is connected
      if (window.ethereum.selectedAddress) { // check if an address is selected
        // Clear the current provider
        window.ethereum = null;
        console.log('Wallet disconnected.');
      } else {
        console.log('Wallet is already disconnected.');
      }
    } else {
      console.log('No wallet found.');
    }
    
    
  }


  window.ethereum.on("accountsChanged",accountChangedHandler);

  return (
      <UsersContext.Provider
      value={{
        users, setUsers, userBalance, setUserBalance, errorMessage, setErrorMessage, connButtonText, setConnButtonText,
        connectWalletHandler, accountChangedHandler, getBalance, disconnectWalletHandler
     }}
        >
      {children}
    </UsersContext.Provider>
  );
};
