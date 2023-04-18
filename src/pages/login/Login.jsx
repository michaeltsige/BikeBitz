import "./login.css";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import React from "react";

import { UsersContext } from "../../helpers/UserContext/UserDataContext";

export default function Login() {
  
  const { users, setUsers, userBalance, setUserBalance, errorMessage, setErrorMessage, connButtonText, setConnButtonText,
    connectWalletHandler, accountChangedHandler, getBalance } = useContext(UsersContext);

  // const handleConnection = ()=>{
  //   setUsers(true);
  // }

  return (
    <div className="login">
      
      <span className="loginTitle">Connect to Metamask</span>
      <a href="/settings" class="image">
        <img 
          alt="Metamask Logo" 
          src="https://img.freepik.com/premium-vector/metamask-logo-crypto-wallet-defi-web3-dapps-nfts-isolated-white-background_337410-1911.jpg?w=740"
        />
        <span>Metamask Wallet</span>
      </a>
        <button className="loginButton" onClick={connectWalletHandler}>Connect</button>
    </div>
  );
}
