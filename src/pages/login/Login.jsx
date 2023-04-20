import "./login.css";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import React from "react";

import pp from "../../assets/pp.jpg"

import { UsersContext } from "../../helpers/UserContext/UserDataContext";

export default function Login() {
  
  const { users, setUsers, userBalance, setUserBalance, errorMessage, setErrorMessage, connButtonText, setConnButtonText,
    connectWalletHandler, accountChangedHandler, getBalance } = useContext(UsersContext);

  // const handleConnection = ()=>{
  //   setUsers(true);
  // }

  return (
    <div className="login-container">
    <div className="login-card">
      <h1 className="login-title">Connect to Metamask</h1>
      <div className="image-container">
        <img
          alt="Metamask Logo"
          src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
        />
      </div>
      <button className="login-button" onClick={connectWalletHandler}>
        Connect
      </button>
    </div>
  </div>  

  );
}
